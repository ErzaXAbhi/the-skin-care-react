import React from "react";
import hero4 from "./images/hero4.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={hero4} alt="" className="hero-img" loading="lazy" />
        <h1 className="hero-heading">
          The <br /> <span>Skin Care</span>
        </h1>
      </div>
    </>
  );
};

export default Hero;
