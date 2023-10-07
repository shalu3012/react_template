import React from "react";
import home_student from "../Images/home_student.png";
const Home = () => {
  return (
    <div className="home">
      <div className="left-home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          style={{ marginBottom: "28px" }}
        >
          <path
            d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z"
            fill="#BE554B"
          />
        </svg>
        <div className="headings">
          <h4 className="sub-heading">Discover the beauty of the tropics</h4>

          <h1 className="heading">Tropical Destinations </h1>
          <h1 className="heading" style={{ fontWeight: 500 }}>
            For Student
          </h1>
        </div>

        <p className="home-text">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{ marginLeft: "595px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.83352 10.3335C8.76652 10.3335 10.3335 8.76652 10.3335 6.83352C10.3335 4.90053 8.76652 3.33352 6.83352 3.33352C4.90053 3.33352 3.33352 4.90053 3.33352 6.83352C3.33352 8.76652 4.90053 10.3335 6.83352 10.3335Z"
            fill="#505C59"
          />
        </svg>
        <button className="btn btn-coloured">SIGN UP</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          style={{ marginLeft: "400px" }}
        >
          <path
            d="M21 7.34351e-06C21 2.75777 20.4568 5.48852 19.4015 8.03636C18.3461 10.5842 16.7993 12.8992 14.8492 14.8492C12.8992 16.7993 10.5842 18.3461 8.03635 19.4015C5.48851 20.4568 2.75776 21 0 21L3.67176e-06 3.67176e-06L21 7.34351e-06Z"
            fill="#F8E27E"
          />
        </svg>
      </div>
      <div className="right-home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{ marginTop: "100px", position: "absolute" }}
        >
          <path
            d="M14 2.03465e-06C14 1.83851 13.6379 3.65901 12.9343 5.35757C12.2307 7.05613 11.1995 8.59948 9.89949 9.8995C8.59947 11.1995 7.05612 12.2308 5.35756 12.9343C3.65901 13.6379 1.8385 14 -3.8147e-06 14L-4.13185e-07 -4.13186e-07L14 2.03465e-06Z"
            fill="#87CC81"
          />
        </svg>

        <div className="image-section">
          <div className="image-background-full-circle"></div>
          <div className="image">
            <img
              src={home_student}
              className="home-student-img"
              width="541px"
              height="735px"
              alt=""
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="113"
            viewBox="0 0 113 113"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.5 113C87.7041 113 113 87.7041 113 56.5C113 25.2959 87.7041 0 56.5 0C25.2959 0 0 25.2959 0 56.5C0 87.7041 25.2959 113 56.5 113ZM56.5 87.4405C73.588 87.4405 87.4405 73.588 87.4405 56.5C87.4405 39.412 73.588 25.5595 56.5 25.5595C39.412 25.5595 25.5595 39.412 25.5595 56.5C25.5595 73.588 39.412 87.4405 56.5 87.4405Z"
              fill="#F8E27E"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          style={{ marginLeft: "517px", marginTop: "54px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM16.5957 25.0957C21.2901 25.0957 25.0957 21.2901 25.0957 16.5957C25.0957 11.9013 21.2901 8.0957 16.5957 8.0957C11.9013 8.0957 8.0957 11.9013 8.0957 16.5957C8.0957 21.2901 11.9013 25.0957 16.5957 25.0957Z"
            fill="#87CC81"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;
