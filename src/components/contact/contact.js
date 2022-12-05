import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import "../../assets/css/contact.css";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="contact">
          <div className="contact-body">
            <h1>Get in touch</h1>
            <p>
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us...
            </p>
            <div className="cards">
              <div className="card">
                <div className="card-icon">
                  <FaPhoneAlt />
                </div>
                <h2 className="card-title">Talk to Us</h2>
                <p className="card-text">
                  Interested to join? You can feel free to call us anytime
                  during our working hours on the following contact numbers
                </p>
                <ul>
                  <li>
                    <a href="tel:9819285180">+91 98192 85180</a>
                  </li>
                  <li>
                    <a href="tel:8082&&2648">+91 8082& &2648</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-icon">
                  <IoLocationSharp />
                </div>
                <h2 className="card-title">Find Us Here</h2>
                <p className="card-text">
                  Shop No 6, Siddhivinayak Classes, Agar Bazaar, Dadar West,
                  Mumbai - 400028, Near Agar Bazar Bus Stop
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
