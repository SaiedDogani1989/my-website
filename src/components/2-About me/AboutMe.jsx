import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgramerImage from "./image/programmer-removebg-preview.png"
import "./aboutMe.css"

const AboutMe = () => {
    return (
        <div className="holePage">
            <ScrollAnimation animateIn="fadeIn">
                <section className="mt-4 section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mt-md-0 phoneImage">
                                <img className="img-fluid" src={ProgramerImage} alt="" />
                            </div>
                            <div className="col-md-6 description">
                                <ScrollAnimation animateIn="fadeIn">
                                    <p>Professional summary:</p>
                                    <p>
                                        My ambition is Bringing concept to life with HTML, CSS, and JavaScript. Producing and maintaining
                                        websites and web applications. Creating tools that enhance interaction with the site in
                                        any browser. Analyzing code, designing, and debugging applications along with
                                        ensuring a seamless user experience. Optimizing web pages for maximum efficiency
                                        and responsive in any devices.
                                    </p>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0 desktop-image">
                                <img className="img-fluid" src={ProgramerImage} alt="" />
                            </div>
                        </div>
                        <div className="col mt-5">
                            <a rel="noreferrer" download href="http://www.keepandshare.com/doc19/view.php?id=37785&da=y" className="btn btn-outline-dark m-3" target="_blank">Resume</a>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}

export default AboutMe;
