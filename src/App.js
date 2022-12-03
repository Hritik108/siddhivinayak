import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./components/aboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<h1>HOME</h1>}></Route>
          <Route exact path="/about" element={<AboutUs/>}></Route>
          <Route exact path="/contact" element={<h1>CONTACT</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
