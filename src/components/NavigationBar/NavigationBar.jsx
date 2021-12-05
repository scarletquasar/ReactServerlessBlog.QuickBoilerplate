import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { language } from "../../data/languageManager";
import { languageContext } from "../../contexts/languageContext.jsx";

function NavigationBar() {
    const [userLang, setUserLang] = useContext(languageContext);

    function triggerLanguage() {
        language() === "pt-Br" ? language("en-Us") : language("pt-Br");
        userLang === "pt-Br" ? setUserLang("en-Us") : setUserLang("pt-Br");
    }

    return (
        <nav>
            <ul>
                <li id="title">quasardev</li>
            </ul>
            <ul>
                <li onClick={() => triggerLanguage()}>{userLang}</li>
                <Link to="/"><li>Home</li></Link>
            </ul>
        </nav>
    );
  }
  
  export default NavigationBar;