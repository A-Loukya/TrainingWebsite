import "../css/About.css";
import bulb from "../Images/Light bulb.svg";
import careerPlanning from "../Images/career planning.svg" 
const About = () => {
    return ( 
        <div className="main" id="about">
        <div className="ourProgram">
            <div className="op-main">
            <h1>Our Program</h1>
            <p>We offer a variety program of courses over various creative topics</p>
            </div>
            <div className="op op1">
                <img src={bulb}/>
                <h4>Creative Thinking</h4>
                <p>Add wings to your ideas and fly as a thinker</p>
            </div>
            <div className="op op2">
                <img src={careerPlanning}/>
                <h4>Career planning</h4>
                <p>Learn how to shape your career with sessions!</p>
            </div>
        </div>
        <div className="traningServices">
                <h2>Our Training Approach and Services</h2>
                <div className="ts-details">
                    <div className="box box-1">
                        <h5>Private Mentoring</h5>
                        <p>Experience the pinnacle of personalized learning with our private mentoring services.</p>
                    </div>
                    <div className="box box-2">
                        <h5>Online Resources</h5>
                        <p>Elevate your learning experience with our comprehensive online resources, available anytime and anywhere.</p>
                    </div>
                    <div className="box box-3">
                        <h5>Interactive Simulations</h5>
                        <p>Step into real-world scenarios through our interactive simulations, where theory meets practical application.</p>
                    </div>
                </div>
        </div>
        </div>
     );
}
 
export default About;