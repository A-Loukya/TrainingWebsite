// import React, { useState } from "react";
import React, { useState, useEffect } from 'react';
import home_bg from "../Images/home-bg.svg";
import logo from "../Images/LOGO.svg";
import home_img from "../Images/home-img.svg";
import video from "../Images/video.svg";
import "../css/Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      // Set isActive to true after the component has mounted
      setIsActive(true);
  
      // Optionally, you can set isActive to false when the component is unmounted
      return () => {
        setIsActive(false);
      };
    }, []);

  return (
    // home page
    <div className="main" id="home">
      <img src={home_bg} className={`home-bg ${isActive ? 'active' : ''}`} alt="Home Background" />
      <nav>
        <img src={logo} className="logo" alt="Logo" />
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <div className={`navlinks ${menuOpen ? "active" : ""}`}>
            <h3>
              <a href="#home">Home</a>
            </h3>
            <h3>
              <a href="#about">About</a>
            </h3>
            <h3>
              <a href="#services">Services</a>
            </h3>
            <h3>
              <a href="#internships">Internships</a>
            </h3>
            <h3>
              <a href="#contact">Contact</a>
            </h3>
            {/* <button className='signIn-btn'>Sign up</button> */}
          </div>
        </div>
        {/* hamburger */}
        <div
          className={`hamburger-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
        </div>
      </nav>

      <div className="home">
        <div className="home-left">
        <h2>Introducing Integrated
           <span className="text-color"> Learning</span> and<span className="text-color"> Career Development</span>  Hub</h2>
          <p className="home-text">
            We provide diverse training, placement, internships, and education
            services, fostering holistic growth for students, corporates, and
            government entities.
          </p>
          <div className="home-bnts">
            <button className="homeBtn1">Get started</button>
            <button className="homeBtn2">
              <img src={video} alt="Video" />
              Watch video
            </button>
          </div>
        </div>
        <img src={home_img} className="home-img" alt="Home Image" />
      </div>
    </div>
  );
};

export default Home;
