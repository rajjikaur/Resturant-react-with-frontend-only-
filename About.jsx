import React from "react";
import { Carousel } from "react-bootstrap";
import "./About.css";

// Local image import
import Restaurant1 from "./restaurant1.jpg";
import Rajji1 from "./rajji1.jpg";
import Fresh from "./fresh.jpg";
import Signaturedrink from "./signaturedrink.jpg";
import Asthetic from "./asthetic.jpeg";
import Coffee from "./coffee.jpeg";
import Sweets from "./sweets.jpeg";

function About() {
  return (
    <div className="about-container">
      {/* Heading */}
      <h1 className="about-title">About Rajji Drinks Corner</h1>
      <p className="about-subtitle">
        A place where taste meets tradition ✨
      </p>

      {/* Main Image Carousel */}
      <Carousel className="about-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Rajji1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chief Executive</h3>
            <p>Head and serving the restaurant.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Local Image (restaurant1.jpg) */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Restaurant1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Comfortable Ambience</h3>
            <p>Perfect spot for family & friends to relax.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fresh}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Healthy & Hygienic</h3>
            <p>Freshly prepared drinks with love & care.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Restaurant Info Section */}
      <div className="about-info">
        <p>
          Welcome to <b>Rajji Drinks Corner</b>, your go-to place for fresh,
          delicious, and refreshing drinks 🍹. We pride ourselves in using
          natural ingredients, creating unique flavors, and providing a warm and
          friendly environment for all our guests.
        </p>
      </div>

      {/* 4 Small Images Grid */}
      <div className="about-gallery">
        <div className="gallery-item">
          <img src={Signaturedrink} alt="Signature Mocktails"/>
          <p>Signature Mocktails</p>
        </div>
        <div className="gallery-item">
          <img src={Asthetic} alt="Juices"/>
          <p>Fresh Juices</p>
        </div>
        <div className="gallery-item">
          <img src={Coffee} alt="Coffee"/>
          <p>Hot & Cold Coffee</p>
        </div>
        <div className="gallery-item">
          <img src={Sweets} alt="Snacks"/>
          <p>Tasty Snacks</p>
        </div>
      </div>
    </div>
  );
}

export default About;
