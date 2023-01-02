import React from "react";
// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";

//css
import "../../assets/css/homeindex.css";

//IMAGES

class Homeindex extends React.Component {
  render() {
    return (
      <div className="index-main">
        <div className="index-description">
          <div className="desc-main">
            <h3>Shree Siddhivinayak Classes</h3>
            <h1>
              {/* KNOW <strong>YOURSELF</strong>, <br />
              KNOW YOUR <strong>POTENTIAL</strong> */}
              A PERFECT PLACE FOR A BRIGHT FUTURE
            </h1>
          </div>
          <div className="desc-sub">
            <p>
              Embark on a journey with us and learn more about your strengths
              and weaknesses. We will help you in all the possible ways to make
              you better!{" "}
            </p>
          </div>
          <div className="index-buttons">
            <a href="/about">
              <Button
                variant="contained"
                style={{ backgroundColor: "black", position: "static" }}
              >
                Know More
              </Button>
            </a>
            <a href="/contact">
              <Button
                variant="contained"
                style={{ backgroundColor: "black", position: "static" }}
              >
                Ask Us Anything
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homeindex;
