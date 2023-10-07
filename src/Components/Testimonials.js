import React from "react";
import testimonialimg1 from "../Images/testimonial (1).jpg";
import testimonialimg2 from "../Images/testimonial (2).jpg";
import testimonialimg3 from "../Images/testimonial (3).jpg";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-heading">
        <h1 className="heading" style={{ fontSize: "40px", fontWeight: "500" }}>
          Testimonials
        </h1>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="card-img">
            <img src={testimonialimg3} alt="image" />
          </div>
          <div className="name">
            <h1 className="name-text">Corey Korsgaard</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="2"
            viewBox="0 0 126 2"
            fill="none"
          >
            <path d="M0 1H126" stroke="#A0CD9E" />
          </svg>
          <div className="review">
            <p className="review-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-img">
            <img src={testimonialimg1} alt="image" />
          </div>
          <div className="name">
            <h1 className="name-text">Jakob Aminoff</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="2"
            viewBox="0 0 126 2"
            fill="none"
          >
            <path d="M0 1H126" stroke="#A0CD9E" />
          </svg>
          <div className="review">
            <p className="review-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-img">
            <img src={testimonialimg2} alt="image" />
          </div>
          <div className="name">
            <h1 className="name-text">Carla Press</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="2"
            viewBox="0 0 126 2"
            fill="none"
          >
            <path d="M0 1H126" stroke="#A0CD9E" />
          </svg>
          <div className="review">
            <p className="review-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
