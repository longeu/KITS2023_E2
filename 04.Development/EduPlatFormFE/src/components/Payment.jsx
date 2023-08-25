/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  MdOutlineFavoriteBorder,
  MdSync,
  MdDescription,
  MdOutlineArchive,
  MdCurrencyExchange,
  MdVideoLibrary,
} from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

const Payment = ({ course }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const videoStyle = {
    position: "absolute",
    top: "60px",
    right: "200px",
  };
  const buttonStyle = {
    height: "50px",
    fontSize: "22px",
    textTransform: "none",
    textAlign: "center",
    minWidth: "60px",
    margin: "5px 0",
  };
  const paymentCardStyle = {
    position: scrollPosition >= 300 ? "fixed" : "absolute",
    top: scrollPosition >= 300 ? "30px" : "250px",
    right: "200px",
    width: "340px",
    // height:"300px", //700px
    backgroundColor: "white",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px 10px",
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <>
      <iframe
        style={videoStyle}
        width="340"
        height="190"
        src={"https://www.youtube.com/embed/a9__D53WsUs" + "?enablejsapi=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div style={paymentCardStyle}>
        <Typography variant="h4" style={{ fontWeight: "bold", padding: "5px" }}>
          {course.price}
        </Typography>
        <Button
          variant="contained"
          style={{ ...buttonStyle, width: "74%", marginRight: "20px" }}
        >
          Add to cart
        </Button>
        <Button variant="outlined" style={buttonStyle}>
          <MdOutlineFavoriteBorder />
        </Button>
        <Button variant="outlined" style={{ ...buttonStyle, width: "100%" }}>
          Buy Now
        </Button>
        <div style={{ margin: "15px 0px" }}>
          <MdCurrencyExchange size={14} style={{ marginLeft: 30 }} />
          <Typography
            variant="subtitle2"
            style={{ padding: 10, fontSize: 14, display: "inline" }}
          >
            {" "}
            30-Day Money-Back Guarantee
          </Typography>
        </div>
        <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
          This course includes:
        </Typography>
        <div style={{ margin: "15px 0px" }}>
          <MdVideoLibrary size={14} />
          <Typography
            variant="subtitle2"
            style={{ padding: 10, fontSize: 14, display: "inline" }}
          >
            {" "}
            30 videos
          </Typography>
        </div>
        <div style={{ margin: "15px 0px" }}>
          <MdDescription size={14} />
          <Typography
            variant="subtitle2"
            style={{ padding: 10, fontSize: 14, display: "inline" }}
          >
            {" "}
            15 articles
          </Typography>
        </div>
        <div style={{ margin: "15px 0px" }}>
          <MdOutlineArchive size={14} />
          <Typography
            variant="subtitle2"
            style={{ padding: 10, fontSize: 14, display: "inline" }}
          >
            {" "}
            15 download resources
          </Typography>
        </div>
        <div style={{ margin: "15px 0px" }}>
          <MdSync size={14} />
          <Typography
            variant="subtitle2"
            style={{ padding: 10, fontSize: 14, display: "inline" }}
          >
            {" "}
            Full life time access
          </Typography>
        </div>
        <div style={{ margin: "15px 0px" }}>
          <GrCertificate size={14} />
          <Typography
            variant="subtitle2"
            style={{ padding: 10, fontSize: 14, display: "inline" }}
          >
            Ceritficate of Completion
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Payment;
