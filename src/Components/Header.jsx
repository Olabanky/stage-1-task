import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="profile-container">
        <div className="profile-imgContainer">
          <img
            src="/assets/profile__img.jpg"
            alt="profile_img"
            id="profile__img"
          />
          <span className="camera-overlay-bg">
            <img src="/assets/camera.svg" className="camera" alt="camera" />
          </span>
        </div>
        <p id="twitter">Talktobanky</p>
        <p id="slack">Azeez Bankole</p>
      </div>
      <span className="share-tooltip">
        <img src="/assets/share-icon.svg" alt="share" className="share" />
        <img src="/assets/menu-icon.svg" alt="menu" className="menu" />
        <p className="tiptext">Share Link</p>
      </span>
    </div>
  );
};

export default Header;
