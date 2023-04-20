import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarPage from "./pages/navbarpage.js";
import Footer from "./components/footer/footer.js";
import Contact from "./components/contact/contact.js";
import AboutUs from "./components/AboutUs/AboutUs";
import Courses from "./components/Courses/Courses";
import HomePage from "./pages/home";

function App() {
    return (
        <Router>
            <div className="App">
                <NavbarPage />
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route exact path="/home" element={<HomePage />}></Route>
                    <Route exact path="/about" element={<AboutUs />}></Route>
                    <Route exact path="/courses" element={<Courses />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
