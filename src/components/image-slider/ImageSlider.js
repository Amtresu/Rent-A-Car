import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    FaTwitter, FaPinterest, FaFacebook
   } from 'react-icons/fa';

const ImageSlider = () => {

    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
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
          autoplaySpeed: 2000,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };

  return (

        <div className="main-slider">
        <h2 className="fw-bold home-text"> LATEST MODELS</h2>

        <Slider {...settings}>
        <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
            <div class="card border-light" style="width: 15rem;">
            <img src="https://shorturl.at/bHO23" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-between me-5 ms-5">
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaTwitter className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaFacebook className="fa-brands"/>
                    </a>
                    <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                    <FaPinterest className="fa-brands"/>
                    </a>
                </div>
            </div>
            </div>
        </Slider>
      </div>
  )
}

export default ImageSlider
