import React from 'react';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import "../styling/singlePage.css";


const SinglePage = () => {
    return (
        <div className="single-container"> 
            <Projects className="single-projects" /> 
            <Contact className="single-contact" />
        </div>
    );
}

export default SinglePage
