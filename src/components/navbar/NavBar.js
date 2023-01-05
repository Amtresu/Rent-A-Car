import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                    <img className="logo" src={Logo} alt="Logo rental call" />

                    <NavLink to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">CARS</span>
                    </NavLink>

                    <NavLink to="/reserve" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">RESERVE</span>
                    </NavLink>

                    <NavLink href="/reservations" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">MY RESERVATIONS</span>
                    </NavLink>

                    <NavLink to="/add_car" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">ADD CAR</span>
                    </NavLink>

                    <NavLink to="/delete_car" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">DELETE CAR</span>
                    </NavLink>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar
