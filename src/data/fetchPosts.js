import { Container } from "container-dot-js";

export async function fetchPosts(query) {
    const postsContainer = new Container([]);
    const queryContainer = new Container([]);

    await fetch(`/content/posts.json`)
    .then(data => data.json())
    .then(result => postsContainer.set(result))

    if(query) {
        postsContainer.forEach(post => {
            let postContainer = new Container(post);
            let postAdded = false;
            postContainer.forEach(postAttribute => {
                if(!postAdded && String(postAttribute).toLowerCase().includes(query.toLowerCase())) {
                    queryContainer.add(post);
                    postAdded = true;
                }
            });
        });
        console.log(postsContainer.content());
        console.log(queryContainer.content());
        return queryContainer.first(50).content().filter(x => x !== undefined);
    }
    return postsContainer.first(5).content().filter(x => x !== undefined);
}