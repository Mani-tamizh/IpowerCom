import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Intro/variants';
import './OurEquip.css'; 

const OurEquip = () => {
  const services = [
    {
      title: 'Precision CNC Plasma Cutting',
      description: 'Our CNC-enabled plasma cutters ensure accurate and consistent results, perfect...',
      image: 'https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-103719.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
    },
    {
      title: 'High-Speed Cutting Solutions',
      description: 'Boost productivity with our high-speed plasma cutting machines. Designed for rapid operation...',
      image: 'https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-106141.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
    },
    {
      title: 'Automated Accuracy Control',
      description: 'Our machinery features automated control systems for precise adjustments...',
      image: 'https://img.freepik.com/premium-photo/cutting-metal-with-plasma-equipment_731790-107790.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid-rr-similar',
    },
  ];

  return (
    <motion.div className="our-equip-container" variants={fadeIn} initial="hidden" animate="show">
      <h1>Our Equipment</h1>
      <div className='equip'>
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
       ))}
      </div>
    </motion.div>
  );
};

export default OurEquip;
