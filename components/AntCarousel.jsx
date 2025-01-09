import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import Image from "next/image";
import Tashkent from "../public/assets/images/png/bg-hero.jpg";
import Samarqand from "../public/assets/images/png/bg-hero-2.jpg";
import Buxoro from "../public/assets/images/png/bg-hero-3.png";

const AntCarousel = () => {
  return (
    <Carousel autoplay className="carousel-wrapper">
      <div className="carousel-slide">
        <Image
          src={Tashkent}
          alt="Tashkent"
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="carousel-slide">
        <Image
          src={Samarqand}
          alt="Samarqand"
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="carousel-slide">
        <Image
          src={Buxoro}
          alt="Buxoro"
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </Carousel>
  );
};

export default AntCarousel;
