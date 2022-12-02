import React from 'react'
import {Carousel} from 'react-bootstrap';

function Slider() {
  return (
    <div className="slider">
    <Carousel className="carous">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide1.jpg"
          alt="First slide"
         height="600px"
         width="400px"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide2.webp"
          alt="Second slide"
          height="600px"
          width="400px"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide3.jpg"
          alt="Third slide"
          height="600px"
          width="400px"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="overlay">
         <p className="writer"></p>
      </div>
    </div>
  )
}

export default Slider