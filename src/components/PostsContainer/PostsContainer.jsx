import "./PostsContainer.css";
import PostLink from "../PostLink/PostLink";
import { fetchPosts } from "../../data/fetchPosts.js";
import { useState, useEffect } from "react";
import { language, languageDictionary } from "../../data/languageManager";
import { languageContext } from "../../contexts/languageContext";
import { useContext } from "react";
import { NoPost } from "../NoPost/NoPost.jsx";

function PostsContainer(props) {
    const [posts, setPosts] = useState(null);
    const [userLang] = useContext(languageContext);

    useEffect(() => fetchPosts(props.query).then(result => setPosts(result)), []);

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
                    createdAt={post.createdAt}
                    key={Date.now() + Math.random()}
                    />
                }
            )}
            {!posts && <NoPost message={languageDictionary[language()]["loading"]} />}
            {(posts && posts.length < 1) && <NoPost message={languageDictionary[language()]["nopost"]} />}
            
        </section>
    );
}

export default PostsContainer;