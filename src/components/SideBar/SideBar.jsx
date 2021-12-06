import "./SideBar.css";
import { languageDictionary } from "../../data/languageManager";
import { language } from "../../data/languageManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";

function startSearch(target) {
    window.location.href = "/search/" + target;
}

function SideBar() {
    const searchRef = useRef(null);
    return (
        <aside>
            <p>
                <input 
                type="text"
                ref={searchRef}
                placeholder={languageDictionary[language()]["search"]} 
                />
                <button onClick={() => startSearch(searchRef.current.value)}>
                    <FontAwesomeIcon color="white" icon={faSearch} />
                </button>
            </p>
            <p>
                <small>Javascript</small>
                <small>Frontend</small>
                <small>Backend</small>
                <small>C#</small>
                <small>Asp.Net</small>
                <small>Node.js</small>
                <small>PostgreSQL</small>
            </p>

        </aside>
    );
}
  
export default SideBar;