import React from "react";
import company from "../assets/company.svg"
import email from "../assets/email.svg"
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={company} alt="Company Logo" className="company-logo" />
            </div>
            <div className="email-logo-container">
                <img src={email} alt="Email Logo" className="email-logo" />
            </div>
        </header>
    )
};

export default Header;
