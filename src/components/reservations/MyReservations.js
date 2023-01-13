import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservedCarsAsync } from '../../redux/reservedCars/reservedCars';
import MyReservation from './MyReservation';

function MyReservations(props) {
  const obj = props;
  const { user } = obj;
  const reservedCars = useSelector((state) => state.reservedCars);

  console.log(user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservedCarsAsync());
  }, []);

  const filteredCars = reservedCars.filter((car) => car.reservation.user_id === user.id);
  // console.log("After filter", filteredCars);
  return (
    <div className="reservations">
      <h2 className="fw-bold home-text ms-5"> MY RESERVATIONS</h2>
      {filteredCars.map((mergedObj) => (
        <MyReservation
          key={`key-${mergedObj.reservation.id}-${mergedObj.reservation.user_id}`}
          model={mergedObj.car.model}
          mfgDate={mergedObj.car.manufacturing_date}
          image={mergedObj.car.image}
          description={mergedObj.car.description}
        />
      ))}
    </div>
  );
}

export default MyReservations;
