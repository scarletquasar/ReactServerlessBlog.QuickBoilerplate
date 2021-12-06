import "./NoPost.css";

function NoPost(props) {
    return (
        <div className="no-post">
            {props.message ?? ""}
        </div>
    )
}

export { NoPost };