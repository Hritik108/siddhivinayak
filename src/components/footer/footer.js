import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";
import classesLogo from "../../assets/images/classesLogo.png";
import "../../assets/css/_footer.css";

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-widgets-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="single-footer-widget wow fadeInLeft">
                                <div className="about-us-widget">
                                    <a href="/">
                                        <a className="footer-logo d-block">
                                            <img
                                                src={classesLogo}
                                                alt="Classes Logo"
                                                width={100}
                                            />
                                        </a>
                                    </a>
                                    <p>
                                        Xmoze helps millions of people get the
                                        best Wordpress theme design and offers
                                        software reviews, ratings, comprehensive
                                        services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
                            <div
                                className="single-footer-widget wow fadeInLeft"
                                data-wow-delay=".2s"
                            >
                                <div className="widget-title">
                                    <h5>Company</h5>
                                </div>
                                <ul>
                                    <li>
                                        <a href="/about">
                                            <a>About xmoze</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact">
                                            <a>Contact & support</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <a>Setting & privacy</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Setting & privacy</a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
                            <div
                                className="single-footer-widget wow fadeInLeft"
                                data-wow-delay=".4s"
                            >
                                <div className="widget-title">
                                    <h5>Services</h5>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <a>Incident responder</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Secure managed IT</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Check website Url</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Locker security</a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
                            <div
                                className="single-footer-widget wow fadeInLeft"
                                data-wow-delay=".6s"
                            >
                                <div className="widget-title">
                                    <h5>Resources</h5>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <a>Payment plans</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Blogs & guides</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Premium support</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <a>Our products</a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <div className="container">
                    <div className="footer-bottom-content d-md-flex justify-content-between">
                        <div
                            className="site-copyright wow fadeInUp"
                            data-wow-delay=".2"
                            data-wow-duration="1s"
                        >
                            <p>
                                &copy; 2022{" "}
                                <a href="#">
                                    <a>Xmooze Theme</a>
                                </a>{" "}
                                All Rights Reserved.
                            </p>
                        </div>
                        <div
                            className="social-as mt-4 mt-md-0 wow fadeInUp"
                            data-wow-delay=".3"
                            data-wow-duration="1s"
                        >
                            <a href="#">
                                <a>
                                    <FaFacebookF />
                                </a>
                            </a>
                            <a href="#">
                                <a>
                                    <FaTwitter />
                                </a>
                            </a>
                            <a href="#">
                                <a>
                                    <FaInstagram />
                                </a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
