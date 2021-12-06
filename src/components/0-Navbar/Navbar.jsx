import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./navbar.css"



const Navbar = () => {
    const navigate = useNavigate()
    const homeHandleDirection = () => {
        navigate("/")
    }
    const aboutMeHandleDirection = () => {
        navigate("/aboutMe")
    }
    const SampleHandleDirection = () => {
        navigate("/workSample")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg">
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
                            <li className="m-2 nav-item">
                                <NavLink
                                    onClick={homeHandleDirection}
                                    to="/"
                                    className={(navData) => navData.isActive ? "m-2 nav-link active" : "m-2 nav-link"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="m-2 nav-item">
                                <NavLink
                                    to="/aboutMe"
                                    onClick={aboutMeHandleDirection}
                                    className={(navData) => navData.isActive ? "m-2 nav-link active" : "m-2 nav-link"}
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li className="m-2 nav-item">
                                <NavLink
                                    to="/WorkSample"
                                    onClick={SampleHandleDirection}
                                    className={(navData) => navData.isActive ? "m-2 nav-link active" : "m-2 nav-link"}
                                >
                                    Work Sample
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;