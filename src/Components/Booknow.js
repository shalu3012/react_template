import React from "react";
import booknow_student from "../Images/booknow_student.png";

const Booknow = () => {
  return (
    <div className="booknow">
      <div className="image-section">
        <div className="image-background-circle"></div>
        <div className="rectangle"></div>
        <div className="image">
          <img src={booknow_student} width="540px" height="650px" alt="" />
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

      <div className="card">
        <div className="card-header">
          <h4
            className="heading"
            style={{
              fontSize: "33px",
              fontWeight: "900",
              lineHeight: "normal",
            }}
          >
            Book now
          </h4>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="card-body">
          <form action="#" className="book-now-form">
            <div className="form-control">
              <label htmlFor="" className="form-label">
                CITY
              </label>
              <input
                type="text"
                className="form-inp"
                placeholder="Placehholder"
              />
            </div>
            <div className="row">
              <div className="form-control">
                <label htmlFor="" className="form-label">
                  arrival
                </label>
                <input
                  type="text"
                  className="form-inp"
                  placeholder="10 October"
                />
              </div>
              <div className="form-control">
                <label htmlFor="" className="form-label">
                  departure
                </label>
                <input
                  type="text"
                  className="form-inp"
                  placeholder="11 October"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-control">
                <label htmlFor="" className="form-label">
                  star
                </label>
                <div className="input">
                  <span className="input-number-decrement">–</span>
                  <input className=" input-number" type="text" />
                  <span className="input-number-increment">+</span>
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="" className="form-label">
                  room
                </label>
                <div className="input">
                  <span className="input-number-decrement">–</span>
                  <input className=" input-number" type="text" />
                  <span className="input-number-increment">+</span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="btn btn-coloured">BOOK NOW</div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
