import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import "../../assets/css/contact.css";
import { IoCall, IoLocationSharp } from "react-icons/io5";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact">
          <div className="contact-body">
            <div className="contact-headings">
              <h1>Get in touch</h1>
              <p>
                Want to get in touch? We'd love to hear from you. Here's how you
                can reach us...
              </p>
            </div>

            <div className="cards">
              <div className="card">
                <div className="card-icon">
                  <IoCall />
                </div>
                <h1 className="card-title">Talk to Us</h1>
                <p className="card-text">
                  Interested to join? You can feel free to call us anytime
                  during our working hours on the following contact numbers
                </p>
                <ul>
                  <li>
                    <a href="tel:9819285180">+91 98192 85180</a>
                  </li>
                  <li>
                    <a href="tel:8082&amp;&amp;2648">+91 8082&amp; &amp;2648</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-icon">
                  <IoLocationSharp />
                </div>
                <h1 className="card-title">Find Us Here</h1>
                <p className="card-text">
                  Shop No 6, Siddhivinayak Classes, Near Agar Bazar Bus Stop,
                  Agar Bazaar, Dadar West, Mumbai - 400028
                </p>
                <p className="card-text">
                  At Ratan, Shop No: 10, S.K. Bole Road,
                  <br /> Agar Bazaar, Near Siddhivinayak Temple, Dadar West,
                  <br />
                  Mumbai - 400028
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
