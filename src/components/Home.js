import React, { useState } from 'react';
import home_bg from "../Images/home-bg.svg";
import logo from "../Images/LOGO.svg";
import home_img from "../Images/home-img.svg";
import video from "../Images/video.svg";
import "../css/Home.css"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='main' id='home'>
      <img src={home_bg} className='home-bg' alt="Home Background" />
      <nav>
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <img src={logo} className='logo' alt="Logo" />
          <h3><a href="#home">Home</a></h3>
          <h3><a href="#about">About</a></h3>
          <h3><a href="#courses">Courses</a></h3>
          <h3><a href="#contact">Contact</a></h3>
          <button className='signIn-btn'>Sign up</button>
        </div>
        <div className={`hamburger-menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
        </div>
      </nav>

      <div className='home'>
        <div className='home-left'>
          <p className='typing-ani'>INTRODUCING INTERACTIVE</p>
          <h2>Learning courses by top teachers</h2>
          <p className='home-text'>Choose from over 4,000 courses on topics like Graphic design, ReactJS, Cartoon design.</p>
          <div className='home-bnts'>
            <button className='homeBtn1'>Get started</button>
            <button className='homeBtn2'><img src={video} alt="Video" />Watch video</button>
          </div>
        </div>
        <img src={home_img} className='home-img' alt="Home Image" />
      </div>
    </div>
  );
}

export default Home;
