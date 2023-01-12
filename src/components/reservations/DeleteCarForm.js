import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarsAsync, deleteCars } from '../../redux/cars/cars';

function DeleteCarForm() {
  const { cars } = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, []);

  const handleSubmit = (car) => {
    dispatch(deleteCars(car.id));
    dispatch(fetchCarsAsync());
  };
  return (
    <div className="reservations">
      <h2 className="fw-bold home-text ms-5"> DELETE A CAR</h2>
      {
         cars.map((car) => (

           <div key={car.id}>
             <p>{car.name}</p>
             <button
               type="button"
               onClick={() => { handleSubmit(car); }}
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
