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
                    <h6>name is a treat for all who are willing to learn both educationally & professionally with over 4000+ courses & a diverse community of learners!</h6>
                </div>
                <div className="footer-right">
                    <div className="navlinks">
                    <h3>Home</h3>
          <h3>About</h3>
          <h3>Courses</h3>
          <h3>Contact</h3>
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