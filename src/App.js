import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<h1>HOME</h1>}></Route>
          <Route exact path="/about" element={<h1>ABOUT</h1>}></Route>
          <Route exact path="/contact" element={<h1>CONTACT</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
