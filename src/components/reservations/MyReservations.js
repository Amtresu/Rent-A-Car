import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservedCarsAsync } from '../../redux/reservedCars/reservedCars';

function MyReservations() {
  const { reservedCars } = useSelector((state) => state.reservedCars);
  console.log(reservedCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservedCarsAsync());
  }, []);
  return (
    <>
      <div className="reservations">
        <h2 className="fw-bold home-text ms-5"> MY RESERVATIONS</h2>
      </div>
        {reservedCars.map((car) => (
          <div>{car.reserve_date}</div>
        ))}
    </>
  );
}

export default MyReservations;
