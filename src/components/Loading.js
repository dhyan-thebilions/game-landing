import React from "react";
import './Loading.css';

const Loading = ({ progress }) => {
    return (
        <div className="loading-container">
            <div className="background-image"></div>
            <div className="overlay">
                <div className="loading-content">
                    <p className="loading-text">{Math.round(progress)}%</p>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
