import React from 'react';
import ImageSlider from '../image-slider/ImageSlider';
import MobileImageSlider from '../image-slider/MobileImageSlider';

const Cars = () => (
  <div className="container-fluid homepage">
    <MobileImageSlider />
    <ImageSlider />
  </div>
);

export default Cars;
