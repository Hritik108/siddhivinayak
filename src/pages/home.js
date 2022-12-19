import React from "react";
import Carousel from "../components/home/carousel";
import Testimonial from "../components/home/testimonial";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Testimonial />
      </div>
    );
  }
}

export default HomePage;
