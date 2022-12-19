import React, { Component } from "react";
import "../../assets/css/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerContent">
          <div className="footerLogo">
            <h1>This is logo</h1>
            <p>
              Darpan is a youth club empowered by its members with enthusuiasm
              to contribute towards the academic, personal, social & cultural
              development of individuals by inclucating the right education &
              guidance.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
