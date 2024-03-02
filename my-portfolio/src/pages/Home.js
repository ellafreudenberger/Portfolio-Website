import React from 'react';
import "../index.css";
import WateringCan from '../components/wateringCan';

export const Home = () => {
    return (
        <div className="home-page"> 
            <div>
            <p class="about-me">
            Hey there! My name is <span class="highlight">Ella</span>.
            I'm a full stack software designer based in New York City. <br /><br />
            I <span class="highlight">nurture</span> brands, <span class="highlight">cultivate</span> new connections, and <span class="highlight">grow</span> vibrant communities online.
            </p>
            </div>
            <div className="watering-can">
            <WateringCan />
            </div>
        </div>
    );
}

export default Home;
