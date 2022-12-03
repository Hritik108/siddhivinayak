import "./App.css";
import AboutUs from "./components/aboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarPage from "./pages/navbarpage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarPage />
        <Routes>
          <Route exact path="/" element={<h1> </h1>}></Route>
          <Route exact path="/home" element={<h1> </h1>}></Route>
          <Route exact path="/about" element={<h1>ABOUT</h1>}></Route>
          <Route exact path="/contact" element={<h1>CONTACT</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
