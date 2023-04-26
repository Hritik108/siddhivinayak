import React, { Component } from "react";
import "../../assets/css/contact.css";
import contactBackgroundImg from "./contactbgimg.jpg";

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <div id="contactHeader">
                    <div className="w-75 mx-auto py-5">
                        <h1>Get in Touch</h1>
                        <p>
                            Want to get in touch? We'd love to hear from you.
                            <br /> Here's how you can reach us...
                        </p>
                    </div>
                </div>
                <div class="row w-75 mx-auto">
                    <div class="col-md-6 col-sm-12 col-xs-12 mb-3">
                        <div class="card h-100 text-center">
                            <div class="card-body">
                                <h2 class="card-title">Talk to Us</h2>
                                <p class="card-text px-5">
                                    Interested to join? You can feel free to
                                    call us anytime during our working hours on
                                    the following contact numbers
                                </p>
                                <ul>
                                    <li>
                                        <a href="tel:9819285180">
                                            +91 98192 85180
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:8082772648">
                                            +91 80827 72648
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 mb-3">
                        <div class="card h-100 text-center">
                            <div class="card-body">
                                <h2 class="card-title">Find Us Here</h2>
                                <p className="card-text px-5">
                                    Shop No 6, Siddhivinayak Classes, Near Agar
                                    Bazar Bus Stop, Agar Bazaar, Dadar West,
                                    Mumbai - 400028
                                </p>
                                <br />
                                <p className="card-text px-5">
                                    At Ratan, Shop No: 10, S.K. Bole Road, Agar
                                    Bazaar, Near Siddhivinayak Temple, Dadar
                                    West, Mumbai - 400028
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
