import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="signup">
            <div className="signup-container">
                <div className="signup-form">
                    <div className="signup-title">
                        <h2 className="sign-up-to">
                            Sign up to receive updates from Vegas Empire
                        </h2>
                    </div>
                    <div className="form">
                        <div className="inputtext-style-3">
                            <div className="input-label">Email</div>
                            <div className="email-input">
                                <div className="icon">
                                    <img
                                        className="iconoutlineat-symbol"
                                        alt=""
                                        src="/iconoutlineatsymbol.svg"
                                    />
                                </div>
                                <input
                                    className="email-address"
                                    placeholder="Email address"
                                    type="text"
                                />
                            </div>
                        </div>
                        <button className="button2">
                            <b className="play-now2">Subscribe</b>
                        </button>
                    </div>
                    <div className="privacy">
                        <input className="privacy-container" type="checkbox" />
                        <div className="i-have-read-container">
                            <span>
                                <span>I have read and agree to the</span>
                                <span className="span1">{` `}</span>
                            </span>
                            <span className="privacy-policy">Privacy policy</span>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyright-2024">© Copyright 2024 | Games.com</div>
                </div>
            </div>
            <div className="help">
                <div className="help-container">
                    <div className="help-content">
                        <b className="help-menu">Vegas Empire</b>
                        <div className="lorem-ipsum-dolor">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            dictum aliquet.
                        </div>
                    </div>
                    <div className="features">
                        <div className="about-features-works">Privacy Policy</div>
                        <div className="about-features-works1">Terms and conditions</div>
                    </div>
                </div>
            </div>
            {/* <div className="shape" />
            <div className="shape1" /> */}
        </footer>
    );
}

export default Footer;
