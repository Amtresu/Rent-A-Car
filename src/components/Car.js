import React from 'react';
import PropTypes from 'prop-types';

const Car = (props) => {
  const { image, description, model, mfgDate } = props;

  return (
    <>
      <div className='card'>
        <p>{model}</p>
        <p>{mfgDate}</p>
        <img src={image} alt="car-image" />
        <p>{description}</p>
      </div>
    </>
  );
};

Car.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  mfgDate: PropTypes.string.isRequired,
}

export default Car;
