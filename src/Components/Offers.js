import React from "react";
import offers_student from "../Images/offers-student.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="section-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          style={{ marginLeft: "330px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z"
            fill="#F8E27E"
            fillOpacity="0.25"
          />
        </svg>

        <div className="headings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M8.61466e-06 38C9.48718e-06 33.0098 0.982913 28.0684 2.89259 23.458C4.80227 18.8476 7.60133 14.6586 11.13 11.1299C14.6586 7.60131 18.8477 4.80225 23.458 2.89257C28.0684 0.98289 33.0098 -7.73478e-06 38 -6.64413e-06L38 13.4895C34.7812 13.4895 31.594 14.1235 28.6202 15.3552C25.6465 16.587 22.9445 18.3924 20.6685 20.6684C18.3924 22.9445 16.587 25.6465 15.3552 28.6202C14.1235 31.594 13.4895 34.7812 13.4895 38L8.61466e-06 38Z"
              fill="#BE554B"
            />
          </svg>
          <h4 className="sub-heading">Get 20% off for student</h4>
          <h2
            className="heading"
            style={{ fontSize: "40px", fontWeight: "600" }}
          >
            Student discounts available.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              style={{ marginLeft: "30px", marginBottom: "15px" }}
            >
              <path
                d="M26 25.5C26 22.1513 25.3404 18.8354 24.0589 15.7416C22.7774 12.6478 20.8991 9.83666 18.5312 7.46877C16.1633 5.10088 13.3522 3.22256 10.2584 1.94107C7.16462 0.659571 3.8487 -5.19044e-06 0.499994 -4.45856e-06L0.499998 9.05215C2.65996 9.05215 4.79877 9.47759 6.79432 10.3042C8.78986 11.1307 10.6031 12.3423 12.1304 13.8696C13.6577 15.3969 14.8692 17.2101 15.6958 19.2057C16.5224 21.2012 16.9478 23.34 16.9478 25.5L26 25.5Z"
                fill="#BE554B"
              />
            </svg>
          </h2>

          <h6 className="sub-heading">Get ready for some fun in the sun!</h6>
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
      <div className="image-section">
        <div className="image">
          <div className="rectangle1"></div>
          <div className="rectangle2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="422"
            height="304"
            viewBox="0 0 422 304"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.0366211 163.128C31.1864 245.46 110.757 304 204 304C324.398 304 422 206.398 422 86C422 55.4828 415.729 26.4302 404.406 0.0603027L0.0366211 163.128Z"
              fill="#F8E27E"
            />
          </svg>
          <img src={offers_student} alt="image" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="168"
            viewBox="0 0 168 168"
            fill="none"
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "485px",
              left: "269px",
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z"
              fill="#87CC81"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Offers;
