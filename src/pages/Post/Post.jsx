import { markdown } from "markdown";
import SideBar from "../../components/SideBar/SideBar.jsx";
import "./Post.css";

function Post(props) {
    return (
        <main>
            <SideBar />
            <section id="post-body">
                <h1 dangerouslySetInnerHTML={{__html: markdown.toHTML("**Test**")}} />
            </section>
        </main>

    )
}

export default Post;