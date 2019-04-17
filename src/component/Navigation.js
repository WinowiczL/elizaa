import React from "react";
import "./Navigation.css";
import logo from "../utils/photos/welcome/logoWelcome.jpg";

export const Navigation = ({ portfolio, welcome, contact }) => {
  return (
    <>
      <div className="row justify-content-center">
        <img src={logo} alt="logo" className="img-fluid mx-auto d-block" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <nav className="nav mt-4 flex-column flex-md-row nav-fill">
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
        </div>
        <div className="navigation-line mb-5" />
      </div>
    </>
  );
};
