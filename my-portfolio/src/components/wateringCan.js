import React, { useState } from "react";
import "../styling/wateringCan.css";

const WateringCan = ({ onWater }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log('Watering can clicked');
        
        // Call the onWater function passed as props
        onWater();

        // Toggle the clicked state
        setClicked(!clicked);
    };

    return (
        <div className="button-container" onClick={handleClick}>
            <div className={`cylinder-button ${clicked ? 'clicked' : ''}`}></div>
            <div className={`rounded-line-buttonA ${clicked ? 'clicked' : ''}`}></div>
            <div className={`rounded-line-buttonB ${clicked ? 'clicked' : ''}`}></div>
            <h1 className={`button-description ${clicked ? 'clicked' : ''}`}>
                <span className={`water-text ${clicked ? 'clicked' : ''}`}>water</span>
            </h1>
        </div>
    );
}

export default WateringCan;


