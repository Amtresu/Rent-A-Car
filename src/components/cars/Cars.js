import React from 'react';
import ImageSlider from '../image-slider/ImageSlider';
import MobileImageSlider from '../image-slider/MobileImageSlider';

function Cars() {
  return (
    <div className="container-fluid homepage">
      <MobileImageSlider />
      <ImageSlider />
    </div>
  );
}

export default Cars;
