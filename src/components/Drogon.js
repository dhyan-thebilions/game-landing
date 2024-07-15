import React from "react";
import "./Drogon.css";
import DrogonBack from "../assets/drogon-bg.svg";

const Dragon = () => {
    return (
        <section className="drogon-group">
            <div className="drogon-group-child" />
            <img
                className="drogon-1-icon"
                loading="lazy"
                alt=""
                src={DrogonBack}
            />
            <div className="coming-soon-wrapper">
                <h1 className="coming-soon1">COMING SOON</h1>
            </div>
            <div className="drogon-parent">
                <b className="drogon">
                    <span>Drogon</span>
                    <span className="span">{` `}</span>
                </b>
                <h2 className="stay-tuned-for">
                    Stay tuned for our next exciting game!
                </h2>
            </div>
            <div className="button-wrapper">
                <button className="button1">
                    <div className="play-now1">{`Subscribe for latest NEWS `}</div>
                </button>
            </div>
        </section>
    )
};

export default Dragon;
