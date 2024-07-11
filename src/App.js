import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
