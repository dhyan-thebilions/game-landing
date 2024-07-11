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
  };
  return (
    <section className="cowboy-group">
      <div className="cowboy-group-child" />
      <img className="splash-bg-1-icon" alt="" src={CowBoyBack} />
      <div className="game-logo-1-wrapper">
        <img className="game-logo-1" loading="lazy" alt="" src={CowBoyLogo} />
      </div>
      <div className="experience-the-thrill-of-guns-parent">
        <div className="experience-the-thrill-of-guns">
          <span className="experience-the-thrill">
            Experience the Thrill of Guns N Coins
          </span>
        </div>

        <h2 className="spin-the-reels">
          Spin the reels in Gun n' Coins, and hit jackpots with a thrilling
          Cowboy theme. Collect coins, trigger bonus rounds, and aim for massive
          wins!
        </h2>
      </div>
      <div className="button-1-wrapper">
        <img className="button-1-icon" loading="lazy" alt="" src={CowBoyPlay} onClick={handleClick} />
      </div>
    </section>
  );
};

export default CowBoy;
