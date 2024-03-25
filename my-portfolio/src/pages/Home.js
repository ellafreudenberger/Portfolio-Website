import React from 'react';
import "../index.css";
import WateringCan from '../components/wateringCan';
import ellaImage1 from '../images/ella1.jpg'; 
import ellaImage2 from '../images/ella2.jpg'; 

export const Home = ({ handleWatering, watered, singlePageMode }) => {
  return (
    <div className="home-page"> 
      <p className="about-me invert-on-black flash">
        Hey there! My name is Ella. I'm a full stack software engineer and product developer based in New York City. <br /><br /><br />
        I <span className="highlight">transform</span> brands, <span className="highlight">cultivate</span> new connections, and <span className="highlight">grow</span> vibrant communities online.
      </p>
      <img src={ellaImage2} alt="Ella" className='ella-picture2' />
      <img src={ellaImage1} alt="Ella" className='ella-picture1' />
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

