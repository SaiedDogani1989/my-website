import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgramerImage from "./image/programmer-removebg-preview.png"
import "./aboutMe.css"

const AboutMe = () => {
    return (
        <div className="holePage" id="aboutMe">
            <ScrollAnimation animateIn="fadeIn">
                <section className="mt-4 section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className=" phoneImage">
                                <img className="img-fluid" src={ProgramerImage} alt="" />
                            </div>
                            <div className="col-md-9 description">
                                <ScrollAnimation animateIn="fadeIn">
                                    <h3>Professional summary:</h3>
                                    <p>
                                        My ambition is Bringing concept to life with HTML, CSS, and JavaScript. Producing and maintaining
                                        websites and web applications. Creating tools that enhance interaction with the site in
                                        any browser. Analyzing code, designing, and debugging applications along with
                                        ensuring a seamless user experience. Optimizing web pages for maximum efficiency
                                        and responsive in any devices.
                                    </p>
                                    <p>
                                        I am passionate about writing semantic, compatible code that is re-useable,
                                        maintainable and easy to understand. The main areas of my expertise
                                        are HTML5, CSS3, JavaScript and React.js.
                                        I have knowledge of Node.js, API, Express.js, SQL and NoSQL.
                                    </p>
                                </ScrollAnimation>
                                <a href="#contact" className="btn btn-dark">Contact Me</a>
                            </div>
                            <div className="col-md-3 mt-4 mt-md-0 desktop-image">
                                <img className="img-fluid" src={ProgramerImage} alt="" />
                            </div>
                        </div>
                        {/* <div className="col mt-5">
                            <a rel="noreferrer" download href="http://www.keepandshare.com/doc19/view.php?id=37785&da=y" className="btn btn-outline-dark m-3" target="_blank">Resume</a>
                        </div> */}
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}

export default AboutMe;
