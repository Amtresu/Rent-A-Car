/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
      <img src={cars.image} className="rounded float-start car-img-details" alt="..." />
      <div className="details-right">
        <h2 className="fw-bold mb-4 text-end">{cars.name}</h2>
        <div className="card  border-light detailed-card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-secondary">{cars.model}</li>
            <li className="list-group-item">{cars.description}</li>
            <li className="list-group-item list-group-item-secondary">Reservation Amount: $400</li>
            <li className="list-group-item">Car Price: $200,000</li>
          </ul>
        </div>
        <Link to="/reserve" className="btn btn-reserve">
          Reserve
        </Link>
      </div>
    </div>
  );
}

export default CarDetails;
