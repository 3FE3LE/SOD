import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselContent = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
  )
}

export default CarouselContent
