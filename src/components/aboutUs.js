import React, { Component } from "react";
// import AboutUsSection from "./aboutUs/aboutsSection/aboutUsSection";
import "./aboutUs/aboutUs.css";
// import AboutUsSection2 from "./aboutsSection/aboutUsSection2";
import education from "./aboutUs/aboutsSection/aboutsSectionImages/EQ.jpg";
import books from "./aboutUs/aboutsSection/aboutsSectionImages/books.png";
import Doctor from "./aboutUs/aboutsSection/aboutsSectionImages/Doct.png";
import Engineer from "./aboutUs/aboutsSection/aboutsSectionImages/Engineer.png";
import iq from "./aboutUs/aboutsSection/aboutsSectionImages/education.jpg";
// import "./aboutsSection/aboutUsSection/
//  import './aboutsSection/aboutUsSection1.css';

class AboutUs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="aboutUs">
        {/* <div className="aboutUsSection1">
        <h1>About Us...</h1>
        <AboutUsSection
          AboutUsSectionCss="AboutUsSection1"
          contenthead="Your Purpose"
          contentbody="CarDekho brings a complete range of new cars in 2022 in India with prices.
               You can search cars by applying filters such as by price, by bodytype, by brand, by
                seating capacity &amp; more. Also, stay updated with"
        />
    </div>
        <div className="aboutUsSection2">
          <AboutUsSection
            AboutUsSectionCss="AboutUsSection2"
            contenthead="Your Purpose"
            contentbody="CarDekho brings a complete range of new cars in 2022 in India with prices.
             You can search cars by applying filters such as by price, by bodytype, by brand, by
             seating capacity &amp; more. Also, stay updated with"
          />
          <img
            className="aboutUsImage-image1"
            src={Doctor}
            alt="BigCo Inc. logo"
          />
           <img
            className="aboutUsImage-image1"
            src={Engineer}
            alt="BigCo Inc. logo"
          />
        </div>

        <div className="aboutUsSection3">
          <img
            className="aboutUsImage-image2"
            src={books}
            alt="BigCo Inc. logo"
          />
          <AboutUsSection
            AboutUsSectionCss="AboutUsSection3"
            contenthead="Your Purpose"
            contentbody="CarDekho brings a complete range of new cars in 2022 in India with prices.
               You can search cars by applying filters such as by price, by bodytype, by brand, by
                seating capacity &amp; more. Also, stay updated with"
          />
        </div>
      */}

        <div className="AboutUsSection1 AboutUsSection">
          <h2>"Your Purpose"</h2>
          <p>
            {" "}
            "CarDekho brings a complete range of new cars in 2022 in India with
            prices. You can search cars by applying filters such as by price, by
            bodytype, by brand, by seating capacity &amp; more. Also, stay
            updated with"
          </p>
        </div>

        <div className="AboutUsSection2 AboutUsSection">
          <div className="AboutUsSection2-content">
            <h2>"Your Purpose"</h2>
            <p>
              {" "}
              "CarDekho brings a complete range of new cars in 2022 in India
              with prices. You can search cars by applying filters such as by
              price, by bodytype, by brand, by seating capacity &amp; more.
              Also, stay updated with"
            </p>
          </div>

          <div>
            <img
              className="aboutUsImage-image1"
              src={Doctor}
              alt="BigCo Inc. logo"
            />
          </div>
          {/* <div>
         <img
            className="aboutUsImage-image1"
            src={Doctor}
            alt="BigCo Inc. logo"
          />
         </div>
         <div>
         <img
            className="aboutUsImage-image1"
            src={Doctor}
            alt="BigCo Inc. logo"
          />
         </div> */}
        </div>

        <div className="AboutUsSection3 AboutUsSection">
          <div>
            <img
              className="aboutUsImage-image2"
              src={books}
              alt="BigCo Inc. logo"
            />
          </div>
          <div>
            <h2>"Your Purpose"</h2>
            <p>
              {" "}
              "CarDekho brings a complete range of new cars in 2022 in India
              with prices. You can search cars by applying filters such as by
              price, by bodytype, by brand, by seating capacity &amp; more.
              Also, stay updated with"
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
