import React from "react";
import eliza from "../utils/photos/welcome/eliza.jpg";

export const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={eliza} className="img-fluid rounded" alt="eliza" />
        </div>
        <div className="col-8 align-content-center">
          <h1 className="display-6">O mnie</h1>
          <article class="p-3 border rounded border-info">
            <p>
              Super, ekstra, zwariowana, ekstra, super, zdolna, Super, ekstra,
              zwariowana, ekstra, super, zdolna, Super, ekstra, zwariowana,
              ekstra, super, zdolna, Super, ekstra, zwariowana, ekstra, super,
              zdolna, Super, ekstra, zwariowana, ekstra, super, zdolna
            </p>
          </article>
        </div>
      </div>
      <div className="navigation-line mt-5" />
    </div>
  );
};
