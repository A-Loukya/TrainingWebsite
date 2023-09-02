import "../css/Pcourses.css";
import PCImg1 from "../Images/PCimg1.svg";
import PCImg2 from "../Images/PCimg2.svg";
import PCImg3 from "../Images/PCimg3.svg";
import star from "../Images/star.svg";
import { useState } from "react";
const Pcourses = () => {
  const [courses, setCourses] = useState([
    {
      image: PCImg1,
      title: "Front-End development",
      students: "200+",
      rating: "4.0",
      price: "120",
      id: 1,
    },
    {
      image: PCImg2,
      title: "Graphic designing",
      students: "180+",
      rating: "4.5",
      price: "140",
      id: 2,
    },
    {
      image: PCImg3,
      title: "Digital Marketing",
      students: "300+",
      rating: "5.0",
      price: "160",
      id: 3,
    },
    {
      image: PCImg1,
      title: "Front-End development",
      students: "200+",
      rating: "4.0",
      price: "120",
      id: 4,
    },
    {
      image: PCImg2,
      title: "Graphic designing",
      students: "180+",
      rating: "4.5",
      price: "140",
      id: 5,
    },
    {
      image: PCImg3,
      title: "Digital Marketing",
      students: "300+",
      rating: "5.0",
      price: "160",
      id: 6,
    },
  ]);

  return (
    <div>
      <div className="Pcourses">
        <h2>Select courses based on your specific requirements</h2>

        <div className="Pcourses-boxes">
          {courses.map((details) => (
            <div className="Pcourses-box"  key={details.id}>
              <img src={details.image} />
              <h3>{details.title}</h3>
              <div className="course-details">
                <p>{details.students} students</p>
                <div className="ratings">
                  <img src={star} />
                  <p>{details.rating}</p>
                </div>
                <h6>${details.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pcourses;
