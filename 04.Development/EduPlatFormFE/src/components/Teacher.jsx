/* eslint-disable react/prop-types */

import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {
  MdStarRate,
  MdPlayCircle,
  MdSupervisorAccount,
  MdVerified,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Teacher = ({ course }) => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate(`/teacher/${course.teacher.id}`);
  }
  return (
    <div id="teacher">
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Giảng viên
      </Typography>
      <Link
        underline="hover"
        key="1"
        color="inherit"
        style={{
          marginLeft: 10,
          color: "#c0c4fc",
          textDecoration: "underline",
        }}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {course.teacher.lastName + " " + course.teacher.firstName}
        </Typography>
      </Link>

      <Typography variant="h6">Engineering Consultant, AWS Cloud Solution Architect</Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="row">
          <Grid xs={2}>
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
              style={{
                marginLeft: 10,
                color: "#c0c4fc",
                textDecoration: "underline",
              }}
            >
              <Avatar
                src={course.teacher.image}
                sx={{ width: 100, height: 100 }}
              />
            </Link>
          </Grid>
          <Grid xs={10}>
            <div>
              <MdStarRate />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {Math.floor(Math.random() * 5)} xếp hạng giảng viên
              </Typography>
            </div>
            <div>
              <MdVerified />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {Math.floor(Math.random() * 500)} đánh giá
              </Typography>
            </div>
            <div>
              <MdSupervisorAccount />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {Math.floor(Math.random() * 500)} học viên
              </Typography>
            </div>
            <div>
              <MdPlayCircle />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {Math.floor(Math.random() * 10)} khóa học
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="subtitle1">{course.teacher.experience}</Typography>
      {/* <Typography variant="subtitle1">
        Language: {course.teacher.language.join(", ")}
      </Typography> */}
      <Typography variant="subtitle1">Certificates:</Typography>
      {course.teacher.certificates && course.teacher.certificates.split(',').map((c, index) => {
        return (
          <Typography
            variant="subtitle2"
            style={{ marginLeft: 20 }}
            key={index}
          >
            - {c}
          </Typography>
        );
      })}
      <Typography variant="subtitle1">As a Cloud Solution Architect (SA), I can provide many solution for customer during system design, development and deployment. I also contribute to community by many activities like Youtube channel, on-demand private training course and now on Udemy. Nice to make friend with all of you.</Typography>
    </div>
  );
};

export default Teacher;
