import React from "react";
import Slider from "react-slick";
import photo1 from "../utils/photos/welcome/1.jpg";
import photo2 from "../utils/photos/welcome/2.jpg";
import photo3 from "../utils/photos/welcome/3.jpg";

export class SimpleSlider extends React.Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={photo1} className="img-fluid" alt="slide1" />
        </div>
        <div>
          <img src={photo2} className="img-fluid" alt="slide2" />
        </div>
        <div>
          <img src={photo3} className="img-fluid" alt="slide3" />
        </div>
        <div>
          <img src={photo1} className="img-fluid" alt="slide4" />
        </div>
        <div>
          <img src={photo2} className="img-fluid" alt="slide5" />
        </div>
        <div>
          <img src={photo3} className="img-fluid" alt="slide6" />
        </div>
      </Slider>
    );
  }
}
