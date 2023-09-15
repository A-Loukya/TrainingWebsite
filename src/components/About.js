import "../css/About.css";
import bulb from "../Images/Light bulb.svg";
import careerPlanning from "../Images/career planning.svg" 
import { useState } from "react";
const About = () => {

const [training,setTraining]=useState([
    // training services array
    {
        title:"Upskilling Solutions",
        description:"Explore our comprehensive upskilling programs designed to empower students, professionals, and government employees with the knowledge and skills needed to thrive in today's dynamic world.",
        id:1,
    },
    {
        title:"Company-Specific Training",
        description:"Elevate your workforce's capabilities with our customizable company-specific training programs. We work closely with organizations to develop training solutions aligned with their unique goals and industry demands.",
        id:2,
    },
    {
        title:"Technology-Specific Training",
        description:"Stay ahead of the curve with our technology-specific training courses. From AI and blockchain to cybersecurity and cloud computing, we offer in-depth training that equips learners with expertise in cutting-edge technologies.",
        id:3,
    },
    {
        title:"Tool-Based Training",
        description:"Maximize productivity and efficiency by mastering essential tools for your industry. Our tool-based training programs cover a wide range of software and applications to help you work smarter and faster.",
        id:4,
    },
])
    return ( 
        <div className="main" id="about">
            {/* ourprogram */}
        <div className="ourProgram">
            <div className="op-main">
            <h1>Our<br></br> Program</h1>
            <p>Our curriculum covers diverse creative topics, promoting skill development.</p>
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
        {/* training services */}
        <div className="traningServices">
                <h2>Our Training Approaches</h2>
                <div className="ts-details">
                    {/* <div> */}
                        {training.map((details)=>(
                             <div className="box" key={details.id}>
                             <h5>{details.title}</h5>
                             <p>{details.description}</p>
                         </div>
                        ))}
                    {/* </div> */}

                   
                </div>
        </div>
        </div>
     );
}
 
export default About;