import React from "react";
import "../../assets/css/navbar.css";
import jQuery from "jquery";
import Courses from "../Courses/Courses";
import classesLogo from "../../assets/images/classesLogo.png";

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
                height: "70px",
                borderWidth: "0px 0px 4px 0px",
                backgroundColor: "white",
                Transition: "1s",
            });
        } else {
            jQuery(".navbar-main").css({
                height: "80px",
                width: "100vw",
                border: "0px",
                backgroundColor: "transparent",
                Transition: "1s",
            });
        }
    }

    render() {
        const { isResponsive } = this.state;

        if (isResponsive) {
            return (
                <nav className="navbar-main">
                    <div>
                        <img src={classesLogo} alt="Classes Logo" width={70} />
                    </div>
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                            <div
                                className={
                                    this.state.active === "home" ? "circle" : ""
                                }
                            ></div>
                        </li>
                        <li className="dropdown">
                            <a href="#">Services</a>
                            <ul>
                                <li>
                                    <a href="#">ISCE</a>
                                </li>
                                <li>
                                    <a href="#">CBSE</a>
                                </li>
                                <li>
                                    <a href="#">SSC</a>
                                </li>
                                <li>
                                    <a href="#">HSC</a>
                                </li>
                                <li>
                                    <a href="#">JEE</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/courses">Courses</a>
                            <div
                                className={
                                    this.state.active === "courses"
                                        ? "circle"
                                        : ""
                                }
                            ></div>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                            <div
                                className={
                                    this.state.active === "about"
                                        ? "circle"
                                        : ""
                                }
                            ></div>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                            <div
                                className={
                                    this.state.active === "contact"
                                        ? "circle"
                                        : ""
                                }
                            ></div>
                        </li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <div className="navbar-menuB">
                    <div className="menu-sidebar">
                        <a className="closebtn" onClick={() => closeNav()}>
                            ×
                        </a>
                        <div>
                            <img
                                src={classesLogo}
                                alt="Classes Logo"
                                width={100}
                            />
                        </div>
                        <a className="path" href="/Home">
                            Home
                        </a>
                        <a className="path" href="/About">
                            About Us
                        </a>
                        <a className="path" href="/Career">
                            Career Counseling
                        </a>
                        <a className="path" href="/Contact">
                            Contact Us
                        </a>
                    </div>
                    <div className="hamburger" onClick={() => openNav()}>
                        ☰
                    </div>
                    {/* <img id="navbar-logo" src={Logo} /> */}
                </div>
            );
        }
        function openNav() {
            jQuery(".menu-sidebar").css({
                width: "300px",
                borderWidth: "0px 2px 0px 0px",
            });
            jQuery("body").css({ marginLeft: "30px", Transition: ".5s" });
        }

        function closeNav() {
            jQuery(".menu-sidebar").css({
                width: "0%",
                borderWidth: "0px 0px 0px 0px",
            });
            jQuery("body").css({ marginLeft: "0%", Transition: ".5s" });
        }
    }
}

export default Navbar;
