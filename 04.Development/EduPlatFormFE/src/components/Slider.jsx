import { useState } from "react";
import { Card, CardMedia, IconButton } from "@mui/material";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";

//random sale images
const images = [
  "https://th.bing.com/th/id/R.9d7a3c462fc7869441a2916ac1d6ee5f?rik=x3YQhLnvSYHqxQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.XiRXQoRHJooTON21REjBLwHaFP?pid=ImgDet&rs=1",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Card
      square={true}
      sx={{ margin: "2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <CardMedia
        component="img"
        height="500"
        image={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ objectFit: "fill" }}
      />
      <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
        <MdOutlineArrowCircleLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
      >
        <MdOutlineArrowCircleRight />
      </IconButton>
    </Card>
  );
};

export default Slider;
