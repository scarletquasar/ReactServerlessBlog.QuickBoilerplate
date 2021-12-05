import "./SideBar.css";
import { languageDictionary } from "../../data/languageManager";
import { language } from "../../data/languageManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
    return (
        <aside>
            <p>
                <input 
                type="text" 
                placeholder={languageDictionary[language()]["search"]} 
                />
                <button>
                    <FontAwesomeIcon color="white" icon={faSearch} />
                </button>
            </p>
        </aside>
    );
  }
  
  export default SideBar;