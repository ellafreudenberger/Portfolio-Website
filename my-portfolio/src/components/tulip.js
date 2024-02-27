import React from 'react';
import '../styling/tulip.css';

const Tulip = () => {
    return (
        <div className="tulip-container">
            <div className="stem"></div>
            <div className="leaf"></div>
            <div className="flower">
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
                <div className="petal"></div>
            </div>
        </div>
    );
}

export default Tulip;

