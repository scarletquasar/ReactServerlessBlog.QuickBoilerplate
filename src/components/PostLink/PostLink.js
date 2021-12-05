import "./PostLink.css";
import bgPlaceholder from "../../media/img/background/placeholderBg.jpg";

function PostLink(props) {
    const bgSheet = {
        backgroundImage: `url('${props.background ?? bgPlaceholder}')`,
        backgroundSize: "cover"
    }
    
    return(
        <article>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div style={bgSheet}>
                
            </div>
        </article>
    )
}

export default PostLink;