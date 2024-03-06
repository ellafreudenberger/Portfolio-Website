import React from 'react';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import "../styling/singlePage.css";


const SinglePage = () => {
    return (
        <div className="single-container"> 
            <div className="single-black-background"> </div>
            <div className="single-white-background"> </div>
            <Projects className="single-projects" /> 
            <Contact className="single-contact" />
        </div>
    );
}

export default SinglePage
