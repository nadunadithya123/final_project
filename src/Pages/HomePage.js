import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="home">
      <Home />
      <About />
      <Contact />

      <Footer />
    </div>
  );
};

export default HomePage;
