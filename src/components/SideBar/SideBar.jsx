import "./SideBar.css";
import { languageDictionary } from "../../data/languageManager";
import { language } from "../../data/languageManager";

function SideBar() {
    return (
        <aside>
            <input 
            type="text" 
            placeholder={languageDictionary[language()]["search"]} 
            />
        </aside>
    );
  }
  
  export default SideBar;