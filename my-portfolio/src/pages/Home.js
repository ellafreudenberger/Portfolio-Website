import React from 'react';
import "../index.css";
import ella from '../images/ella.JPG';


export const Home = () => {
    return (
        <div className="home-page"> 
        <img src={ella} alt="Ella" className="profile-pic" />
        </div>
    );
}

export default Home;