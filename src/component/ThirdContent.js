import React from "react";
import ciazowa from "../ciazowa.jpg";
import dziecieca from "../dziecieca.jpg";
import noworodkowa from "../noworodkowa.jpg";
import portretowa from "../portretowa.jpg";
import rodzinna from "../rodzinna.jpg";
import slubna from "../slubna.jpg";

export const ThirdContent = () => {
  return (
    <div className="container pt-5">
      <div className="card-columns">
        <div className="card mb-5">
          <img src={ciazowa} alt="obraz karty" className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">Sesje ciązowe</h4>
            <h5 className="card-subtitle">Chwila warta uwiecznienia</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              rerum, dolore impedit dicta ducimus.
            </p>
            <a href="#" className="btn btn-primary card-link">
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
            <a href="#" className="btn btn-primary card-link">
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
            <a href="#" className="btn btn-primary card-link">
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
            <a href="#" className="btn btn-primary card-link">
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
            <a href="#" className="btn btn-primary card-link">
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
            <a href="#" className="btn btn-primary card-link">
              Więcej
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
