import React from "react";
import { useEffect, useState } from "react";

import "./sidemenu.css";

function SideMenu({ showProfile }) {
  const [gereralDetails, setGeneralDetails] = useState([]);

  useEffect(() => {
    async function getGeneralDetails() {
      const res = await fetch(
        "http://127.0.0.1:8000/employeeprofile/employeedetails/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.status.code === 200) {
        setGeneralDetails(data.data);
      }
    }
    getGeneralDetails();
  }, []);

  return (
    <>
      <div className="profile-container">
        <img
          src={gereralDetails[0]?.profile_pic}
          alt="Profile"
          className="profile-pic"
        />

        <div className="profile-name">
          {gereralDetails[0]?.employee_id.employee_name}
        </div>
      </div>
      <ul className="menu">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button onClick={showProfile}>Profile</button>
        </li>
        <li>
          <button>Rewards</button>
        </li>
        <li>
          <button>Achievements</button>
        </li>
        <li>
          <button>Tasks</button>
        </li>
        <li>
          <button>Payroll</button>
        </li>
        <li>
          <button>Leaves</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </>
  );
}

export default SideMenu;
