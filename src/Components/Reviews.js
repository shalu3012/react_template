import React from "react";
import avatar1 from "../Images/avatar (1).jpg";
import avatar2 from "../Images/avatar (2).jpg";
import avatar3 from "../Images/avatar (3).jpg";
const Reviews = () => {
  return (
    <div className="reviews">
      <div className="cards">
        <div className="card">
          <div className="avatar">
            <img src={avatar1} alt="" />
          </div>
          <div className="avatar-review">
            <h5 className="avatar-name">Jenny Wilson</h5>{" "}
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
        <div className="card">
          <div className="avatar">
            <img src={avatar2} alt="" />
          </div>
          <div className="avatar-review">
            <h5 className="avatar-name">Jenny Wilson</h5>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
        <div className="card">
          <div className="avatar">
            <img src={avatar3} alt="" />
          </div>
          <div className="avatar-review">
            <h5 className="avatar-name">Jenny Wilson</h5>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
      </div>

      <div className="section-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="168"
          height="168"
          viewBox="0 0 168 168"
          fill="none"
          style={{ marginTop: "48px", marginLeft: "200px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z"
            fill="#87CC81"
            fillOpacity="0.2"
          />
        </svg>

        <div className="headings">
          <h2
            className="heading"
            style={{ fontSize: "40px", fontWeight: "600" }}
          >
            Tropical Adventure
          </h2>
          <h2
            className="heading"
            style={{ fontSize: "30px", fontWeight: "400" }}
          >
            For Students.
          </h2>
          <h6 className="sub-heading">
            Student Tropical Vacation: Relax and Recharge
          </h6>
        </div>
        <ul className="section-info-points">
          <li className="section-info-point">Lorem ipsum dolor sit amet</li>
          <li className="section-info-point">Massa quis natoque sit quam</li>
          <li className="section-info-point">Eros non pellentesque elit</li>
          <li className="section-info-point">tortor id euismod habitant</li>
          <li className="section-info-point">Sed suspendisse id in ultrices</li>
        </ul>
        <button className="btn btn-coloured" style={{ marginTop: "60px" }}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
