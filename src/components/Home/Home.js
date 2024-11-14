import React from "react";
import handFlower from "./images/restaurant.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-description">
        <h1 className="description">Welcome to Clin Food-Kawasan Manado</h1>
      </div>
      <div className="img">
        <img className="img-pic" src={handFlower} alt="Hand holding flower" />
      </div>
    </div>
  );
}

export default Home;
