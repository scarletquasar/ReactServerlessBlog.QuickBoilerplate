import "./PostsContainer.css";
import PostLink from "../PostLink/PostLink";

function PostsContainer() {
    return (
        <section>
            <PostLink title="Test"/>
            <PostLink />
            <PostLink />
        </section>
    );
}

export default PostsContainer;