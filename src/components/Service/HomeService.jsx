import React from 'react';
import Slider from 'react-slick';// Create a separate CSS file for styling
import './HomeService.css'
const services = [
  {
    title: 'Mobile Welding',
    description: 'It is a long established fact that a reader will be distracted by the...',
    imageUrl: 'https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/05/s-1.png',
    icon: 'https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/05/welding-1-1.png',
  },
  {
    title: 'Steel Welding',
    description: 'It is a long established fact that a reader will be distracted by the...',
    imageUrl: 'https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/05/s-2.png',
    icon: 'https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/05/weld.png',
  },
  {
    title: 'Metal Works',
    description: 'It is a long established fact that a reader will be distracted by the...',
    imageUrl: 'https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/05/s-4.png',
    icon: 'https://metaliq-wordpress.technowebstore.com/wp-content/uploads/2024/05/welding.png',
  },
  // Add more services as needed
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="service-slider1">
      <h2>Services We're Providing To Our Customers</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card1" >
            <div className="image-container1">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="content1">
              <div className="icon1">
                <img src={service.icon} alt="Service Icon1" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <p className="view-more">
        See More Metalic Services Click The Button <a href="/more-services">View More Service</a>
      </p>
    </div>
  );
};

export default ServiceSlider;