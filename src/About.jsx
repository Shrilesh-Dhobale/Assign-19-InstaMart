import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About InstaMart</h1>
      <p>InstaMart is your go-to platform for quick and fresh grocery deliveries. We bring the store to your doorstep with a wide variety of products, from vegetables to snacks, ensuring quality and convenience.</p>
      <div className="about-features">
        <div className="feature">
          <h3>Fresh Products</h3>
          <p>We source the freshest ingredients directly from local farms.</p>
        </div>
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Get your groceries delivered in minutes, not hours.</p>
        </div>
        <div className="feature">
          <h3>Wide Selection</h3>
          <p>Choose from a vast array of categories including vegetables, dairy, snacks, and beverages.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
