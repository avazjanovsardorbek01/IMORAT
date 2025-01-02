import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";

const AntCarousel = () => {
  const contentStyle = {
    height: "550px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>First Slide</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Second Slide</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Third Slide</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Fourth Slide</h3>
      </div>
    </Carousel>
  );
};

export default AntCarousel;
