import React from 'react';
import "../styling/nav.css";

function PortfolioNav () {
    return (
       <nav>
         <ul>
             <li><a href="/">home</a></li>
             <li><a href="/projects">work</a></li>
             <li><a href="/contact">contact</a></li>
          </ul>
       </nav>
    );
}

export default PortfolioNav;
