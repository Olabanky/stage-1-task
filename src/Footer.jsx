import React from "react";
import zuriImg from "./assets/Zuri.Internship_Logo.png";
import I4G from "./assets/I4G.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <img id="zuriImg" src={zuriImg} alt="" />
          <span id="text">HNG Internship 9 Frontend Task</span>
          <img id="i4g" src={I4G} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
