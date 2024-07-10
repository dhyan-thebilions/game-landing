import React from "react";
import Cowboy from "../../components/CowBoy";
// import Header from "../../components/Header";
// import Card from "../../components/Card";
// import GameCard from "../../components/GameCard";
// import Footer from "../../components/Footer";

import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <Cowboy />
            {/* <div className="app">
                <Header />
                <Card name="Grand theft auto" date="20.02.2019" onPlay={handlePlayClick} />
                <GameCard name="Grand theft auto" date="20.02.2019" onPlay={handlePlayClick} />
                <Footer />
            </div> */}
        </>
    );
};

export default HomePage;
