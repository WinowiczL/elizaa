import React from "react";
import photo1 from "../../utils/photos/portrait/1.jpg";
import photo2 from "../../utils/photos/portrait/2.jpg";
import photo3 from "../../utils/photos/portrait/3.jpg";
import photo4 from "../../utils/photos/portrait/4.jpg";
import photo5 from "../../utils/photos/portrait/5.jpg";

export const Portrait = () => {
  return (
    <div className="card-columns">
      <div className="card mb-5">
        <img src={photo1} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-5">
        <img src={photo2} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-5">
        <img src={photo3} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-5">
        <img src={photo4} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-5">
        <img src={photo5} alt="obraz karty" className="card-img-top" />
      </div>
    </div>
  );
};
