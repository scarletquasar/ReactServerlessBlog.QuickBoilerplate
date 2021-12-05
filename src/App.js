import Home from "./pages/Home/Home.jsx";
import Post from "./pages/Post/Post.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import { language } from './data/languageManager';
import { useState } from "react";
import { languageContext } from "./contexts/languageContext.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

if(!language()) language("en-Us");

function App() {
  const [userLang, setUserLang] = useState(language());

  return (
    <languageContext.Provider value={[userLang, setUserLang]}>
      <div className="App">
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/post/:source" element={<Post/>} />
          </Routes>
        </Router>
      </div>
    </languageContext.Provider>
  );
}

export default App;
