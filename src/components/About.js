import React from "react";
import about1 from "./images/about1.jpg";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-img">
          <img src={about1} alt="" className="about-img" loading="lazy" />
        </div>
        <div className="about-text">
          <h1 className="heading">
            Clinical Formulations <br /> with Integrity.
          </h1>
          <p>
            Note sure where to start? <br /> Build my regimen
            <i className="fa-solid fa-arrow-right-long"></i>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            pariatur earum veritatis nam vitae aliquam! Architecto similique
            animi debitis voluptatibus! Laudantium odio nemo dolorem molestias
            et excepturi sapiente, quisquam eum!
          </p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default About;
