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
    // this.handleScroll = this.handleScroll.bind(this);
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

  On_hover(e) {
    jQuery(".circle").css({ backgroundColor: e });
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
              <a
                onMouseEnter={() => this.On_hover("red")}
                onMouseLeave={() => this.On_hover("black")}
                href="/home"
              >
                Home
              </a>
              <div
                className={this.state.active == "home" ? "circle" : ""}
              ></div>
            </li>
            <li>
              <a
                onMouseEnter={() => this.On_hover("red")}
                onMouseLeave={() => this.On_hover("black")}
                href="/courses"
              >
                Courses
              </a>
              <div
                className={this.state.active == "courses" ? "circle" : ""}
              ></div>
            </li>
            <li>
              <a
                onMouseEnter={() => this.On_hover("red")}
                onMouseLeave={() => this.On_hover("black")}
                href="/about"
              >
                About Us
              </a>
              <div
                className={this.state.active == "about" ? "circle" : ""}
              ></div>
            </li>
            <li>
              <a
                onMouseEnter={() => this.On_hover("red")}
                onMouseLeave={() => this.On_hover("black")}
                href="/contact"
              >
                Contact
              </a>
              <div
                className={this.state.active == "contact" ? "circle" : ""}
              ></div>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="navbar-mobile">
          <div>THIS IS LOGO</div>
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
