import React from "react";
import Carousel from "../components/home/carousel";
import Testimonial from "../components/home/testimonial";
import Homeindex from "../components/home/homeindex";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Homeindex />
        <Carousel />
        <Testimonial />
      </div>
    );
  }
}

export default HomePage;
