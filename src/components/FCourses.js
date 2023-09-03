import "../css/FCourses.css"
import { useState } from "react";
import courses_bg from "../Images/courses-bg.svg";
import FCimg1 from "../Images/FCimg1.svg";
import FCimg2 from "../Images/FCimg2.svg";
import FCimg3 from "../Images/FCimg3.svg";
import FCimg4 from "../Images/FCimg4.svg";
import FC_image from "../Images/FC-image.svg"; 

const FCourses = () => {

const [courses,setCourses]=useState([
    {
        image:FCimg1,
        title:"UI UX design course",
        description:"Brush up your fundamentals of designing.",
        id:1,
    },
    {
        image:FCimg2,
        title:"Finance management",
        description:"Elevate Your Expertise with Finance Management Learning.",
        id:2,
    },
    {
        image:FCimg3,
        title:"Self Development",
        description:"Unleash your potential through self-development journey.",
        id:3,
    },
    {
        image:FCimg4,
        title:"Business Fundamentals for Beginners",
        description:"Learn the core principles of business.",
        id:4,
    },
    {
        image:FCimg1,
        title:"UI UX design course",
        description:"Brush up your fundamentals of designing.",
        id:5,
    },
    {
        image:FCimg2,
        title:"Finance management",
        description:"Elevate Your Expertise with Finance Management Learning.",
        id:6,
    },
    {
        image:FCimg3,
        title:"Self Development",
        description:"Unleash your potential through self-development journey.",
        id:7,
    },
    {
        image:FCimg4,
        title:"Business Fundamentals for Beginners",
        description:"Learn the core principles of business.",
        id:8,
    },
])
    return ( 
        <div className="main" id="courses">
            <img src={courses_bg} className="courses-bg"/>
            <div className="freecourses">
                <div className="fc-left">
                    <h6>100% FREE</h6>
                    <h3>Start learning with free courses</h3>
                    <p>Even if you are not ready with paid courses, there are a variety of free courses available for you.</p>
                    <img src={FC_image}/>
                </div>
                <div className="fc-right">
                        
                        <div className="shadow shadow--top"></div>
                        <div className="shadow shadow--bottom"></div>
                    <div className="fc-boxes">
                        <div>
                            {courses.map((details)=>(
                                <div className="fc-box " key={details.id}>
                                <img src={details.image} className="FCimg"/>
                                <div className="box-text">
                                <h2>{details.title}</h2>
                                <p>{details.description}</p>
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