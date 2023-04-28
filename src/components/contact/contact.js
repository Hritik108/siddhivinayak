import React, { Component } from "react";
import "../../assets/css/contact.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";

class Contact extends Component {
    render() {
        return (
            <div id="contactHeader">
                <div className="w-75 mx-auto py-5">
                    <h1 className="fs-1">Get in Touch</h1>
                    <p>
                        Want to get in touch? We'd love to hear from you. Here's
                        how you can reach us...
                    </p>
                    <div className="p-0">
                        <div className="d-flex">
                            <FaPhoneAlt className="mt-1 me-2" />
                            <h4>Phone</h4>
                        </div>
                        <p className="my-1">
                            <a href="tel:9819285180">+91 98192 85180</a>
                        </p>
                        <p className="me-1">
                            <a href="tel:8082772648">+91 80827 72648</a>
                        </p>
                    </div>
                    <div>
                        <div className="d-flex">
                            <FaHome className="mt-1 me-2" />
                            <h4>Address</h4>
                        </div>
                        <p className="my-1">
                            - Shop No 6, Siddhivinayak Classes, Near Agar Bazar
                            Bus Stop, Agar Bazaar, Dadar West, Mumbai - 400028
                        </p>
                        <p className="my-1">
                            - At Ratan, Shop No: 10, S.K. Bole Road, Agar
                            Bazaar, Near Siddhivinayak Temple, Dadar West,
                            Mumbai - 400028
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
