import React from "react";
// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";

//css
import "../../assets/css/homeindex.css";

//IMAGES

let courseDetails = {
  features: [
    {
      featureTitle: "Experienced Faculty",
      featureDescription:
        "The institute has a team of highly experienced and dedicated faculty members who provide personalized attention to each student and help them improve their academic performance.",
    },
    {
      featureTitle: "Comprehensive Study Material",
      featureDescription:
        "Shree Siddhivinayak Classes provides comprehensive study material that covers the entire SSC syllabus, including solved examples and practice questions.",
    },
    {
      featureTitle: "Regular Assessments",
      featureDescription:
        "The institute conducts regular assessments, including mock tests and practice papers, to help students evaluate their progress and identify areas for improvement.",
    },
    {
      featureTitle: "Doubt-solving Sessions",
      featureDescription:
        "Shree Siddhivinayak Classes conducts regular doubt-solving sessions, where students can clarify their doubts and get individual attention from the faculty.",
    },
  ],
}

function About(){
  return (
    <div className="d-flex row mx-auto w-75 text-center mb-3">
        <h2 className="my-3">{courseDetails.title}</h2>
        {courseDetails.features.map((feature) => {
          return (
            <div className="col-sm-3">
              <div className="card w-100 h-100">
                <div className="card-body">
                  <h5 className="card-title">{feature.featureTitle}</h5>
                  <p className="card-text">{feature.featureDescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

class Homeindex extends React.Component {
  render() {
    return (
      <div>
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
        <About />
      </div>
    );
  }
}

export default Homeindex;
