import "./PostsContainer.css";
import PostLink from "../PostLink/PostLink";
import { fetchPosts } from "../../data/fetchPosts.js";
import { useState, useEffect } from "react";
import { languageContext } from "../../contexts/languageContext";
import { useContext } from "react";

function PostsContainer(props) {
    const [posts, setPosts] = useState(null);
    const [userLang] = useContext(languageContext);

    useEffect(() => fetchPosts(new Date(), props.query).then(result => setPosts(result)), []);

    return (
        <section>
            {posts && posts.map(
                (post) => {
                    return <PostLink 
                    title={post[`${userLang}-title`]} 
                    description={post[`${userLang}-description`]} 
                    source={post.source} 
                    background={post[`${userLang}-background`]}
                    tags={post[`${userLang}-tags`]}
                    key={Date.now() + Math.random()}
                    />
                }
            )}
        </section>
    );
}

export default PostsContainer;