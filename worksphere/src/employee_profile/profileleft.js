import React from "react";
import { useEffect, useState } from "react";

import "./profileleft.css";

const local = "http://127.0.0.1:8000";
const host = "https://worksphere-smzq.onrender.com";

function ProfileLeft({ setErrMsg, setIsErrorVisible }) {
  const [generalDetails, setGeneralDetails] = useState([]);

  useEffect(() => {
    async function getAllDetails() {
      try {
        const res = await fetch(`${local}/employeeprofile/employeedetails/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        // setAllDetails();
        setGeneralDetails(data.data);
      } catch {
        setErrMsg("service unavailable");
        setIsErrorVisible(true);
      }
    }
    getAllDetails();
  }, []);
  return (
    <div className="profile-left">
      <div className="sub-profile-left">
        <h3 className="user-profile">USER PROFILE</h3>
        <h1 className="profile-page-name">
          {generalDetails[0]?.employee_id?.employee_name}
        </h1>

        <img
          src={generalDetails[0]?.profile_pic}
          alt="Profile"
          className="profile-page-pic"
        />

        <div className="profile-page-info">
          <table className="profile-table">
            <tbody>
              <tr>
                <td>
                  <strong>Gender</strong>
                </td>
                <td>{":   "}</td>
                <td>{generalDetails[0]?.gender}</td>
              </tr>
              <tr>
                <td>
                  <strong>Age</strong>
                </td>
                <td>{":   "} </td>
                <td>{generalDetails[0]?.age}</td>
              </tr>
              <tr>
                <td>
                  <strong>Address</strong>
                </td>
                <td>{":   "}</td>
                <td>{generalDetails[0]?.address}</td>
              </tr>
              <tr>
                <td>
                  <strong>Background</strong>
                </td>
                <td>{":   "}</td>
                <td>{generalDetails[0]?.background}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeft;
