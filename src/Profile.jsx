import React from "react";
import "./Profile.css";
// import profileImg from "./assets/profile__img.jpg";
import profileImg from "./assets/banky.png";
import avatar from "./assets/avatar.png";

const Profile = () => {
  return (
    <section className="profile">
      <img id="profile_img" src={profileImg} alt="" />

      <div className="username">
        <h5 id="twitter">Talktobanky</h5>
      </div>
      {/* <div className="username">
        <h5 id="slack">Azeez Bankole</h5>
      </div> */}

      <button className="share">
        <img className="avatar_img" src={avatar} alt="share" />
      </button>
    </section>
  );
};

export default Profile;
