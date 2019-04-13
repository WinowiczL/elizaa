import React from "react";
import "./Navigation.css";
import logo from "../utils/photos/welcome/logoWelcome.jpg";

export const Navigation = ({ portfolio, welcome, contact }) => {
  return (
    <>
      <div className="row my-2 justify-content-center">
        <img src={logo} alt="logo" className="img-fluid mx-auto d-block" />
      </div>

      <div className="container">
        <nav className="nav my-4 flex-column flex-md-row nav-fill">
          <div
            className="navigation 
            nav-link nav-item active"
            onClick={welcome}
          >
            Strona główna
          </div>
          <div
            className="navigation 
            nav-link nav-item"
            onClick={portfolio}
          >
            Portfolio
          </div>
          <div
            className="navigation 
            nav-link nav-item"
          >
            Opinie
          </div>
          <div
            className="navigation 
            nav-link nav-item"
          >
            Cennik
          </div>
          <div
            className="navigation 
            nav-link nav-item active"
          >
            Studio
          </div>
          <div
            className="navigation 
            nav-link nav-item"
            onClick={contact}
          >
            Kontakt
          </div>
        </nav>
      </div>
      <div className="navigation-line mb-5" />
    </>
  );
};
