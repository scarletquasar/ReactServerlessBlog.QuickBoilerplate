import "./PostsContainer.css";
import PostLink from "../PostLink/PostLink";
import { fetchPosts } from "../../data/fetchPosts.js";
import { useState, useEffect } from "react";

function PostsContainer() {
    const [posts, setPosts] = useState(null);

    useEffect(() => fetchPosts(new Date()).then(result => setPosts(result)), []);

    return (
        <section>
            {posts && posts.map(
                (post) => {
                    return <PostLink 
                    title={post.title} 
                    description={post.description}
                    source={post.source}
                    background={post.background}
                    />
                }
            )}
        </section>
    );
}

export default PostsContainer;