import React from 'react';
import sass from "../Image/sass.png"
import flex from "../Image/flexBox.png"
import react from "../Image/oak.png"


const SlideShow = () => {
    return (
        <>
            <section className="bg-dark">
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={react} className="d-block w-100 mt-5" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={sass} className="d-block w-100 mt-5" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={flex} className="d-block w-100 mt-5" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col mt-5">
                            <h3 className="folio">Portfolio</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SlideShow;