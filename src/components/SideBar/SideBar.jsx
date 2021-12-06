import "./SideBar.css";
import { languageDictionary } from "../../data/languageManager";
import { language } from "../../data/languageManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faDev } from "@fortawesome/free-brands-svg-icons"
import { useRef } from "react";

function startSearch(target) {
    window.location.href = "/search/" + target;
}

function SideBar() {
    const searchRef = useRef(null);
    return (
        <aside>
            <div className="item" style={{height: "5%"}}>
                <input 
                type="text"
                ref={searchRef}
                placeholder={languageDictionary[language()]["search"]} 
                />
                <button onClick={() => startSearch(searchRef.current.value)}>
                    <FontAwesomeIcon color="white" icon={faSearch} />
                </button>
            </div>
            <div onClick={(e) => startSearch(e.target.innerText)} className="item">
                <small>Javascript</small>
                <small>Frontend</small>
                <small>Backend</small>
                <small>C#</small>
                <small>Asp.Net</small>
                <small>Node.js</small>
                <small>PostgreSQL</small>
                <p>
                    <button className="social-media" onClick={() => window.open("https://twitter.com/QuasarEternum")}>
                        <FontAwesomeIcon  color="white" icon={faTwitter} />
                    </button>
                    <button className="social-media" onClick={() => window.open("https://github.com/EternalQuasar0206/")}>
                        <FontAwesomeIcon color="white" icon={faGithub} />
                    </button>
                    <button className="social-media" onClick={() => window.open("")}>
                        <FontAwesomeIcon color="white" icon={faDev} />
                    </button>
                </p>
            </div>
        </aside>
    );
}
  
export default SideBar;