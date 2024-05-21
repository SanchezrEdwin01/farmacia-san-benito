import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/san-benito-discounts.png`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/san-benito-home.png`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/san-benito-phone-number.png`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
