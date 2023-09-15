import "../css/FCourses.css"
import { useState } from "react";
import courses_bg from "../Images/courses-bg.svg";
import FC_image from "../Images/FC-image.svg"; 

const FCourses = () => {

const [courses,setCourses]=useState([
    {
        title:"UI UX development",
        description:"Work from home",
        duration:3,
        stipend:"3000-5000",
        id:1,
    },
    {
        title:"Full stack and cloud",
        description:"Gurugaon",
        duration:6,
        stipend:4000,
        id:2,
    },
    {
        title:"Business development",
        description:"Mumbai",
        duration:4,
        stipend:5000,
        id:3,
    },
    {
        title:"Social Media Marketing",
        description:"Work from home",
        duration:3,
        stipend:"3000-5000",
        id:4,
    },
    {
        title:"React portal development",
        description:"Ahmedabad",
        duration:6,
        stipend:8000,
        id:5,
    },
    {
        title:".NET development",
        description:"work from home",
        duration:8,
        stipend:9000,
        id:6,
    },
    {
        title:"Software testing",
        description:"Hyderabad",
        duration:4,
        stipend:4000,
        id:7,
    },
    
])
    return ( 
        <div className="main" id="internships">
            <img src={courses_bg} className="courses-bg"/>
            <div className="freecourses">
                <div className="fc-left">
                    <h6>GRAB EXCITING</h6>
                    <h3>Internship Opportunities</h3>
                    <p>Explore hands-on learning experiences and gain practical skills through our diverse internship programs, tailored to your career goals.</p>
                    <img src={FC_image}/>
                </div>
                <div className="fc-right">
                        
                        <div className="shadow shadow--top"></div>
                        <div className="shadow shadow--bottom"></div>
                    <div className="fc-boxes">
                        <div>
                            {courses.map((details)=>(
                                <div className="fc-box " key={details.id}>
                                <div className="box-text">
                                <h2>{details.title}</h2>
                                <p>{details.description}</p>
                                <div className="details">
                                    <h5>duration:</h5>
                                    <span>{details.duration} months</span>
                                </div>
                                <div className="details">
                                    <h5>stipend:</h5>
                                    <span>{details.stipend}/month</span>
                                </div>
                                <button>VIEW DETAILS</button>
                            </div>
                            </div>
                            ))}
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FCourses;