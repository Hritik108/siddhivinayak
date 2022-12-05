import { Component } from "react";
import AboutUsSection from "./aboutsSection/aboutUsSection";
import "./aboutUs.css";
// import AboutUsSection2 from "./aboutsSection/aboutUsSection2";
import education from "./aboutsSection/aboutsSectionImages/EQ.jpg";
import iq from "./aboutsSection/aboutsSectionImages/education.jpg";
// import "./aboutsSection/aboutUsSection/
//  import './aboutsSection/aboutUsSection1.css';

class AboutUs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="aboutUs">
        <h1>About Us...</h1>
        <AboutUsSection
          AboutUsSectionCss="AboutUsSection1"
          contenthead="Your Purpose"
          contentbody="CarDekho brings a complete range of new cars in 2022 in India with prices.
               You can search cars by applying filters such as by price, by bodytype, by brand, by
                seating capacity & more. Also, stay updated with"
        />
        <div className="aboutUsSection2">
          <AboutUsSection
            AboutUsSectionCss="AboutUsSection2"
            contenthead="Your Purpose"
            contentbody="CarDekho brings a complete range of new cars in 2022 in India with prices.
             You can search cars by applying filters such as by price, by bodytype, by brand, by
             seating capacity & more. Also, stay updated with"
          />
          <img
            className="aboutUsImage-image"
            src={education}
            alt="BigCo Inc. logo"
          />
        </div>

        <div className="aboutUsSection3">
          <img
            className="aboutUsImage-image"
            src={education}
            alt="BigCo Inc. logo"
          />
          <AboutUsSection
            AboutUsSectionCss="AboutUsSection3"
            contenthead="Your Purpose"
            contentbody="CarDekho brings a complete range of new cars in 2022 in India with prices.
               You can search cars by applying filters such as by price, by bodytype, by brand, by
                seating capacity & more. Also, stay updated with"
          />
        </div>
      </div>
    );
  }
}

export default AboutUs;
