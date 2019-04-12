import React from "react";
import photo1 from "../1.jpg";
import photo2 from "../2.jpg";
import photo3 from "../3.jpg";
import "./Content.css";

export const Content = () => {
  return (
    <div className="container ">
      <div
        id="slider"
        className="image-size carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photo1} className="image-size rounded" alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src={photo2} className="image-size rounded" alt="slide2" />
          </div>
          <div className="carousel-item">
            <img src={photo3} className="image-size rounded" alt="slide3" />
          </div>
        </div>
        <a
          href="#slider"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Poprzedni</span>
        </a>
        <a
          href="#slider"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Następny</span>
        </a>
      </div>
    </div>
  );
};
