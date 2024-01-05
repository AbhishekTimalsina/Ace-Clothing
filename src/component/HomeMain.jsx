import React from "react";
import HomePhotoShoot from "./HomePhotoShoot";
import HomeInfo from "./HomeInfo";
import "./HomeMain.css";

function HomeMain() {
  return (
    <main className="home-main container">
      <HomeInfo />
      <HomePhotoShoot />
    </main>
  );
}

export default HomeMain;
