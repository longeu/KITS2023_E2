/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import { MdInfo, MdLanguage } from "react-icons/md";
import IntToStars from "./IntToStars";
import "./Sumary.css";

const Sumary = ({ course }) => {
  return (
    <div className="course-sumary">
      <Typography variant="h4" style={{ fontWeight: "bold", color: "inherit" }}>
        {course.name}
      </Typography>
      <Typography variant="subtitle1">
        <span
          style={{
            backgroundColor: "rgb(236,235,152)",
            color: "black",
            fontWeight: "bold",
            padding: "5px 7px",
          }}
        >
          Bestsellers
        </span>
        <span style={{ color: "#f69c08", margin: "0 10px" }}>
          {3.6}
          <IntToStars int={3.6} />
          <a
            href="#teacher"
            style={{
              marginLeft: 10,
              color: "yellow",
              textDecoration: "underline",
            }}
          >
            ({Math.floor(Math.random() * 500)} rating)
          </a>
          <span style={{ color: "white" }}>
            {" "}
            {Math.floor(Math.random() * 500)} students
          </span>
        </span>
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        Created by:
        <a
          href="#teacher"
          style={{
            marginLeft: 10,
            color: "yellow",
            textDecoration: "underline",
          }}
        >
          {course.teacher.lastName + " " + course.teacher.firstName}
        </a>
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        <span style={{ marginRight: 20 }}>
          <MdInfo />
          Most recent update: {course.modifiedDate}
        </span>
        <span>
          <MdLanguage />
          Tiếng Việt
        </span>
      </Typography>
    </div>
  );
};

export default Sumary;
