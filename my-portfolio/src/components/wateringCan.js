import React from 'react';
import "../styling/wateringCan.css";

const WateringCan = () => {
    return (
        <div className="button-container">
            <div className="cylinder-button"></div>
            <div className="rounded-line-buttonA"></div>
            <div className="rounded-line-buttonB"></div>
            <h1 className="button-description">
                <span className="water-text">water</span>
            </h1>
        </div>
    );
}

export default WateringCan;
