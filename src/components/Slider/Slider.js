import React from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "./Slider.css";
import "react-fancy-circular-carousel/FancyCarousel.css";
import TShirt0 from "../../assets/images/TShirt0.jpg";
import TShirt1 from "../../assets/images/TShirt1.jpg";
import TShirt2 from "../../assets/images/TShirt2.jpg";
import { isMobile } from "react-device-detect";

const images = [
  TShirt0,
  TShirt1,
  TShirt2,
  TShirt0,
  TShirt1,
  TShirt2,
  TShirt0,
  TShirt1,
  TShirt2,
  TShirt0,
  TShirt1,
  TShirt2,
  TShirt0,
  TShirt1,
  TShirt2,
];

const Slider = () => {
  return (
    <div className="carousel">
      <FancyCarousel
        images={images}
        carouselRadius={isMobile ? 100 : 250}
        peripheralImageRadius={isMobile ? 0 : 60}
        centralImageRadius={isMobile ? 160 : 120}
        focusElementStyling={{ border: "2px solid #ba4949" }}
        autoRotateTime={2}
        borderWidth={4}
        borderHexColor={"#1c364f"}
        navigationTextSize={2}
        navigationButtonRadius={20}
        navigationButtonColor={"#ba4949"}
        navigationButtonBgColor={"#1c364f"}
        navigationButtonStyling={{
          color: "#fff",
          margin: "10px",
        }}
      />
    </div>
  );
};

export default Slider;
