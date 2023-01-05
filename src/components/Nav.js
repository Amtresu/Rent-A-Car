/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/navigation.css';

function Nav() {
  return (
    <div className="navigation">
      <NavLink to="/">Cars</NavLink>
      <NavLink to="/reserve">Reserve</NavLink>
      <NavLink to="/reservations">My reservations</NavLink>
      <NavLink to="/add_car">Add car</NavLink>
      <NavLink to="/delete_car">Delete car</NavLink>
    </div>
  );
}

export default Nav;
