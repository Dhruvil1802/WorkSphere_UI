import React from "react";
import { useEffect, useState } from "react";

import "./sidemenu.css";

const local = "http://127.0.0.1:8000";
const host = "https://worksphere-smzq.onrender.com";

function SideMenu({ showProfile, setErrMsg, setIsErrorVisible, setToken }) {
  const [gereralDetails, setGeneralDetails] = useState([]);

  useEffect(() => {
    async function getGeneralDetails() {
      try {
        const res = await fetch(`${local}/employeeprofile/employeedetails/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.detail) {
          localStorage.removeItem("token");
          setToken(localStorage.getItem("token"));
        }
        console.log(data.detail);
        if (data.status.code === 200) {
          setGeneralDetails(data.data);
        }
        if (data.status.code === 400) {
          setErrMsg(data.status.message);
          setIsErrorVisible(true);
        }
      } catch {
        // localStorage.removeItem("keyName");
        setErrMsg("service unavailable");
        setIsErrorVisible(true);
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
