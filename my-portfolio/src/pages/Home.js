import React from 'react';
import "../index.css";
import WateringCan from '../components/wateringCan';

export const Home = ({ handleWatering, watered, singlePageMode }) => {
  return (
    <div className="home-page"> 
      <p className="about-me invert-on-black flash">
        Hey there! My name is Ella. I'm a full stack software engineer based in New York City. <br /><br /><br />
        I <span className="highlight">transform</span> brands, <span className="highlight">cultivate</span> new connections, and <span className="highlight">grow</span> vibrant communities online.
      </p>
      <div className="watering-can invert-on-black">
        <WateringCan onWater={handleWatering} /> {/* Pass handleWatering to WateringCan */}
        <p className="watering-instructions">click me</p>
      </div>
      <div className={`black-background ${watered ? 'hidden' : ''}`}></div>
      <div className="white-background"></div>
    </div>
  );
};
  
export default Home;

