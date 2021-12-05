import { markdown } from "markdown";
import SideBar from "../../components/SideBar/SideBar.jsx";
import "./Post.css";
import { useState, useEffect } from "react";
import { fetchSourcePost } from "../../data/fetchSourcePost.js";
import { useParams } from "react-router-dom";

function Post(props) {
    const [post, setPost] = useState(null);
    const { source } = useParams();
    useEffect(() => {
        fetchSourcePost(new Date(), source)
        .then(result => setPost(result))
    }, []);

    return (
        <main>
            <SideBar />
            <section id="post-body">
                {post && <div dangerouslySetInnerHTML={{__html: markdown.toHTML(post)}} />}
            </section>
        </main>
    )
}

export default Post;