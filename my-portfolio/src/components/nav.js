import React, { useState, useEffect } from 'react';
import "../styling/nav.css";

function PortfolioNav({ singlePageMode }) {
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

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClick = (id, e) => {
        e.preventDefault(); // Prevent the default behavior of anchor tags
        scrollToSection(id);
    };

    return (
        <nav className={`invert-property ${isScrolled && 'nav-scrolled'}`}>
            <ul className={`${isScrolled && 'scrolled'}`}>
                {!singlePageMode ? (
                    <>
                        <li><a href="/">home</a></li>
                        <li><a href="/projects">work</a></li>
                        <li><a href="/contact">contact</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="#home" onClick={(e) => handleClick('home', e)}>home</a></li>
                        <li><a href="#projects" onClick={(e) => handleClick('projects', e)}>work</a></li>
                        <li><a href="#contact" onClick={(e) => handleClick('contact', e)}>contact</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default PortfolioNav;
