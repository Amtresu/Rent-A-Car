import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCars } from '../redux/cars/car';
import Car from './Car';

function Cars() {
const dispatch = useDispatch();
  const cars = useSelector((state) => state.car)
  
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className='test'>
        {cars.map((car) => (
        <Car
          key={car.id}
          id={car.id}
          author={car.author}
          />
          ))}
    </div>
  );
}

export default Cars;
