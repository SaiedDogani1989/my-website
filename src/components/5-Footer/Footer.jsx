import React from 'react';
import "./footer.css"


const Footer = () => {
    const currentYear = new Date();
    const year = currentYear.getFullYear()

    return (
        <footer>
            <a className="footer-link" href="http://www.linkedin.com/in/saeiddogani">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a className="footer-link" href="https://github.com/SaiedDogani1989">
                <i className="fab fa-github fa-2x"></i>
            </a>
            <hr />
            <p>Saeid Dogani © {year}.</p>
        </footer>
    )
}


export default Footer;