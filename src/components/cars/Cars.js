import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCars } from '../../redux/cars/car';
// import Car from './Car';
import ImageSlider from '../image-slider/ImageSlider';

function Cars() {
  return (
    <div className="container-fluid homepage">
      <ImageSlider />
      {/* <div className="test">
        {renderCars.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            author={car.author}
          />
        ))}
      </div> */}

    </div>
  );
}

export default Cars;
