import React from "react";
import social1 from "../utils/icons/social/facebook.png";
import social2 from "../utils/icons/social/instagram.png";
import social3 from "../utils/icons/social/youtube.png";
import logo from "../utils/photos/welcome/logoWelcome.jpg";
import "./Navigation.css";

export const Navigation = ({ portfolio, welcome, contact, isActive }) => {
  return (
    <>
      <div className="row justify-content-center my-4">
        <div className="col-12 logo-size">
          <img
            src={logo}
            alt="logo"
            className="box img-fluid mx-auto d-block"
          />
        </div>
      </div>
      <div className="socials align-self-center">
        <img src={social3} alt="obraz karty" className="social" />
        <img src={social2} alt="obraz karty" className="social" />
        <img src={social1} alt="obraz karty" className="social" />
      </div>
      <div className="navi row my-4">
        <nav className="col-12 nav nav-fill">
          <div className="col-2 align-self-center navigation-line" />
          <div className="col-8">
            <div className="row">
              <div
                className={
                  isActive === "welcome"
                    ? "navigation-choosen nav-link nav-item"
                    : "navigation  nav-link nav-item"
                }
                onClick={welcome}
              >
                STRONA GŁÓWNA
              </div>
              <div
                className={
                  isActive === "portfolio"
                    ? "navigation-choosen nav-link nav-item"
                    : "navigation  nav-link nav-item"
                }
                onClick={portfolio}
              >
                PORTFOLIO
              </div>
              <div
                className={
                  isActive === "price"
                    ? "navigation-choosen nav-link nav-item"
                    : "navigation  nav-link nav-item"
                }
              >
                CENNIK
              </div>
              <div
                className={
                  isActive === "studio"
                    ? "navigation-choosen nav-link nav-item"
                    : "navigation  nav-link nav-item"
                }
              >
                STUDIO
              </div>
              <div
                className={
                  isActive === "session"
                    ? "navigation-choosen nav-link nav-item"
                    : "navigation  nav-link nav-item"
                }
              >
                PRZED SESJĄ
              </div>
              <div
                className={
                  isActive === "contact"
                    ? "navigation-choosen nav-link nav-item"
                    : "navigation  nav-link nav-item"
                }
                onClick={contact}
              >
                KONTAKT
              </div>
            </div>
          </div>
          <div className="col-2 align-self-center navigation-line" />
        </nav>
      </div>
    </>
  );
};
