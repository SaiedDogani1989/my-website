import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Saeid from "../Image/Saeid.png"
import Contact from './Contact';
import SlideShow from './SlideShow';
import "./home.css"




const Content = () => {
    return (
        <>
            <section className="mt-4 section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="fadeIn">
                                <p>
                                    I am passionate about writing semantic, compatible code that is re-useable,
                                    maintainable and easy to understand. The main areas of my expertise
                                    are HTML5, CSS3, JavaScript and React.js.
                                    I have knowledge of Node.js, API, Express.js, SQL and NoSQL.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <img className="img-fluid saeidImage" src={Saeid} alt="" />
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-dark">Contact Me</a>
                </div>
            </section>
            <SlideShow />
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

export default Content;