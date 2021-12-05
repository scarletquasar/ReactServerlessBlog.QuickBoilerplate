import "./PostLink.css";
import bgPlaceholder from "../../media/img/background/placeholderBg.jpg";
import { Link } from "react-router-dom";

function PostLink(props) {
    const bgSheet = {
        backgroundImage: `url('${props.background ?? bgPlaceholder}')`,
        backgroundSize: "cover"
    }
    
    return(
        <Link to={"post/" + props.source ?? "/"}>
            <article>
                <div>
                    <h2>{props.title ?? "Post"}</h2>
                    <small>{props.tags.flat()}</small>
                    <p>
                        {props.description ?? `Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Proin fringilla lobortis lorem ut ullamcorper. Pellentesque ultrices, 
                        massa mattis ultrices tristique, ante orci elementum nisi, non euismod ligula 
                        odio non turpis. Vestibulum luctus at quam sed suscipit. Sed ut felis id purus 
                        viverra placerat`}
                    </p>
                </div>
                <div style={bgSheet}>
                    
                </div>
            </article>
        </Link>
    )
}

export default PostLink;