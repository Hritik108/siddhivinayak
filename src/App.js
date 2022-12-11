import "./App.css";
import React from "react";
import AboutUs from "./components/aboutUs.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarPage from "./pages/navbarpage.js";
import Footer from "./pages/footerpage.js";
import Contact from "./components/contact/contact.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarPage />
        <Routes>
          <Route exact path="/" element={<h1> </h1>}></Route>
          <Route exact path="/home" element={<h1> </h1>}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
