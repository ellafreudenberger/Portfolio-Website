import React, { useState, useEffect } from 'react';
import "../styling/nav.css";

function PortfolioNav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && window.innerWidth <= 900) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

    return (
        <nav className={`invert-property ${isScrolled && 'nav-scrolled'}`}>
            <ul className={`${isScrolled && 'scrolled'}`}>
                <li><a href="/">home</a></li>
                <li><a href="/projects">work</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        </nav>
    );
}

export default PortfolioNav;
