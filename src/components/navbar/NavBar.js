import React from 'react'
import Logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                     <img className="logo" src={Logo} alt="Logo rental call" />

                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">CARS</span>
                    </a>

                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">RESERVE</span>
                    </a>

                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">MY RESERVATIONS</span>
                    </a>

                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">ADD CAR</span>
                    </a>

                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">DELETE CAR</span>
                    </a>

                      <div class="position-absolute bottom-0 end-0">
                        ICONS
                      </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar
