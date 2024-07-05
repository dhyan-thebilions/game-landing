import React from "react";
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const Landing = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home');
    };
    return (
        <>
            <div className="landing-page">
                <div className="content">
                    <h1>Welcome to Your Landing Page</h1>
                    <button className="center-button" onClick={handleGetStarted}>Get Started</button>
                </div>
            </div>
        </>
    );
};

export default Landing;
