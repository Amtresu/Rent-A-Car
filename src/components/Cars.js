import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCars } from '../redux/cars/car';
import Car from './Car';
import './style/navigation.css';


function Cars() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car)

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="position-absolute top-0 start-50 translate-middle-x min-vh-100">
      <div>
        {cars.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            image={car.image}
            description={car.description}
            model={car.model}
            mfgDate={car.mfgDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Cars;
