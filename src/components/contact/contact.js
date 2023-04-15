import React, { Component } from "react";
import "../../assets/css/contact.css";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { Container } from "@mui/material";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-headings">
                    <h1>Get in touch</h1>
                    <p>
                        Want to get in touch? We'd love to hear from you.
                        <br /> Here's how you can reach us...
                    </p>
                </div>
                <div className="contact">
                    <div className="contact-body">
                        <div className="cards">
                            <div className="card">
                                <Container>
                                    <div className="card-icon">
                                        <IoCall />
                                    </div>
                                    <h3 className="card-title">Talk to Us</h3>
                                    <p className="card-text">
                                        Interested to join? You can feel free to call us anytime <br />
                                        during our working hours on the following contact numbers
                                    </p>
                                    <ul>
                                        <li>
                                            <a href="tel:9819285180">+91 98192 85180</a>
                                        </li>
                                        <li>
                                            <a href="tel:8082772648">+91 80827 72648</a>
                                        </li>
                                    </ul>
                                </Container>
                            </div>

                            <div className="card">
                                <Container>
                                    <div className="card-icon">
                                        <IoLocationSharp />
                                    </div>
                                    <h3 className="card-title">Find Us Here</h3>
                                    <p className="card-text">
                                        Shop No 6, Siddhivinayak Classes, Near Agar Bazar Bus Stop,
                                        <br />
                                        Agar Bazaar, Dadar West, Mumbai - 400028
                                    </p>
                                    <br />
                                    <p className="card-text">
                                        At Ratan, Shop No: 10, S.K. Bole Road, Agar Bazaar, Near
                                        <br />
                                        Siddhivinayak Temple, Dadar West, Mumbai - 400028
                                    </p>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
