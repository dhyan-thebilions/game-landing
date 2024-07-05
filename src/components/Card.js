import React from "react";
import './Card.css';
const Card = ({ logo, name, date, onPlay }) => {
    return (
        <div class="second hero">
            <img class="hero-profile-img" src="https://i.pinimg.com/originals/9f/b1/ff/9fb1ffb05dd28039d1a06ad8e90cbd75.jpg" alt="" />
            <div class="hero-description-bk"></div>
            <div class="hero-logo">
                <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
            </div>
            <div class="hero-description">
                <p>{name}</p>
            </div>
            <div class="hero-date">
                <p>{date}</p>
            </div>
            <div class="hero-btn">
                <a href="/">Play</a>
            </div>
        </div>
    );
};

export default Card;
