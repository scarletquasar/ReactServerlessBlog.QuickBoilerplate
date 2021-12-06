import "./NoPost.css";

function NoPost(props) {
    return (
        <div class="no-post">
            {props.message ?? ""}
        </div>
    )
}

export { NoPost };