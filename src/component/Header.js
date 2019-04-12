import React from "react";
import headerPhoto from "../IMG_9459.jpg";
export const Header = () => {
  return (
    <div className="container py-3">
      <img
        src={headerPhoto}
        className=""
        alt="headerPhoto"
        className="img-fluid mx-auto"
      />
    </div>
  );
};
