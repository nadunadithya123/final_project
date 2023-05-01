import React, { useEffect, useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/download.png";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import axios from "axios";

const Home = () => {
  const handleScrollClick = () => {
    const element = document.getElementById("about_component");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Predict Your Leave Disease</h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button onClick={handleScrollClick} className="secondary-button">
            Predict Disease <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
