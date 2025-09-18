import React from "react";
import Carousel from "react-bootstrap/Carousel";
import food1 from "./food1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";
import "./FoodCarousel.css";

function FoodCarousel() {
  return (
    <Carousel fade interval={2500} pause={false}>
      <Carousel.Item>
        <img src={food1} alt="Drink 1" />
        <Carousel.Caption>
          <h3>Vegetarian Food</h3>
          <p>Authentic North Indian Cuisine</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={food2} alt="Drink 2" />
        <Carousel.Caption>
          <h3>Special Fruit Mix</h3>
          <p>Natural flavors in every sip</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={food4} alt="Drink 3" />
        <Carousel.Caption>
          <h3>Signature Rajji Drink</h3>
          <p>Our best-seller that everyone loves</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={food3} alt="Drink 4" />
        <Carousel.Caption>
          <h3>Sweet & Chilled Delight</h3>
          <p>Perfect treat for a hot day</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FoodCarousel;
