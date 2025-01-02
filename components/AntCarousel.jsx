import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import Image from "next/image";
import Tashkent from "../public/assets/images/png/bg-hero.jpg";
import Samarqand from "../public/assets/images/png/bg-hero-2.jpg";
import Buxoro from "../public/assets/images/png/bg-hero-3.png";

const AntCarousel = () => {
  const contentStyle = {
    height: "550px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  };

  return (
    <Carousel autoplay>
      <div>
        <Image src={Tashkent} alt="Tashkent" style={contentStyle} />
      </div>
      <div>
        <Image src={Samarqand} alt="Tashkent" style={contentStyle} />
      </div>
      <div>
        <Image src={Buxoro} alt="Tashkent" style={contentStyle} />
      </div>
    </Carousel>
  );
};

export default AntCarousel;
