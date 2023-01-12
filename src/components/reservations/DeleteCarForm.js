import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarsAsync, deleteCars } from '../../redux/cars/cars';

function DeleteCarForm() {
  const { cars } = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, []);
  return (
    <div className="reservations">
      <h2 className="fw-bold home-text ms-5"> DELETE A CAR</h2>
      {
         cars.map((car) => (

           <div key={car.id}>
             <p>{car.name}</p>
             <button
               type="submit"
               onClick={() => dispatch(deleteCars(car.id))}
             >
               Delete

             </button>
           </div>
         ))
      }
    </div>
  );
}

export default DeleteCarForm;
