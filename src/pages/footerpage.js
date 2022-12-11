import React from "react";
import "../assets/css/footer.css";
// import Logo from "../assets/images/footer_logo.png";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <div className="footer-container">
          <div className="footer-details">
            <div className="footer-items">
              {/* <img id="logo" src={Logo} alt="logo" /> */}
              <p>
                Darpan is a youth club empowered by its members with enthusuiasm
                to contribute towards the academic, personal, social &amp;
                cultural development of individuals by inclucating the right
                education &amp; guidance.
              </p>
            </div>
            <div className="footer-items">
              <h3 id="links-header">Useful Links</h3>
              <ul className="footer-links">
                <li>
                  {" "}
                  <a href="">Home</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/About">About Us</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/Career">Career Counselling</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/Contact"> Contact Us</a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer-items">
              <h3 id="links-header">Counselling</h3>
              <ul className="footer-links">
                <li>
                  {" "}
                  <a href="/Career">Career Guidance</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/Career">Mentoring</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="Career">Emotional Quotient</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="Career">Intelligence Quotient</a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer-items">
              <h3 id="links-header">CONTACT</h3>
              <ul className="footer-links">
                <li>
                  <HiOutlineMail
                    className="contact-icon"
                    style={{ fontSize: "20px" }}
                  />{" "}
                  darpanworli@gmail.com{" "}
                </li>
                <li>
                  {" "}
                  <FaPhone className="contact-icon" /> +91 8454077945{" "}
                </li>
                <li>
                  {" "}
                  <HiOutlineLocationMarker
                    className="contact-icon"
                    style={{ fontSize: "24px" }}
                  />
                  <Button
                    href="https://maps.app.goo.gl/5Sgi4MQtqx9oykum8"
                    target="_blank"
                    id="location"
                    variant="contained"
                    style={{ backgroundColor: "#06283D" }}
                  >
                    Location
                  </Button>
                </li>
              </ul>
              <p>You can follow us on our social media platform</p>
              <div className="social-media">
                <a
                  href="https://instagram.com/darpan_worli?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  {" "}
                  <FaInstagram className="icons" style={{ fontSize: "25px" }} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFkt3MlyuRUpGXfIe3zlGGw"
                  target="_blank"
                >
                  <FaYoutube className="icons" style={{ fontSize: "25px" }} />
                </a>

                <a href="">
                  <FaFacebookSquare
                    className="icons"
                    id="fb"
                    style={{ fontSize: "25px" }}
                  />
                </a>
                <a
                  href="https://chat.whatsapp.com/EXCfFSHesMZ2KDfdPm12pH"
                  target="_blank"
                >
                  {/* <Button id="whatsappbtn" variant="outlined"> */}
                  <FaWhatsapp
                    id="wp-icon"
                    className="icons"
                    style={{ fontSize: "25px" }}
                  />
                  {/* &amp;nbsp; Whatsapp</Button> */}
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            Copyright &amp;copy; Darpan Worli 2022. All rights reserved.
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
