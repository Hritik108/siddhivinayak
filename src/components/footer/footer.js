import React, { Component } from "react";
import "../../assets/css/footer.css";
import {
  FaRegEnvelope,
  FaHome,
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerContent">
          <div className="fixedWidth footerLogo">
            <h1>This is logo</h1>
            <p>
              Siddhivinayak Classes guides and teaches their students with
              different carrier opportunities and helps them excel in their
              carriers
            </p>
            <div className="social">
              <ul></ul>
              <li>
                <a>
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://wa.me/9819285180">
                  <FaWhatsapp />
                </a>
              </li>
            </div>
          </div>
          <hr />
          <div className="fixedWidth usefulLinks">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>About us</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="fixedWidth contactInfo">
            <h2>Contact</h2>
            <div className="contactDetails">
              <div className="icon">
                <FaHome />
              </div>
              <p>
                Shop No 6, Siddhivinayak Classes, Near Agar Bazar Bus Stop, Agar
                Bazaar, Dadar West, Mumbai - 400028
              </p>
            </div>
            <div className="contactDetails">
              <FaRegEnvelope className="icon" />
              <p>abcxyz@gmail.com</p>
            </div>
            <div className="contactDetails">
              <FaPhoneAlt className="icon" />
              <p>+91 80827 72648</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
