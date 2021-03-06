import React from "react";
import ciazowa from "../utils/photos/welcome/ciazowa.jpg";
import dziecieca from "../utils/photos/welcome/dziecieca.jpg";
import noworodkowa from "../utils/photos/welcome/noworodkowa.jpg";
import portretowa from "../utils/photos/welcome/portretowa.jpg";
import rodzinna from "../utils/photos/welcome/rodzinna.jpg";
import slubna from "../utils/photos/welcome/slubna.jpg";
import "./ThirdContent.css";

export const ThirdContent = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="card-columns">
          <div className="card mb-5">
            <img src={ciazowa} alt="obraz karty" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Sesje ciązowe</h4>
              <h5 className="card-subtitle">Chwila warta uwiecznienia</h5>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                rerum, dolore impedit dicta ducimus.
              </p>
              <a href="#" className="btn more-button card-link">
                Więcej
              </a>
            </div>
          </div>

          <div className="card mb-5">
            <img src={dziecieca} alt="obraz karty" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Sesja dziecięca</h4>
              <h5 className="card-subtitle">Kiedyś dorosną</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                rerum, dolore impedit dicta ducimus.
              </p>
              <a href="#" className="btn more-button card-link">
                Więcej
              </a>
            </div>
          </div>

          <div className="card mb-5">
            <img src={noworodkowa} alt="obraz karty" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Sesja noworodkowa</h4>
              <h5 className="card-subtitle">Piękne wspomnienia</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                rerum, dolore impedit dicta ducimus.
              </p>
              <a href="#" className="btn more-button card-link">
                Więcej
              </a>
            </div>
          </div>

          <div className="card mb-5">
            <img src={portretowa} alt="obraz karty" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Sesja portretowa</h4>
              <h5 className="card-subtitle">Bądź sobą</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                rerum, dolore impedit dicta ducimus.
              </p>
              <a href="#" className="more-button btn card-link">
                Więcej
              </a>
            </div>
          </div>

          <div className="card mb-5">
            <img src={rodzinna} alt="obraz karty" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Sesja rodzinna</h4>
              <h5 className="card-subtitle">To co nas łączy</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                rerum, dolore impedit dicta ducimus.
              </p>
              <a href="#" className="btn more-button card-link">
                Więcej
              </a>
            </div>
          </div>

          <div className="card mb-5">
            <img src={slubna} alt="obraz karty" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Fotoreportaz ślubny</h4>
              <h5 className="card-subtitle">Ten dzień</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                rerum, dolore impedit dicta ducimus.
              </p>
              <a href="#" className="btn more-button card-link">
                Więcej
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="empty" />
      {/* <div className="navigation-line" /> */}
    </>
  );
};
