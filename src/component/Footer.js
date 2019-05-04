import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="navigation-line my-5" />
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2 footer-first-col">
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  888-223-111
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  888-223-111
                </li>
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  Pn.-Pt. 8:00-16:00
                </li>
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  Pn.-Pt. 8:00-16:00
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  elizamakiej
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  elizamakiej
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-second-col">
              <ul className="list-unstyled">
                <li>
                  <span className="text-warning">></span>O mnie
                </li>
                <li>
                  <span className="text-warning">></span>Portfolio realizacje
                </li>
                <li>
                  <span className="text-warning">></span>Oferta
                </li>
                <li>
                  <span className="text-warning">></span>Studio
                </li>
                <li>
                  <span className="text-warning">></span>Kontakt
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="mapa" alt="Mapa" className="img-fluid" />
            </div>
          </div>
        </div>
      </footer>

      <section className="footer text-center text-white copyright">
        <div className="container">
          &copy; Copyright 2019 Eliza Makiej Fotografia
          <span className="mt-2 d-block">Designed by Łukasz Winowicz</span>
        </div>
      </section>
    </>
  );
};
