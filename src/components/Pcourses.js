import "../css/Pcourses.css";
// import PCImg1 from "../Images/PCimg1.svg";
// import PCImg2 from "../Images/PCimg2.svg";
// import PCImg3 from "../Images/PCimg3.svg";
import PCImg1 from "../Images/resumeBuilding.svg";
import PCImg2 from "../Images/test.svg";
import PCImg3 from "../Images/MockInterview.svg";
import PCImg4 from "../Images/counselling.svg";
import PCImg5 from "../Images/certification.svg";
import star from "../Images/star.svg";
import { useState } from "react";
const Pcourses = () => {
  const [courses, setCourses] = useState([
    {
      image: PCImg1,
      title: "Resume Building",
      description: "Crafting impactful resumes for career advancement.",
      id: 1,
    },
    {
      image: PCImg2,
      title: "Psychometric Test",
      description: "Assessing skills and personality traits effectively.",
      id: 2,
    },
    {
      image: PCImg3,
      title: "Mock Interview",
      description: "Simulated practice for interview success and confidence.",
      id: 3,
    },
    {
      image: PCImg4,
      title: "Career Counseling",
      description:
        "Expert guidance for strategic career development decisions.",
      id: 4,
    },
    {
      image: PCImg5,
      title: "Certifications",
      description:
        "Attaining professional recognition and enhancing skill sets.",
      id: 5,
    },
  ]);

  return (
    <div id="services">
      <div className="Pcourses">
        <div className="gradient">
          <h2>Placement preparation and services</h2>

          <div className="Pcourses-boxes">
            {courses.map((details) => (
              <div className="Pcourses-box" key={details.id}>
                <img src={details.image} />
                <h3>{details.title}</h3>
                <div className="course-details">
                  <p>{details.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pcourses;
