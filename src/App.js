import Home from "./pages/Home/Home.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
