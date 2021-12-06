import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { language } from "../../data/languageManager";
import { languageContext } from "../../contexts/languageContext";

function NavigationBar() {
    const [userLang, setUserLang] = useContext(languageContext);

    function triggerLanguage() {
        language() === "pt-Br" ? language("en-Us") : language("pt-Br");
        userLang === "pt-Br" ? setUserLang("en-Us") : setUserLang("pt-Br");
    }

    return (
        <nav>
            <ul>
                <Link to="/"><li id="title">blog</li></Link>
            </ul>
            <ul>
                <li onClick={() => triggerLanguage()}>{userLang}</li>
                <Link to="/"><li>Home</li></Link>
            </ul>
        </nav>
    );
  }
  
  export default NavigationBar;