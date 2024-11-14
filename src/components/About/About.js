import React from "react";
import "../About/About.css";

function About() {
  return (
    <>
      <header className="about-header">
        <div className="about">
          <h1>About</h1>
        </div>
      </header>

      <main>
        <section className="flex">
          <div className="image1"></div>
          <div className="about-info">
            <h2>
              Welcome to Clin <br />
              Food Palace
            </h2>
            <p>
              MORE THAN 18 RESTAURANT IN ONE PLACE Open Daily : 11:00 - 22:00.
              Clin Food Palace Restaurant, Megamas Area is a restaurant located
              in North Sulawesi Province, precisely in the Manado area.
            </p>
          </div>
        </section>
        <section className="flex flex-reverse">
          <div className="image2"></div>
          <div className="about-info">
            <h2>Our restaurant service</h2>
            <p>
              "This restaurant offers a variety of appetizing food and drinks
              such as: Special Rice Dishes, Refreshing Drinks, Legendary Snacks
              with extraordinary flavors and wallet-friendly prices that you can
              enjoy with your loved ones. You can try all of our selected
              special menus that are guaranteed to delight your taste buds and
              provide an unforgettable culinary experience. Come visit us soon
              and experience the delicious sensations!"
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
