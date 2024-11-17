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
              Welcome to <br />
              Clin Food Palace
            </h2>
            <p>
              MORE THAN 18 RESTAURANT IN ONE PLACE<br />
              Open Daily : 11:00 - 22:00 <br />
              Clin Food Palace Restaurant<br />
              is a restaurant located in North Sulawesi Province, <br />  
              precisely in Manado, Megamas Area.
            </p>
          </div>
        </section>
        <section className="flex flex-reverse">
          <div className="image2"></div>
          <div className="about-info">
            <h2>Our restaurant service</h2>
            <p>
              This restaurant offers a variety of appetizing food and drinks
              such as: Special Rice Dishes, Refreshing Drinks, Legendary Snacks
              with extraordinary flavors and wallet-friendly prices that you can
              enjoy with your loved ones.<br /><br />
              You can try all of our selected 
              special menus that are guaranteed to delight your taste buds and
              provide an unforgettable culinary experience. Come visit us soon
              and experience the delicious sensations! <br /><br />
              Our restaurant is also known for its fast and efficient service. 
              We value your time, ensuring that your orders are served promptly 
              so you can enjoy your meal without waiting long. Whether you're in 
              a rush or here to relax, we guarantee a quick and seamless dining experience. <br /><br />
              In addition, we offer a comfortable and welcoming atmosphere, 
              perfect for gathering with friends, family, or even for special events. 
              With a wide variety of menu options and top-notch service, every visit 
              promises an unforgettable dining experience. Don’t hesitate to come 
              and enjoy the delicious dishes we serve with love.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
