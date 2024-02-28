import React from 'react';
import "../styling/nav.css";

function PortfolioNav () {
    return (
       <nav>
         <ul>
             <li><a href="/">Home.</a></li>
             <li><a href="/projects">Work.</a></li>
             <li><a href="/contact">Contact.</a></li>
          </ul>
       </nav>
    );
}

export default PortfolioNav;
