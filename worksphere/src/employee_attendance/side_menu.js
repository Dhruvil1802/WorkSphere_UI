import React from "react";
import "./sidemenu.css";

function SideMenu() {
  return (
    <>
      <div className="profile-container">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-name">John Doe</div>
      </div>
      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Profile</a>
        </li>
        <li>
          <a href="#about">Rewards</a>
        </li>
        <li>
          <a href="#contact">Achievements</a>
        </li>
        <li>
          <a href="#about">Tasks</a>
        </li>
        <li>
          <a href="#contact">Payroll</a>
        </li>
        <li>
          <a href="#contact">Leaves</a>
        </li>
        <li>
          <a href="#contact">Logout</a>
        </li>
      </ul>
    </>
  );
}

export default SideMenu;
