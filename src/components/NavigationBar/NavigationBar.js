import "./NavigationBar.css";
import { Link } from "react-router-dom";
function NavigationBar() {
    return (
        <nav>
            <ul>
                <li id="title">quasardev</li>
            </ul>
            <ul>
                <li>pt-Br</li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default NavigationBar;