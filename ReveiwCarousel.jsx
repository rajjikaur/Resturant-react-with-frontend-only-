import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "./Home.css";

const reviews = [
  {
    text: "Amazing drinks! Super refreshing and tasty.",
    name: "Simran Kaur",
    rating: 5,
  },
  {
    text: "Great service and delicious food items!",
    name: "Rahul Mehta",
    rating: 4,
  },
  {
    text: "Loved the ambience and quick delivery.",
    name: "Ananya Sharma",
    rating: 5,
  },
  {
    text: "Affordable and yummy shakes!",
    name: "Arjun Verma",
    rating: 4,
  },
];

function ReviewCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="review-carousel">
      <h2 className="review-title">✨ What Our Customers Say ✨</h2>
      <Slider {...settings}>
        {reviews.map((r, index) => (
          <div key={index} className="review-box">
            <p className="review-text">“{r.text}”</p>
            <h5>- {r.name}</h5>
            <div className="review-stars">
              {Array(r.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewCarousel;
