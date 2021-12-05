export async function fetchPosts(date) {
    const targetFolder = `${date.getMonth() + 1}_${date.getFullYear()}`;
    let response = null;
    await fetch(`./mocks/${targetFolder}/posts.json`)
    .then(data => data.json())
    .then(result => response = result)

    return response;
}