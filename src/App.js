import Home from "./pages/Home/Home.jsx";
import Post from "./pages/Post/Post.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/post" element={<Post/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
