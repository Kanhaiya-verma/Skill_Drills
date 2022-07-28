import React from "react";
import images from "../Image/images.jpg";
import Index from "../Html/Index";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Index />

      <img className="image1" src={images} alt="skill drills" />
    </div>
  );
};

export default Home;
