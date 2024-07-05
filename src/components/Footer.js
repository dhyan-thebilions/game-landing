import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="button-container">
                <button className="grouped-button">Privacy Policy</button>
                <button className="grouped-button">Button 2</button>
            </div>
            <span>
                Subscribe Newsletter
            </span>
            <div className="single-button-container">
                <button className="single-button">Contact</button>
            </div>
        </footer>
    );
}

export default Footer;
