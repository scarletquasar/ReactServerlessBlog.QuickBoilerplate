import SideBar from "../../components/SideBar/SideBar.jsx";
import "./Post.css";
import { useState, useEffect, useContext } from "react";
import { languageContext } from "../../contexts/languageContext.jsx";
import { fetchSourcePost } from "../../data/fetchSourcePost.js";
import { useParams } from "react-router-dom";

function Post(props) {
    const [post, setPost] = useState(null);
    const [userLang] = useContext(languageContext);
    const { source } = useParams();

    useEffect(() => {
        fetchSourcePost(source)
        .then(result => setPost(result))
    }, [userLang]);

    return (
        <main>
            <SideBar />
            <section id="post-body">
                {post && <div dangerouslySetInnerHTML={{__html: post}} />}
            </section>
        </main>
    )
}

export default Post;