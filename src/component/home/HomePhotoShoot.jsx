import React from "react";
import photo1 from "../../assets/images/home-photo-1.webp";
import photo2 from "../..//assets/images/home-photo-2.webp";
import photo3 from "../../assets/images/home-photo-3.webp";

import "./HomePhotoShoot.css";

function HomePhotoShoot() {
  return (
    <div className="photoshoot-container">
      <span className="model-photo_wrapper boy">
        <img src={photo1} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper boy">
        <img src={photo2} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper female">
        <img src={photo3} className="model-photo" alt="model photograph" />
      </span>
    </div>
  );
}

export default HomePhotoShoot;
