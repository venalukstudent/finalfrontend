import React from "react";
import handFlower from "./images/IMG-20220422-WA0034.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-description">
        <h1 className="description">Let Your Stomach Do The Talking</h1>
      </div>
      <div className="img">
        <img className="img-pic" src={handFlower} alt="Hand holding flower" />
      </div>
    </div>
  );
}

export default Home;
