import React from "react";
import eliza from "../utils/photos/welcome/eliza.jpg";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-7">
            <h2 className="text-center ">O mnie</h2>
            <article class="about-me-paragraph p-3">
              <p className="text-center">
                Super, ekstra, zwariowana, ekstra, super, zdolna, Super, ekstra,
                zwariowana, ekstra, super, zdolna, Super, ekstra, zwariowana,
                ekstra, super, zdolna, Super, ekstra, zwariowana, ekstra, super,
                zdolna, Super, ekstra, zwariowana, ekstra, super, zdolna
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <img src={eliza} className="img-fluid rounded" alt="eliza" />
        </div>
      </div>
      <div className="empty" />
    </div>
  );
};
