import React, { Component } from "react";
import "../../assets/css/contact.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import contact from "../../assets/images/contact.jpeg";

class Contact extends Component {
    render() {
        return (
            <div id="contactHeader">
                <img src={contact} alt="Contact Us Image" />
                <div id="contact-main" className="container">
                    <strong className="contactTitle">
                        Get in touch with Us
                    </strong>
                    <div className="designBorder"></div>
                    <h3>
                        Want to get in touch?
                        <br />
                    </h3>
                    <h3>
                        We'd love to hear from you. Here's how you can reach
                        us...
                    </h3>
                    <div className="py-4">
                        <div className="d-flex">
                            <FaPhoneAlt className="contactIcons" size={26} />
                            <h4>Phone</h4>
                        </div>
                        <div className="my-3">
                            <h5 className="me-1">
                                <a href="tel:9819285180">+91 98192 85180</a>
                            </h5>
                            <h5 className="me-1">
                                <a href="tel:8082772648">+91 80827 72648</a>
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <FaHome className="contactIcons" size={30} />
                            <h4>Address</h4>
                        </div>
                        <div className="my-3">
                            <h5 className="my-1">
                                - Shop No 6, Siddhivinayak Classes, Near Agar
                                Bazar Bus Stop, Agar Bazaar, Dadar West, Mumbai
                                - 400028
                            </h5>
                            <h5 className="my-1">
                                - At Ratan, Shop No: 10, S.K. Bole Road, Agar
                                Bazaar, Near Siddhivinayak Temple, Dadar West,
                                Mumbai - 400028
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
