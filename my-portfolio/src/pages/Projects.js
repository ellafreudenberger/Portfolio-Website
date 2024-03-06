import React from 'react';
import "../index.css";



export const Projects = () => {
    return (
        <div id="projects" className='work-container'>
        <div className='work-background'> 
            <div className='Playdates-title-container'>
          <h1 className='Playdates-title'>Playdates</h1>
          <a href="/project-details" className="Playdates-link">visit website</a>
          </div>
        <h2 className='Playdates-description'>Playdates is a MERN stack application with CRUD operations for dog walking, sitting and boarding on the Upper East Side of New York City. Users can schedule playdates for their dogs using the calendar module, and administrators can manage all bookings and client information internally.</h2>
        </div>
       <div className='work-picture-description'> Background by&nbsp;<a href="https://www.freepik.com/free-vector/hand-drawn-groovy-flower-pattern_81074031.htm#fromView=search&page=3&position=24&uuid=fc64ab08-202a-4a04-b9d6-cda1a3397715">Freepik</a></div>
        </div>
    );
}

export default Projects;