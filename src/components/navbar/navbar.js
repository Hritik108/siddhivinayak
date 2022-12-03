import React from "react";
import "../../assets/css/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar-main">
        <div>
          <h1>THIS IS LOGO</h1>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
