import React from "react";
import CarouselComponent from "./FoodCarousel";
import { FaStar, FaGift } from "react-icons/fa"; 
import { Carousel } from "react-bootstrap";  // import bootstrap carousel
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Welcome to Rajji Drinks Corner</h1>
      </header>

      {/* Carousel with Side Offers */}
      <div className="home-carousel-wrapper">
        {/* Left Offer */}
        <div className="offer-panel left-offer">
          <div className="offer-icon">
            <FaStar />
          </div>
          <h3>Chef's Special</h3>
          <p>Try our spicy paneer tikka, freshly grilled!</p>
          <button className="offer-btn">Order Now</button>
        </div>

        {/* Main Food Carousel */}
        <div className="carousel-panel">
          <CarouselComponent />
        </div>

        {/* Right Offer */}
        <div className="offer-panel right-offer">
          <div className="offer-icon">
            <FaGift />
          </div>
          <h3>Exclusive Offer</h3>
          <p>Get 20% off on your first online order!</p>
          <button className="offer-btn">Grab Offer</button>
        </div>
      </div>

      {/* Review Carousel */}
      <div className="review-carousel">
        <h2 className="review-title">What Our Customers Say 💬</h2>
        <Carousel indicators={false} interval={3000} className="review-slider">
          <Carousel.Item>
            <p className="review-text">"Best drinks I’ve ever had! Super refreshing and tasty. 🍹"</p>
            <h5>- Aman Sharma</h5>
          </Carousel.Item>
          <Carousel.Item>
            <p className="review-text">"The paneer tikka is out of this world! Highly recommend ⭐⭐⭐⭐⭐"</p>
            <h5>- Simran Kaur</h5>
          </Carousel.Item>
          <Carousel.Item>
            <p className="review-text">"Perfect ambience for friends & family. Love the vibes here."</p>
            <h5>- Rahul Verma</h5>
          </Carousel.Item>
          <Carousel.Item>
            <p className="review-text">"Super hygienic, healthy, and affordable. I visit every week! ❤️"</p>
            <h5>- Neha Gupta</h5>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
