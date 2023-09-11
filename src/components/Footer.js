import "../css/Footer.css"
import logo from "../Images/LOGO.svg";
import instagram from "../Images/instagram.svg"
import linkedin from "../Images/linkedin.svg"
import twitter from "../Images/twitter.svg"
const Footer = () => {
    return ( 
        <div>
            <div className="footer">
                <div className="footer-flex">
                <div className="footer-left">
                    <img src={logo}/>
                    <h6>Unlock your potential with our comprehensive training, placement, internship, and education services. Empowering students, corporations, and government agencies for a brighter future.</h6>
                </div>
                <div className="footer-right">
                    <div className="navlinks">
                    <h3><a href="#home" >Home</a></h3>
          <h3><a href="#about">About</a></h3>
          <h3><a href="#services">Services</a></h3>
          <h3><a href="#internships">Internships</a></h3>
          <h3><a href="#contact">Contact</a></h3>
                    </div>
                    <div className="socialmedia">

                    <div className="icons">
                        <img src={instagram}/>
                    </div>
                    <div className="icons">
                        <img src={linkedin}/>

                    </div>
                    <div className="icons">
                        <img src={twitter}/>

                    </div>
                    
                    </div>
                </div>
                </div>
            <hr></hr>
            <p>Copyright © 2023 name. All rights reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;