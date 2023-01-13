import React from 'react';

function MyReservation(props) {
  const obj = props;
  const {
    model, mfgDate, image, description,
  } = obj;

  return (
    <div className="card">
      <p>{model}</p>
      <p>{mfgDate}</p>
      <img src={image} alt="model-car" />
      <p>{description}</p>
    </div>
  );
}

export default MyReservation;
