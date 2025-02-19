import React from "react";
import { useEffect, useState } from "react";

import "./sidemenu.css";

function SideMenu({ showSplitBackground, showProfile }) {
  const [gereralDetails, setGeneralDetails] = useState([]);

  useEffect(() => {
    async function getGeneralDetails() {
      const res = await fetch(
        "http://127.0.0.1:8000/employeeprofile/employeedetails/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImVtcGxveWVlX2lkIjo1LCJlbWFpbCI6ImVtcGxveWVlNUBnbWFpbC5jb20iLCJleHAiOjE3NDIyODcwOTV9.HZz4oiuvvEmXEazI_y0L4D8v0NIYyogsD8ABNluBwkIX_s0EH1vAkRDHDqWOHMQqEn1BER-62joHn48Vi2_Q7g`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      setGeneralDetails(data.data);

      console.log("generalDetails", gereralDetails);
    }
    getGeneralDetails();
  }, []);

  useEffect(() => {
    console.log(gereralDetails);
  }, [gereralDetails]);

  return (
    <>
      <div className="profile-container">
        <div>
          <img
            src={gereralDetails[0]?.profile_pic}
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="profile-name">
          {gereralDetails[0]?.employee_id.employee_name}
        </div>
      </div>
      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#profile" onClick={showProfile}>
            Profile
          </a>
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
