import React from "react";
import photo1 from "../../utils/photos/baby/1.jpg";
import photo2 from "../../utils/photos/baby/2.jpg";
import photo3 from "../../utils/photos/baby/3.jpg";
import photo4 from "../../utils/photos/baby/4.jpg";
import photo5 from "../../utils/photos/baby/5.jpg";

export const Baby = () => {
  return (
    <div className="card-columns">
      <div className="card mb-3">
        <img src={photo1} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-3">
        <img src={photo2} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-3">
        <img src={photo3} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-3">
        <img src={photo4} alt="obraz karty" className="card-img-top" />
      </div>

      <div className="card mb-3">
        <img src={photo5} alt="obraz karty" className="card-img-top" />
      </div>
    </div>
  );
};
