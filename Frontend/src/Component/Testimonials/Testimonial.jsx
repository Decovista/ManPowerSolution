import React, { useState } from 'react';
import './Testimonial.css';
import assets from '../../../public/assets';

const testimonials = [
  { Profile:assets.testimonial1, name: "Ravina Kumli", message: "This course changed my life!" },
  { Profile:assets.testimonial2, name: "Ayesha Khan", message: "Amazing support and well-structured content." },
  { Profile:assets.testimonial3, name: "Priya Deo", message: "Very practical and useful training." },
  { Profile:assets.testimonial4, name: "Pratik Sen", message: "Highly recommended for job seekers." },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 1;

  const next = () => {
    setIndex((prev) => (prev + visibleCards < testimonials.length ? prev + visibleCards : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev - visibleCards >= 0 ? prev - visibleCards : testimonials.length - visibleCards));
  };

  const visibleTestimonials = testimonials.slice(index, index + visibleCards);

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-title">What Our Students Say</h2>
      <div className="slider-controls">
        <button onClick={prev}>&#8592;</button>
        <div className="testimonial-wrapper">
          {visibleTestimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="profile">
                <img src={t.Profile} alt="" />
              </div>
              <p>"{t.message}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
        <button onClick={next}>&#8594;</button>
      </div>
    </div>
  );
};

export default Testimonial;
