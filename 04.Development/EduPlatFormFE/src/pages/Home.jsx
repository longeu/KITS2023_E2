/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import Slider from "../components/Slider";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import { Button, Container, Typography } from "@mui/material";

const Home = () => {
  const token = localStorage.getItem('token');
  const [showMore, setShowMore] = useState(false);
  const [courses, setCourse] = useState(null);
  const role = localStorage.getItem('role');
  const getCourses = async () => {
    if(role=='ROLE_TEACHER')
    {
      fetch('http://localhost:8080/api/teacher/course/list',{
      headers: {
        'Authorization': 'Bearer ' + token,
      }
      }).then( res => {
        if(res.ok){
          return res.json()
        }else{
          window.alert('Fail to connect to Course DB, please contact the administrator')
        }
      }).then(data => setCourse(data.results))
    }else{
      fetch('http://localhost:8080/api/student/course/list',{
      headers: {
        'Authorization': 'Bearer ' + token,
      }
      }).then( res => {
        if(res.ok){
          return res.json()
        }else{
          window.alert('Fail to connect to Course DB, please contact the administrator')
        }
      }).then(data => setCourse(data.results))
    }
  }
  useEffect(()=>{
   getCourses();
  });
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mt: 2,
          ml: 3,
          color: "#1a237e",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          //handwriting font
          fontFamily: "Dancing Script, cursive",
          letterSpacing: "0.05em",
          textAlign: "left",
        }}
      >
        Welcome to Edu Platform
      </Typography>
      <Slider />
      {courses && <Container
        maxWidth="x1"
        sx={{ mt: 2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
        {showMore
          ? courses.map((course, index)=>{
            return (
              <Grid item key={index} xs={4}>
                <CourseCard course={course}/>
              </Grid>
            )
          })

          : courses
              .slice(0, 4)
              .map((course, index) =>{
                return (
                  <Grid item key={index} xs={4}>
                    <CourseCard course={course}/>
                  </Grid>
                )
              }
              )}
            </Grid>
        </Box>
      </Container>}

      {showMore ? (
        <Button
          onClick={handleShowMore}
          style={{ width: "fit-content", left: "50%" }}
        >
          Show Less
        </Button>
      ) : (
        <Button
          onClick={handleShowMore}
          style={{ width: "fit-content", left: "50%" }}
        >
          Show More
        </Button>
      )}
    </div>
  );
};

export default Home;
