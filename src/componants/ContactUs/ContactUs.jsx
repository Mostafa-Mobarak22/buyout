import React from 'react';
import './ContactUs.css'; // Import your CSS file

function ContactUs() {
  return (
    <section className="section contact" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title">Have a Question? Get in Touch!</h2>
        <p className="section-text">
          A great platform to buy, sell, and rent your properties without any agents or commissions.
        </p>
        <button className="btn btn-primary">
          <ion-icon name="call-outline"></ion-icon>
          <span className="span">Contact us</span>
        </button>
      </div>
    </section>
  );
}

export default ContactUs;
