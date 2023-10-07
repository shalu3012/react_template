import React, { useRef } from "react";
import option_icon from "../Images/option_icon.jpg";

const Destinations = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
  };
  return (
    <div className="destinations">
      <div className="desination-heading heading">
        <h1 className="heading" style={{ fontSize: "40px", fontWeight: "500" }}>
          Our Destinations
        </h1>
      </div>
      <div className="destination-cards " ref={containerRef}>
        <div className="destination-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url( https://s3-alpha-sig.figma.com/img/a217/a591/99b218a29883685eb5cf8946b1a016ba?Expires=1697414400&Signature=iJEA9XxvOIkTg3FuqYDYYzstwgPJ1yO4Rs0pvsR28UFlXHuKuzMG14c0eUHp9vLPT2HbjOQXcmMfKwwChTXJSoyoE3CB8cqJMRXovUGVuNiLVi6lDlzqcOXwp3u8lhKwKMid-R51lPZB7O6blMv~blw20HurbCViZ6LdciuNfzW4RE2YDgmEleZF7jO6knZW~J1WJtojMcipgksL7g7Yd2~TYDXIV~iVwYaZxdBq-ETXM-KCFP6qaU~fPwloEotDAYwEgzTLiBeTwyEfg5WMjP53SKMfGgwx5tLh1GLbG56vUhR-QxEPnuPiIj2TErEi0gh11vTMagoMUzasiRK9oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
            }}
          >
            <button className="rating-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 4L12.472 8.93691L18 9.73344L14 13.5741L14.944 19L10 16.4369L5.056 19L6 13.5741L2 9.73344L7.528 8.93691L10 4Z"
                  fill="#EBD402"
                  stroke="#EBD402"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h6> 4.8</h6>
            </button>
            <button className="exclusive-button">EXCLUSIVE</button>
          </div>
          <div className="card-body">
            <h5 className="destination-name">Harvard University</h5>
          </div>
          <div className="card-footer">
            <h6 className="location-name">Cambridge, Massachusetts, UK</h6>
            <img src={option_icon} alt="options" />
          </div>
        </div>
        <div className="destination-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url(https://s3-alpha-sig.figma.com/img/6df4/1605/981a67271e99db05ef80f9a44adfc731?Expires=1697414400&Signature=Qz3iWonph2HXmxkoACbxz8z9s6orPO57Mqyc~YUNWxgnSlDob3AJd9R4hjtSexmxNo5eSTTMZSWZgD-yxaHOtu2Ek7klfyZuA6ONHK~-k~9L54xUNMvTBXSMNYKETQSWUoULGIp~LdzNpwkveGYdTKqWlHVBt9oy6U74VwsQGb2msIUcgtGhk6muPFjFSZY6DzyR0dkkJSj8TikBv5W~HOckx5l5e-dyz9Qlxpui8XACCus18~nhEqwXUAgngh1jZpfrTvNyu8ZDlORp8MxHlMoQVtuHIP3NvQJ3e948RQSu0TF9Uy~7Ue38dPlwjKsfTxR0NS0-rrmuguJTMGivIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
            }}
          >
            <button className="rating-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 4L12.472 8.93691L18 9.73344L14 13.5741L14.944 19L10 16.4369L5.056 19L6 13.5741L2 9.73344L7.528 8.93691L10 4Z"
                  fill="#EBD402"
                  stroke="#EBD402"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h6> 4.8</h6>
            </button>
            <button className="exclusive-button">EXCLUSIVE</button>
          </div>
          <div className="card-body">
            <h5 className="destination-name">Oxford University</h5>
          </div>
          <div className="card-footer">
            <h6 className="location-name">Oxford, England</h6>
            <img src={option_icon} alt="options" />
          </div>
        </div>
        <div className="destination-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url(https://s3-alpha-sig.figma.com/img/d024/fa95/f3edc7f29200e31fe1eea04ac694603c?Expires=1697414400&Signature=H~xH5~RL5oBWtlsOXDDY~a38aeQmmdDPCVWGaVQ2MvtYQmlX0ezyvTrZ5CHfTDHQNUqI8TPlkkOnloFNyyPIfMb8iz1z1dUavCDLhEfo-hQxAJOahzBHS3168a2Lbt8hKXBB57OoKePHZ2bueYfZshumlbMdc6gPiqodhHoT~8l6r3CwwaZn1K9T1QG04UdzVZX5JuuMIToBZz~J4b-x~xyG163Fm~LS6vdPy8Q3vKBdyBtGk9s~sMkVnF1Vvg5ugVcvHtlN3gAf-ZkjJ9Lmb--vh0-8y2jz5MGvSYHgz0YtwAiTF6t5TmAblFNaMWyi0S6FCooiGFGN8yQuALtsgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
            }}
          >
            <button className="rating-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 4L12.472 8.93691L18 9.73344L14 13.5741L14.944 19L10 16.4369L5.056 19L6 13.5741L2 9.73344L7.528 8.93691L10 4Z"
                  fill="#EBD402"
                  stroke="#EBD402"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h6> 4.8</h6>
            </button>
            <button className="exclusive-button">EXCLUSIVE</button>
          </div>
          <div className="card-body">
            <h5 className="destination-name">Stanford University</h5>
          </div>
          <div className="card-footer">
            <h6 className="location-name">Stanford, California</h6>
            <img src={option_icon} alt="options" />
          </div>
        </div>
        <div className="destination-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url(https://s3-alpha-sig.figma.com/img/25ba/af09/c4e68d6921d867e4fdc78d838455b22d?Expires=1697414400&Signature=JSmkUYi-mVUyH7M8Y5Bq5-s-MhOjgYTJezcXfabssgE1L7Wx4pEGceF~5pAMhbfrgqZKRn-t2~KS2V~cDmnuymhU1~MgZqdMYuL9cRTtHXUl1OA0NxrlXKz1MJ1rYwHKxGxr8G8NL9VlIly-dKU5-5S-pY8483JMa4HnDAyPm2hcdpzV6IP62jqtv6RC4Cus47ZfQ9ueYYS~zyoJm1JxSj-MiQjdWElZfKbT0Bn4TZ7jPW7GC23VGxdrRfUrcedG4~4-cMAjHH~IWonWv3yCUEqJ1xHG3hqnXNl4WOXVMOjtRCt1ScIlVcuLWmvpiOdDaoht98Z7MjgrwIkkZBJNfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
            }}
          >
            <button className="rating-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 4L12.472 8.93691L18 9.73344L14 13.5741L14.944 19L10 16.4369L5.056 19L6 13.5741L2 9.73344L7.528 8.93691L10 4Z"
                  fill="#EBD402"
                  stroke="#EBD402"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h6> 4.8</h6>
            </button>
            <button className="exclusive-button">EXCLUSIVE</button>
          </div>
          <div className="card-body">
            <h5 className="destination-name">
              Nanyang Technological University
            </h5>
          </div>
          <div className="card-footer">
            <h6 className="location-name">Nanyang Ave, Singapura</h6>
            <img src={option_icon} alt="options" />
          </div>
        </div>
      </div>
      <div className="paginations">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          onClick={scrollLeft}
        >
          <path
            d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z"
            fill="#262626"
          />
        </svg>
        <p className="image-no">
          2 <span className="total-images">/140</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          onClick={scrollRight}
        >
          <path
            d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z"
            fill="#F27A44"
          />
        </svg>
      </div>
    </div>
  );
};

export default Destinations;
