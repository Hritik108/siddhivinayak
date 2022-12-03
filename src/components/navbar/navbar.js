import React from "react";
import "../../assets/css/navbar.css";

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
    if (window.location.pathname === "/Home") {
      this.setState({ active: "home" });
    } else if (window.location.pathname === "/") {
      this.setState({ active: "home" });
    } else if (window.location.pathname === "/About") {
      this.setState({ active: "about" });
    } else if (window.location.pathname === "/Events") {
      this.setState({ active: "events" });
    } else if (window.location.pathname === "/Career") {
      this.setState({ active: "career" });
    } else if (window.location.pathname === "/Contact") {
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
    } else {
      return <h1>Hello world</h1>;
    }
  }
}

export default Navbar;
