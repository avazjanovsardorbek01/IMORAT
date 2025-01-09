import React from "react";
import { Carousel } from "antd"; // Импорт Carousel из antd
import "antd/dist/reset.css";
import Image from "next/image";
import Tashkent from "../public/assets/images/png/bg-hero.jpg";
import Samarqand from "../public/assets/images/png/bg-hero-2.jpg";
import Buxoro from "../public/assets/images/png/bg-hero-3.png";

const AntCarousel = () => {
  return (
    <Carousel autoplay>
      <div className="carousel-slide ">
        <Image
          src={Tashkent}
          alt="Tashkent"
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
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
            borderRadius: "12px",
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
            borderRadius: "12px",
          }}
        />
      </div>
    </Carousel>
  );
};

export default AntCarousel;
