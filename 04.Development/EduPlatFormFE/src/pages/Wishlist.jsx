/* eslint-disable react/prop-types */
import { Container, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";

const Wishlist = ({ course }) => {
  return (
    //make the container full width
    <div className="container">
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>
        Wishlist
      </Typography>
      <Container
        sx={{
          display: "flex",
          flex: 3,
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 5,
          mb: 5,
        }}
      >
        {course.map((item) => (
          <CourseCard key={item.id} course={item} />
        ))}
      </Container>
    </div>
  );
};

export default Wishlist;
