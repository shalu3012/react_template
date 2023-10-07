import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h1
        className="heading"
        style={{ fontSize: "40px", fontWeight: "600", lineHeight: "normal" }}
      >
        Student Special: Discounted rates on tropical getaways!
      </h1>
      <p className="footer-text">
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </p>
      <div className="footer-links">
        <div className="left-footer">
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Terms of Use</p>
          <p className="footer-link">Sales and Refunds</p>
          <p className="footer-link">Legal</p>
        </div>
        <div className="right-footer">
          <p className="footer-link">About</p>
          <p className="footer-link">Schedules</p>
          <p className="footer-link">Pricing</p>
          <p className="footer-link">Membership</p>
          <p className="footer-link">Joins</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
