import React from "react";
import "../../assets/css/navbar.css";
import jQuery from "jquery";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
      isResponsive: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (window.location.pathname === "/home") {
      this.setState({ active: "home" });
    } else if (window.location.pathname === "/") {
      this.setState({ active: "home" });
    } else if (window.location.pathname === "/about") {
      this.setState({ active: "about" });
    } else if (window.location.pathname === "/courses") {
      this.setState({ active: "courses" });
    } else if (window.location.pathname === "/contact") {
      this.setState({ active: "contact" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize(e) {
    let isResponsive = true;

    if (window.innerWidth > 880) {
      isResponsive = true;
    } else {
      isResponsive = false;
    }
    this.setState({ isResponsive });
  }

  handleScroll(event) {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 10) {
      jQuery(".navbar-main").css({
        height: "60px",
        padding: "0% 5%",
        width: "95%",
        border: "solid  #1363DF",
        borderWidth: "0px 0px 4px 0px",
        backgroundColor: "white",
      });
    } else {
      jQuery(".navbar-main").css({
        height: "80px",
        padding: "1% 10% 0% 10%",
        width: "80vw",
        border: "0px",
        backgroundColor: "transparent",
      });
    }
  }

  render() {
    const { isResponsive } = this.state;

    if (isResponsive) {
      return (
        <nav className="navbar-main">
          <div>
            <h1>THIS IS LOGO</h1>
          </div>
          <ul>
            <li>
              <a href="/home">Home</a>
              <div
                className={this.state.active === "home" ? "circle" : ""}
              ></div>
            </li>
            <li>
              <a href="/courses">Courses</a>
              <div
                className={this.state.active === "courses" ? "circle" : ""}
              ></div>
            </li>
            <li>
              <a href="/about">About Us</a>
              <div
                className={this.state.active === "about" ? "circle" : ""}
              ></div>
            </li>
            <li>
              <a href="/contact">Contact</a>
              <div
                className={this.state.active === "contact" ? "circle" : ""}
              ></div>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="navbar-mobile">
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="courses">Courses</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
