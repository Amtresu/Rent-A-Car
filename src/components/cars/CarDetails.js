/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function CarDetails() {
  const [cars, setCars] = useState({});

  const { id } = useParams();

  const fetchDetails = () => {
    fetch(`https://final-capstone-api.onrender.com/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCars(data));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="details">
      <div className="card mb-3">
        <img src={cars.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cars.name}</h5>
          <p className="card-text">{cars.description}</p>
          <p className="card-text"><small className="text-muted">{cars.model}</small></p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
