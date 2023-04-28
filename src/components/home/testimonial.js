import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../../assets/css/testimonial.css";

function Testimonial() {

  return (
    <section className="testimonial-wrapper section-padding fix">
      <div className="container">
        <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
          <div className="block-contents">
            <div
              className="section-title wow fadeInDown"
              data-wow-duration="1.2s"
            >
              <h2>A place of trust for millions of people</h2>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-12">
          <div className="testimonial-carousel-active">
              <div className="single-testimoinal-item">
                <div className="client-info">
                  <div
                    className="client-img bg-cover"
                    style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
                  ></div>
                  <div className="client-name">
                    <h6>Scott Swanson</h6>
                    <span>Account executive</span>
                  </div>
                </div>
                <div className="feedback">
                  “I have gained a strong knowledge about the architecture of
                  Bitcoin. It helps me to easily transact and keep accounts.”
                </div>
                <div className="rating">
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                </div>
              </div>
              <div className="single-testimoinal-item">
                <div className="client-info">
                  <div
                    className="client-img bg-cover"
                    style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
                  ></div>
                  <div className="client-name">
                    <h6>Scott Swanson</h6>
                    <span>Account executive</span>
                  </div>
                </div>
                <div className="feedback">
                  “I have gained a strong knowledge about the architecture of
                  Bitcoin. It helps me to easily transact and keep accounts.”
                </div>
                <div className="rating">
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                </div>
              </div>
              <div className="single-testimoinal-item">
                <div className="client-info">
                  <div
                    className="client-img bg-cover"
                    style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
                  ></div>
                  <div className="client-name">
                    <h6>Scott Swanson</h6>
                    <span>Account executive</span>
                  </div>
                </div>
                <div className="feedback">
                  “I have gained a strong knowledge about the architecture of
                  Bitcoin. It helps me to easily transact and keep accounts.”
                </div>
                <div className="rating">
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                  <AiFillStar className="icon-star" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// class Testimonial extends React.Component {
//     render() {
//         return (
//             <div className="testimonial">
//                 <figure className="snip1533">
//                     <figcaption>
//                         <blockquote>
//                             <p>My experience here was quite astonishing. I received all the required help from the teachers and staff and I am glad to say the Shree Siddhivinayak Classes has helped me a lot during in my academics.</p>
//                         </blockquote>
//                         <h3>Sallagargi Vikhil</h3>
//                         <h4>2016-2018</h4>
//                     </figcaption>
//                 </figure>
//                 <figure className="snip1533">
//                     <figcaption>
//                         <blockquote>
//                             <p>The teachers and the mentors have helped me a lot academically during my time and I can't be more grateful to the teachers and mentors who helped me.</p>
//                         </blockquote>
//                         <h3>Ganesh Vemulawada</h3>
//                         <h4>2016-2018</h4>
//                     </figcaption>
//                 </figure>
//                 <figure className="snip1533">
//                     <figcaption>
//                         <blockquote>
//                             <p>I have learned and developed many new things very effectively thanks to the teaching and assistance of the teachers and mentors and I am confident that to say that Shree Siddhivinayak Classes has helped me a lot during my academics.</p>
//                         </blockquote>
//                         <h3>Prashant Vasala</h3>
//                         <h4>2016-2018</h4>
//                     </figcaption>
//                 </figure>
//             </div>
//         );
//     }
// }

export default Testimonial;
