import React from "react";
import { Carousel } from "react-bootstrap";
import Classes from "../../assets/images/classes.jpg"
import "bootstrap/dist/css/bootstrap.min.css";  

function CarouselPage() {
  return (
        <div>
          <Carousel>
            <Carousel.Item>
              <figure>
                <img
                  className="vh-100 vw-100"
                  src={Classes}
                  alt="First slide"
                />
              </figure>
              <Carousel.Caption>
                <h3>Welcome to Evita Espressobar</h3>
                <p>Get the best coffee and cakes in town!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="vh-100 vw-100"
                src={Classes}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Try our new cake flavors</h3>
                <p>From classic chocolate to exotic mango</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="vh-100 vw-100"
                src={Classes}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Order catering for your event</h3>
                <p>
                  Get delicious cakes and pastries delivered to your doorstep
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

  );
}

export default CarouselPage;
