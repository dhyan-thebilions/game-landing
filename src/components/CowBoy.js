import React from "react";
import { useNavigate } from 'react-router-dom';
import "./CowBoy.css";
import CowBoyBack from "../assets/cowboy-bg.svg";
import CowBoyLogo from "../assets/cowboy-logo.svg";
import CowBoyPlay from "../assets/cowboy-play.svg";

const CowBoy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game');
    // const url = window.location.origin + '/game';
    // window.open(url, '_blank', 'noopener,noreferrer');

  };


  return (
    <section className="cowboy-bg">
      <div className="cowboy-bg-child" />
      <img className="banner-final-1-icon" alt="" src={CowBoyBack} />
      <img className="splash-bg-1-icon" alt="" src="/splashbg-1@2x.png" />
      <div className="coming-soon">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="logo-wrapper">
              <a className="logo">LOGO</a>
            </div>
            <a className="logo1">LOGO</a>
          </div>
          <div className="logo-1-wrapper">
            <img
              className="logo-1-icon"
              loading="lazy"
              alt=""
              src={CowBoyLogo}
            />
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="experience-the-thrill-container">
          <p className="experience-the-thrill">Experience the Thrill of Guns N Coins</p>
        </div>
        <div className="stay-tuned">
          <h2 className="spin-the-reels">
            Spin the reels in Gun n' Coins, and hit jackpots with a thrilling
            Cowboy theme. Collect coins, trigger bonus rounds, and aim for
            massive wins!
          </h2>
        </div>
      </div>
      <div className="button-container">
        <img
          className="component-1-icon"
          loading="lazy"
          alt=""
          src={CowBoyPlay}
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default CowBoy;
