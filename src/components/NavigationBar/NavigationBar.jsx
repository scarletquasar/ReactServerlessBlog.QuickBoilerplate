import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { language } from "../../data/languageManager";

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li id="title">quasardev</li>
            </ul>
            <ul>
                <li>{language()}</li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
  }
  
  export default NavigationBar;