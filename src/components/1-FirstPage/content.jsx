import React from 'react';
import Contact from '../Contact/Contact';
import AboutMe from '../2-About me/AboutMe';
import Portfolio from '../4-Portfolio/Portfolio';
import "./home.css"




const HomeContent = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="align-items-center">
                        <AboutMe />
                    </div>
                </div>
            </section>
            <Portfolio />
            <div className="wave bg-dark">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                    ></path>
                </svg>
            </div>
            <Contact />
        </>

    );
}

export default HomeContent;