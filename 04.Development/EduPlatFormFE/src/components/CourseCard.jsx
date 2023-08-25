/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  return (
    <Card
      square={true}
      sx={{
        m: "20px",
        p: 1,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      style={{
        height: "400px",
      }}
    >
      <CardMedia
        component="img"
        style={{ height: "150px", objectFit: "contain" }}
        image={props.course.image}
        alt={props.course.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.name.length > 50 ? `${props.course.name.slice(0,50)} ...`:props.course.name}
        </Typography>
        <Typography variant="body1">
          Category: {props.course.category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description.length >100 ? `${props.course.description.slice(0,100)} ...`:props.course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/course/${props.course.id}`)}
        >
          View
        </Button>
        {
          role == 'ROLE_TEACHER' && 
          <Button
          size="small"
          onClick={() => navigate(`/course/${props.course.id}`)}
          >
            Edit
          </Button>
        }
      </CardActions>
    </Card>
  );
};

export default CourseCard;
