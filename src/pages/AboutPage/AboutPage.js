import React from "react";
import "./AboutPage.css";
import AboutImage from "../../assets/images/AboutImage.webp";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Noor Shop! We are your one-stop destination for the latest
        fashion trends. Our carefully curated collection features the finest in
        clothing and accessories, ensuring that you look your best for every
        occasion.
      </p>
      <img src={AboutImage} alt="Fashion Showcase" className="about-image" />
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide you with high-quality, stylish, and affordable
        clothing that makes you feel confident and beautiful. We believe in
        celebrating individuality and offer a wide range of styles to suit every
        taste.
      </p>
    </div>
  );
};

export default AboutPage;
