import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../redux/cars/car';
import Car from './Car';
import ImageSlider from './image-slider/ImageSlider';

function Cars() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);
  const renderCars = cars.slice(0, 4);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="container-fluid homepage">
      <ImageSlider />
      <div className="test">
        {renderCars.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            author={car.author}
          />
        ))}
      </div>

    </div>
  );
}

export default Cars;
