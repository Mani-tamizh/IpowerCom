import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../OurEquip/OurEquip.css'; 
import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";
import './WeServe.css';

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <TiChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <TiChevronLeft />
    </div>
  );
};

const WeServe = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: 'Automotive',
      image: 'https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Precision cutting for vehicle components and custom fabrication for body panels and frames.',
    },
    {
      title: 'Construction',
      image: 'https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
      description: 'Accurate steel and metal cutting for structural integrity and custom metal parts for building frameworks.',
    },
    {
      title: 'Aerospace',
      image: 'https://img.freepik.com/free-photo/aircraft-rest-hangar-lined-up-like-steel-birds_157027-3856.jpg?t=st=1728882760~exp=1728886360~hmac=ffc3222e53b9f610d1cce560491920148b267812e49497ea115a36f84d9cc3e9&w=900',
      description: 'High-precision cutting for aircraft components and lightweight and durable material processing.',
    },
    {
      title: 'Manufacturing',
      image: 'https://img.freepik.com/premium-photo/technician-working-outdoor-air-conditioning-unit_1297251-4366.jpg?w=740',
      description: 'Streamlined production of metal components and custom tooling and part design.',
    },
  ];

  return (
    <div className='serve'>
      <h1>Industries We Serve</h1>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-slide">
            <div className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeServe;
