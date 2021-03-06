import React from 'react';
import HomeContent from "./Content"
import img from "../Image/img_1.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "./home.css"


const Home = () => {


    return (
        <div>
            <section className="mt-3 section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="fadeIn" >
                                <h4 className="fw-bold header-text">
                                    Hello, My name is Saeid Dogani,
                                </h4>
                                <p className="header-second-text">
                                    I AM A FRONTEND WEB DEVELOPER
                                </p>
                            </ScrollAnimation>
                        </div>
                        {/* vector image */}
                        <div className="col-md-6 mt-3 mt-md-0">
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <HomeContent />
        </div>
    );
}

export default Home;