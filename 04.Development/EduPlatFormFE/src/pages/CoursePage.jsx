/* eslint-disable react/prop-types */
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import { useState } from "react";

const CoursePage = ({ course }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  //declare a variable to store all the categories uniquely from props.course

  const categories = [...new Set(course.map((course) => course.category))];

  const filteredCourse =
    selectedCategory === "All"
      ? course
      : course.filter((course) => course.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 20 }}>
        {selectedCategory}
      </Typography>
      <ButtonGroup
        variant="outlined"
        color="primary"
        aria-label="category selection"
        sx={{
          display: "flex",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        {/* if select all, display all the course, otherwise, filter the courses */}
        <Button
          onClick={() => handleCategoryChange("All")}
          variant={selectedCategory === "All" ? "contained" : "outlined"}
          sx={{ borderRadius: 0 }}
        >
          All
        </Button>
        {categories.map((category, idx) => (
          <Button
            key={idx}
            onClick={() => handleCategoryChange(category)}
            variant={selectedCategory === category ? "contained" : "outlined"}
            sx={{ borderRadius: 0 }}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
      <Container
        maxWidth="x1"
        sx={{ mt: 2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredCourse.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </Container>
    </>
  );
};

export default CoursePage;
