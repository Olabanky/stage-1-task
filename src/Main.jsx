import React from "react";
import "./Main.css";
import Profile from "./Profile";
import Link from "./Link";

const Main = () => {
  return (
    <div className="main_section">
      <div className="content">
        <Profile />
        <Link />
      </div>
    </div>
  );
};

export default Main;
