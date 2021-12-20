import React from 'react';
import navbar from './nav';
import "./navbar.css"



const Navbar = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg" id="navbar">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="m-2 nav-item">
                                <a
                                    href="/"
                                    className="m-2 nav-link active"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="m-2 nav-item">
                                <a
                                    href="#aboutMe"
                                    className="m-2 nav-link"
                                >
                                    About Me
                                </a>
                            </li>
                            <li className="m-2 nav-item">
                                <a
                                    href="#portfolio"
                                    className="m-2 nav-link"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className="m-2 nav-item">
                                <a
                                    className="m-2 nav-link"
                                    href="#contact">
                                    Contact Me
                                </a>
                            </li> */}
                            {navbar.map((n) => {
                                return (
                                    <li key={n.id} className="m-2 nav-item">
                                        <a href={n.path} className={n.className} >{n.label}</a>
                                    </li>
                                    )})}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;