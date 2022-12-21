import React from "react";
import "../../assets/css/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Education from "../Courses/Courses.images/education.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slider className="carouselMain" {...settings}>
        <div>
          <img className="carouselBackgrounImage" src={Education} />
        </div>
        <div>
          <img className="carouselBackgrounImage" src={Education} />
        </div>
        <div>
          <img className="carouselBackgrounImage" src={Education} />
        </div>
        <div>
          <img className="carouselBackgrounImage" src={Education} />
        </div>
        <div>
          <img className="carouselBackgrounImage" src={Education} />
        </div>
        <div>
          <img className="carouselBackgrounImage" src={Education} />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
