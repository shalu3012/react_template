import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className={`navbar navbar-menu ${isOpen ? "active" : ""}`}>
        <ul className="nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Schedules</li>
          <li className="nav-item">Membership</li>
          <li className="nav-item">Pricing</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn btn-plain">Offers</button>
          <button className="btn btn-coloured">Courses</button>
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
