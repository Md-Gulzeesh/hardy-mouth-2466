import React from 'react';
import Carousel from "react-bootstrap/Carousel";
const CarouselSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"
          alt="Offer"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection