/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Sumary from "../components/Sumary";
import Payment from "../components/Payment";
import Objectives from "../components/Objectives";
import Contents from "../components/Content";
import Description from "../components/Description";
import Target from "../components/Target";
import Teacher from "../components/Teacher";
import Rating from "../components/Rating";
import { useEffect } from "react";

const CourseDetail = () => {
  const token = localStorage.getItem('token');
  const id = window.location.pathname.charAt(window.location.pathname.length-1);
  const [course, setCourse] = useState(null);
  useEffect(() =>{
    if(course === null)
    fetch(`http://localhost:8080/api/teacher/course/${id}`,{
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }).then(res => {
      if(res.ok){
        return res.json()
      }else{
        window.alert("Fail to create course, Please contact the administrator!!")
      }
    }).then(data => setCourse(data)).catch(err => console.log(err.message))
  })

  return (
    <div className="details-content">
        {course && <div className="contents" style={{ position: "relative" }}>
          <Sumary {...{ course }} />
          <Payment {...{ course }} />
          <div style={{ padding: "20px 600px 20px 200px" }}>
            <Objectives {...{ course }} />
            <Contents {...{ course }} />
            <Description {...{ course }} />
            <Target {...{ course }} />
            <Teacher {...{ course }} />
            <Rating />
          </div>
        </div>}
    </div>
  );
};

export default CourseDetail;
