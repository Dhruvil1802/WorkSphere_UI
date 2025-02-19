import React from "react";
import { useEffect, useState } from "react";

import "./profilepage.css";

const EmployeeProfile = () => {
  const [allDetails, setAllDetails] = useState([]);
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
            Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImVtcGxveWVlX2lkIjo1LCJlbWFpbCI6ImVtcGxveWVlNUBnbWFpbC5jb20iLCJleHAiOjE3NDIyODcwOTV9.HZz4oiuvvEmXEazI_y0L4D8v0NIYyogsD8ABNluBwkIX_s0EH1vAkRDHDqWOHMQqEn1BER-62joHn48Vi2_Q7g`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log("dataaaaaaaaaaaaaaaaa", data.data["employee_achievements"]);
      // setAllDetails();
      setGeneralDetails(data.data["employee_details"]);
      setEducation(data.data["employee_education"]);
      setSkills(data.data["employee_skills"]);
      setPreferences(data.data["employee_preferences"]);
      setExperiences(data.data["employee_experiences"]);
      setAchievements(data.data["employee_achievements"]);
      setCertifications(data.data["employee_certifications"]);
      console.log("state hereeee", allDetails);
    }
    getAllDetails();
  }, []);

  useEffect(() => {
    console.log(
      gereralDetails,
      education,
      skills,
      preferences,
      experiences,
      achievements,
      certifications
    );
  }, [
    gereralDetails,
    education,
    skills,
    preferences,
    experiences,
    achievements,
    certifications,
  ]);

  return (
    <>
      <div className="profile-container">
        {/* Left Section - General details */}
        <div className="profile-left">
          <img
            src={gereralDetails[0]?.profile_pic}
            alt="Profile"
            className="profile-pic"
          />
          <h3 className="profile-name">
            {gereralDetails[0]?.employee_id?.employee_name}
          </h3>
          <div className="profile-info">
            <p>
              <strong>Gender:</strong> {gereralDetails[0]?.gender}
            </p>
            <p>
              <strong>Age:</strong> {gereralDetails[0]?.age}
            </p>
            <p>
              <strong>Address:</strong> {gereralDetails[0]?.address}
            </p>
            <p>
              <strong>Background:</strong> {gereralDetails[0]?.background}
            </p>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="profile-right">
          <h2 className="main-section-title">Employee Information</h2>

          <div className="profile-details">
            <div className="section">
              <h3 className="section-title">Education</h3>
              <div className="education-container">
                {education.map((e, index) => (
                  <span key={index} className="education-item">
                    {e.education}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Preferences</h3>
              <div className="preferences-container">
                {preferences.map((p, index) => (
                  <span key={index} className="preferences-item">
                    {p.preferences}
                  </span>
                ))}
              </div>
              {/* <button class="add-button">Add</button> */}
            </div>

            <div className="section">
              <h3 className="section-title">Skills</h3>
              <div className="skills-container">
                {skills.map((s, index) => (
                  <span key={index} className="skills-item">
                    {s.skills}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Experience</h3>
              <div className="experience-container">
                {experiences.map((e, index) => (
                  <span key={index} className="experience-item">
                    {e.experience_institute}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Achievements</h3>
              <div className="achievements-container">
                {achievements.map((a, index) => (
                  <span key={index} className="achievements-item">
                    {a.achievements}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h3 className="section-title">Certifications</h3>
              <div className="certifications-container">
                {certifications.map((c, index) => (
                  <span key={index} className="certifications-item">
                    {c.certificates}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
