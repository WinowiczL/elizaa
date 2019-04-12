import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="navigation-line my-5" />
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-2 footer-first-col">
              <ul class="list-unstyled">
                <li>
                  <i class="fa fa-phone" aria-hidden="true" />
                  888-223-111
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true" />
                  888-223-111
                </li>
                <li>
                  <i class="fa fa-clock-o" aria-hidden="true" />
                  Pn.-Pt. 8:00-16:00
                </li>
                <li>
                  <i class="fa fa-clock-o" aria-hidden="true" />
                  Pn.-Pt. 8:00-16:00
                </li>
                <li>
                  <i class="fa fa-envelope" aria-hidden="true" />
                  firma@kurs.yt
                </li>
                <li>
                  <i class="fa fa-envelope" aria-hidden="true" />
                  firma@kurs.yt
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-second-col">
              <ul class="list-unstyled">
                <li>
                  <span class="text-warning">></span>O mnie
                </li>
                <li>
                  <span class="text-warning">></span>Portfolio realizacje
                </li>
                <li>
                  <span class="text-warning">></span>Oferta
                </li>
                <li>
                  <span class="text-warning">></span>Studio
                </li>
                <li>
                  <span class="text-warning">></span>Kontakt
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <img src="mapa" alt="Mapa" class="img-fluid" />
            </div>
          </div>
        </div>
      </footer>

      <section class="text-center text-white bg-info copyright">
        <div class="container">
          &copy; Copyright 2019 Eliza Makiej Fotografia
          <span class="mt-2 d-block">Designed by Łukasz Winowicz</span>
        </div>
      </section>
    </>
  );
};
