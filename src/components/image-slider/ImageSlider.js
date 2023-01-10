/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/style-prop-object */
<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> d1123f3e2b1a9b1176460468f3f61a489e010cee
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaTwitter, FaPinterest, FaFacebook,
} from 'react-icons/fa';
<<<<<<< HEAD
import { fetchCarsAsync } from '../../redux/cars/cars';
=======
import car, { getCars } from '../../redux/cars/car';
>>>>>>> d1123f3e2b1a9b1176460468f3f61a489e010cee

function ImageSlider() {
  const cars = useSelector((state) => state.car);

  const dispatch = useDispatch();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#97BF0F' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#97BF0F' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

<<<<<<< HEAD
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, []);

  console.log(cars);

=======
  useEffect(() => {
    dispatch(getCars());
  }, []);

>>>>>>> d1123f3e2b1a9b1176460468f3f61a489e010cee
  return (

    <div className="main-slider">
      <h2 className="fw-bold home-text"> LATEST MODELS</h2>
      <h4 className="text-muted fw-bold select-text ">Please Select Your Preferred Car Model</h4>

      <Slider {...settings}>
<<<<<<< HEAD
        {cars.map((car) => (
          <div key={car.id} className="card border-light" style="width: 15rem;">
            <img src={car.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">
                <Link to={`/cars/${car.id}`} state={car.name}>
                  {car.name}
                </Link>
              </h5>
              <p className="text-muted fw-bold text-center">................................</p>
              <p className="card-text">{car.model}</p>
              <p className="card-text">
                Description:
                <br />
                {car.description}
              </p>
              <div className="d-flex justify-content-between me-5 ms-5">
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                  <FaTwitter className="fa-brands" />
                </a>
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                  <FaFacebook className="fa-brands" />
                </a>
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                  <FaPinterest className="fa-brands" />
                </a>
              </div>
            </div>
          </div>
        ))}
=======
        {
          cars.map((car) => (
            <div className="card border-light" style="width: 15rem;" id={car.key}>
              <img src={car.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">{car.name}</h5>
                <p className="text-muted fw-bold text-center">................................</p>
                <p className="card-text">{car.description}</p>
                <div className="d-flex justify-content-between me-5 ms-5">
                  <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands" />
                  </a>
                  <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands" />
                  </a>
                  <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands" />
                  </a>
                </div>
              </div>
            </div>
          ))
          }
>>>>>>> d1123f3e2b1a9b1176460468f3f61a489e010cee
      </Slider>
    </div>
  );
}

export default ImageSlider;
