import React from 'react';
import "../index.css";
import WateringCan from '../components/wateringCan';

export const Home = () => {
    return (
        <div className="home-page"> 
            <p className="about-me"> Hi! My name is Ella. <br />
                I'm a full stack software designer based in New York City. <br /><br />
              I &nbsp;NURTURE&nbsp; brands,&nbsp;CULTIVATE&nbsp; new connections, and &nbsp;GROW&nbsp; vibrant communities online.
            </p>
            <WateringCan />
        </div>
    );
}

export default Home;
