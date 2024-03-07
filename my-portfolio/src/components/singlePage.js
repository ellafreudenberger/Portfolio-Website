import React from 'react';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import "../styling/singlePage.css";


const SinglePage = () => {
    return (
        <div className="single-container"> 
            <div className="single-background"> </div>
            <div className="single-white-background"> </div>
            <div className="projects-scroll"> </div>
            <div className="single-projects"> 
                <Projects /> 
            </div>
            <div id="contact" className="single-contact"> {/* Add id="contact" */}
                <Contact />
            </div>
        </div>
    );
}

export default SinglePage
