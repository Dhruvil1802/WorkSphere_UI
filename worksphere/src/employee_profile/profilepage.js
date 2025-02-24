import React from "react";
import { useEffect, useState } from "react";

import "./profilepage.css";
import ErrorMessage from "../utils/ErrorMessage";
const EmployeeProfile = () => {
  const [generalDetails, setGeneralDetails] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTabClick = (data, tabType) => {
    setSelectedTab(tabType);
    setSelectedData(data);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }

  useEffect(() => {
    async function getAllDetails() {
      try {
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
      } catch {
        setErrMsg("service unavailable");
        setIsErrorVisible(true);
      }
    }
    getAllDetails();
  }, []);

  // delete education
  async function deleteEducation(Id) {
    try {
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
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
    }
  }

  // delete certification
  async function deleteCertification(Id) {
    try {
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
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
    }
  }

  // delete skills
  async function deleteSkills(Id) {
    try {
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
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
    }
  }

  // delete achievements
  async function deleteAchievements(Id) {
    try {
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
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
    }
  }
  // delete preference
  async function deletePreference(Id) {
    try {
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
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
    }
  }

  // delete experience
  async function deleteExperience(Id) {
    try {
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
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
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

        {/* Right Section - Details */}

        <div className="profile-right">
          <div className="profile-details">
            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Education</h3>
                <button className="add-button"></button>
              </div>

              <div className="sub-section">
                <div className="education-container">
                  {education.length === 0
                    ? "You haven't added any education yet. Please add your education details."
                    : education.map((e, index) => (
                        <span
                          key={index}
                          className="education-item"
                          onClick={() => handleTabClick(e, "Education")}
                        >
                          {e.education}
                          <button
                            className="cross-button"
                            onClick={() =>
                              deleteEducation(e.employee_education_id)
                            }
                          ></button>
                          <button
                            className="edit-button"
                            onClick={() =>
                              deleteEducation(e.employee_education_id)
                            }
                          ></button>
                        </span>
                      ))}
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Experience</h3>
                <button className="add-button"></button>
              </div>
              <div className="sub-section">
                <div className="experience-container">
                  {experiences.length === 0
                    ? "You haven't added any experience yet. Please add your preferences."
                    : experiences.map((e, index) => (
                        <>
                          <div
                            className="experience-details"
                            onClick={() => handleTabClick(e, "Experience")}
                          >
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
              <div className="section-header">
                <h3 className="section-title">Certifications</h3>
                <button className="add-button"></button>
              </div>

              <div className="sub-section">
                <div className="certifications-container">
                  {certifications.length === 0
                    ? "You haven't added any certifications yet. Please add your certifications."
                    : certifications.map((c, index) => (
                        <span
                          key={index}
                          className="certifications-item"
                          onClick={() => handleTabClick(c, "Certifications")}
                        >
                          {c.certificates}
                          <button
                            className="cross-button"
                            onClick={() =>
                              deleteCertification(c.employee_certification_id)
                            }
                          ></button>
                          <button
                            className="edit-button"
                            onClick={() =>
                              deleteCertification(c.employee_education_id)
                            }
                          ></button>
                        </span>
                      ))}
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Preferences</h3>
                <button className="add-button"></button>
              </div>

              <div className="sub-section">
                <div className="preferences-container">
                  {preferences.length === 0
                    ? "You haven't added any preferences yet. Please add your preferences."
                    : preferences.map((p, index) => (
                        <span
                          key={index}
                          className="preferences-item"
                          onClick={() => handleTabClick(p, "Preference")}
                        >
                          {p.preferences}
                          <button
                            className="cross-button"
                            onClick={() =>
                              deletePreference(p.employee_preferences_id)
                            }
                          ></button>
                          <button
                            className="edit-button"
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
              <div className="section-header">
                <h3 className="section-title">Skills</h3>
                <button className="add-button"></button>
              </div>
              <div className="sub-section">
                <div className="skills-container">
                  {skills.length === 0
                    ? "You haven't added any skills yet. Please add your skills."
                    : skills.map((s, index) => (
                        <span
                          key={index}
                          className="skills-item"
                          onClick={() => handleTabClick(s, "Skills")}
                        >
                          {s.skills}
                          <button
                            className="cross-button"
                            onClick={() => deleteSkills(s.employee_skills_id)}
                          ></button>
                          <button
                            className="edit-button"
                            onClick={() => deleteSkills(s.employee_skills_id)}
                          ></button>
                        </span>
                      ))}
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h3 className="section-title">Achievements</h3>
                <button className="add-button"></button>
              </div>
              <div className="sub-section">
                <div className="achievements-container">
                  {achievements.length === 0
                    ? "You haven't added any achievements yet. Please add your achievements."
                    : achievements.map((a, index) => (
                        <span
                          key={index}
                          className="achievements-item"
                          onClick={() => handleTabClick(a, "Achievements")}
                        >
                          {a.achievements}
                          <button
                            className="cross-button"
                            onClick={() =>
                              deleteAchievements(a.employee_achievements_id)
                            }
                          ></button>
                          <button
                            className="edit-button"
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

      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{selectedTab} Details</h3>
              <div onClick={closeModal} className="close-modal">
                &times;
              </div>
            </div>

            {selectedTab === "Education" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Institution</strong>
                      </td>
                      <td>{selectedData.education_institute}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Degree</strong>
                      </td>
                      <td>{selectedData.education}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Year of Graduation</strong>
                      </td>
                      <td>{selectedData.pass_out_year}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {selectedTab === "Experience" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Company</strong>
                      </td>
                      <td>{selectedData.experience_institute}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Position</strong>
                      </td>
                      <td>{selectedData.experience_role}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>To</strong>
                      </td>
                      <td>{selectedData.experience_date_to} years</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>From</strong>
                      </td>
                      <td>{selectedData.experience_date_from} years</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Duration</strong>
                      </td>
                      <td>{selectedData.experience} years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {selectedTab === "Skills" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Skill</strong>
                      </td>
                      <td>{selectedData.skills}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {selectedTab === "Certifications" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Certification Name</strong>
                      </td>
                      <td>{selectedData.certificates}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Issuing Organization</strong>
                      </td>
                      <td>{selectedData.certification_institute}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Issue Date</strong>
                      </td>
                      <td>{selectedData.certification_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {selectedTab === "Preference" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Preferences</strong>
                      </td>
                      <td>{selectedData.preferences}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {selectedTab === "Achievements" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Achievement</strong>
                      </td>
                      <td>{selectedData.achievements}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date</strong>
                      </td>
                      <td>{selectedData.achievements_recieved_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {isErrorVisible && (
        <ErrorMessage message={errMsg} onClick={handleCloseErrorMessage} />
      )}
    </>
  );
};

export default EmployeeProfile;
