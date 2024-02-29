import React from 'react';
import "../index.css";
import WateringCan from '../components/wateringCan';

export const Home = () => {
    return (
        <div className="home-page"> 
            <div>
            <p className="about-me"> Hi! My name is Ella. <br />
                I'm a full stack software designer based in New York City. <br /><br />
              I nurture brands, cultivate new connections, and grow vibrant communities online.
            </p>
            </div>
            <div className="watering-can">
            <WateringCan />
            </div>
        </div>
    );
}

export default Home;
