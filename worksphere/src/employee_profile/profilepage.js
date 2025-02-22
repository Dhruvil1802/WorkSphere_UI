import React from "react";
import { useEffect, useState } from "react";

import "./profilepage.css";

const EmployeeProfile = () => {
  // const [allDetails, setAllDetails] = useState([]);
  const [gereralDetails, setGeneralDetails] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    async function getAllDetails() {
      const res = await fetch(
        "http://127.0.0.1:8000/employeeprofile/getemployeealldata/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      // setAllDetails();
      setGeneralDetails(data.data["employee_details"]);
      setEducation(data.data["employee_education"]);
      setSkills(data.data["employee_skills"]);
      setPreferences(data.data["employee_preferences"]);
      setExperiences(data.data["employee_experiences"]);
      setAchievements(data.data["employee_achievements"]);
      setCertifications(data.data["employee_certifications"]);
    }
    getAllDetails();
  }, []);

  // delete education
  async function deleteEducation(Id) {
    const res = await fetch(
      `http://127.0.0.1:8000/employeeprofile/employeeeducation/${Id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.status.code === 200) {
      const res = await fetch(
        `http://127.0.0.1:8000/employeeprofile/employeeeducation/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setEducation(data.data);
    }
  }

  // delete certification
  async function deleteCertification(Id) {
    const res = await fetch(
      `http://127.0.0.1:8000/employeeprofile/employeecertifications/${Id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.status.code === 200) {
      const res = await fetch(
        `http://127.0.0.1:8000/employeeprofile/employeecertifications/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setCertifications(data.data);
    }
  }

  // delete skills
  async function deleteSkills(Id) {
    const res = await fetch(
      `http://127.0.0.1:8000/employeeprofile/employeeskills/${Id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.status.code === 200) {
      const res = await fetch(
        `http://127.0.0.1:8000/employeeprofile/employeeskills/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setSkills(data.data);
    }
  }

  // delete achievements
  async function deleteAchievements(Id) {
    const res = await fetch(
      `http://127.0.0.1:8000/employeeprofile/employeeachievements/${Id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.status.code === 200) {
      const res = await fetch(
        `http://127.0.0.1:8000//employeeprofile/employeeachievements/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setAchievements(data.data);
    }
  }
  // delete preference
  async function deletePreference(Id) {
    const res = await fetch(
      `http://127.0.0.1:8000/employeeprofile/employeepreferences/${Id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.status.code === 200) {
      const res = await fetch(
        `http://127.0.0.1:8000/employeeprofile/employeepreferences/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setPreferences(data.data);
    }
  }

  // delete experience
  async function deleteExperience(Id) {
    const res = await fetch(
      `http://127.0.0.1:8000/employeeprofile/employeeexperiences/${Id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.status.code === 200) {
      const res = await fetch(
        `http://127.0.0.1:8000/employeeprofile/employeeexperiences/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setExperiences(data.data);
    }
  }

  return (
    <>
      <div className="profile-page-container">
        {/* Left Section - General details */}

        <div className="profile-left">
          <div className="sub-profile-left">
            <h3 className="user-profile">USER PROFILE</h3>
            <h1 className="profile-page-name">
              {gereralDetails[0]?.employee_id?.employee_name}
            </h1>

            <img
              src={gereralDetails[0]?.profile_pic}
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
                    <td>{gereralDetails[0]?.gender}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Age</strong>
                    </td>
                    <td>{":   "} </td>
                    <td>{gereralDetails[0]?.age}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Address</strong>
                    </td>
                    <td>{":   "}</td>
                    <td>{gereralDetails[0]?.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Background</strong>
                    </td>
                    <td>{":   "}</td>
                    <td>{gereralDetails[0]?.background}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="profile-right">
          <div className="profile-details">
            <div className="section">
              <h3 className="section-title">Education</h3>
              <div className="sub-section">
                <div className="education-container">
                  {education.map((e, index) => (
                    <span key={index} className="education-item">
                      {e.education}
                      <button
                        className="cross-button"
                        onClick={() => deleteEducation(e.employee_education_id)}
                      ></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Experience</h3>
              <div className="sub-section">
                <div className="experience-container">
                  {experiences.map((e, index) => (
                    <>
                      <div className="experience-details">
                        {e.experience_institute} ({e.experience} years)
                      </div>
                      <div className="experience-item">
                        <div
                          className="experience-bar"
                          style={{
                            width: `${e.experience * 5}%`,
                          }}
                        ></div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Certifications</h3>
              <div className="sub-section">
                <div className="certifications-container">
                  {certifications.map((c, index) => (
                    <span key={index} className="certifications-item">
                      {c.certificates}
                      <button
                        className="cross-button"
                        onClick={() =>
                          deleteCertification(c.employee_certification_id)
                        }
                      ></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Preferences</h3>
              <div className="sub-section">
                <div className="preferences-container">
                  {preferences.map((p, index) => (
                    <span key={index} className="preferences-item">
                      {p.preferences}
                      <button
                        className="cross-button"
                        onClick={() =>
                          deletePreference(p.employee_preferences_id)
                        }
                      ></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Skills</h3>
              <div className="sub-section">
                <div className="skills-container">
                  {skills.map((s, index) => (
                    <span key={index} className="skills-item">
                      {s.skills}
                      <button
                        className="cross-button"
                        onClick={() => deleteSkills(s.employee_skills_id)}
                      ></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Achievements</h3>
              <div className="sub-section">
                <div className="achievements-container">
                  {achievements.map((a, index) => (
                    <span key={index} className="achievements-item">
                      {a.achievements}
                      <button
                        className="cross-button"
                        onClick={() =>
                          deleteAchievements(a.employee_achievements_id)
                        }
                      ></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
