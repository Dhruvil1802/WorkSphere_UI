import React from "react";
import { useEffect, useState } from "react";

import { Switch } from "@mui/material";

import "./profileright.css";
import AddToProfile from "./addtoprofile";
import ViewDetails from "./viewdetails";
import EditProfile from "./editprofile";

const local = "http://127.0.0.1:8000";
const host = "https://worksphere-smzq.onrender.com";

function ProfileRight({ setErrMsg, setIsErrorVisible }) {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [isEditOn, setIsEditOn] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [addSelectedTab, setAddSelectedTab] = useState({});
  const [viewSelectedTab, setViewSelectedTab] = useState(null);
  const [editSelectedTab, setEditSelectedTab] = useState({});
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  console.log(addSelectedTab, "ccccccccccccccccccccccccccccccccccc");
  const handleTabClick = (data, tabType) => {
    setViewSelectedTab(tabType);
    setSelectedData(data);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  function handleForm(formtype) {
    setIsFormVisible(true);
    setAddSelectedTab(formtype);
  }

  function handleEditForm(data, tabType) {
    setIsEditFormVisible(true);
    setSelectedData(data);
    setEditSelectedTab(tabType);
  }

  const handleToggle = () => {
    setIsEditOn((prev) => !prev);
  };

  useEffect(() => {
    async function getAllDetails() {
      try {
        const res = await fetch(
          `${local}/employeeprofile/getemployeealldata/`,
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

  // delete data
  async function deletedata(id, tab) {
    try {
      const res = await fetch(`${local}/employeeprofile/${tab}/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.status.code === 200) {
        const res = await fetch(`${local}/employeeprofile/${tab}/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        {
          tab === "employeecertifications" && setCertifications(data.data);
        }
        {
          tab === "employeeeducation" && setEducation(data.data);
        }
        {
          tab === "employeeachievements" && setAchievements(data.data);
        }
        {
          tab === "employeepreferences" && setPreferences(data.data);
        }
        {
          tab === "employeeskills" && setSkills(data.data);
        }
        {
          tab === "employeeexperiences" && setExperiences(data.data);
        }
      }
    } catch {
      setErrMsg("service unavailable");
      setIsErrorVisible(true);
    }
  }

  return (
    <div className="profile-right">
      <div className="switch-container">
        <span className={isEditOn ? "switch-on-label" : "switch-off-label"}>
          Edit Mode
        </span>
        <Switch
          checked={isEditOn}
          onChange={handleToggle}
          className="custom-toggle"
        />
      </div>

      {/* education */}
      <div className="profile-details">
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Education</h3>
            <button
              className="add-button"
              onClick={() => handleForm("employeeeducation")}
            ></button>
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
                      {isEditOn && (
                        <>
                          <button
                            className="cross-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              deletedata(
                                e.employee_education_id,
                                "employeeeducation"
                              );
                            }}
                          ></button>
                          <button
                            className="edit-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              handleEditForm(e, "employeeeducation");
                            }}
                          ></button>
                        </>
                      )}
                    </span>
                  ))}
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Experience</h3>
            <button
              className="add-button"
              onClick={() => handleForm("employeeexperiences")}
            ></button>
          </div>
          <div className="sub-section">
            <div className="experience-container">
              {experiences.length === 0
                ? "You haven't added any experience yet. Please add your preferences."
                : experiences.map((ex, index) => (
                    <span>
                      <div
                        className="experience-details"
                        onClick={() => handleTabClick(ex, "Experience")}
                      >
                        {ex.experience_institute} ({ex.experience} years)
                        {isEditOn && (
                          <>
                            <button
                              className="cross-button"
                              onClick={(x) => {
                                x.stopPropagation();
                                deletedata(
                                  ex.employee_experiences_id,
                                  "employeeexperiences"
                                );
                              }}
                            ></button>
                            <button
                              className="edit-button"
                              onClick={(x) => {
                                x.stopPropagation();
                                handleEditForm(ex, "employeeexperiences");
                              }}
                            ></button>
                          </>
                        )}
                      </div>
                      <div className="experience-item">
                        <div
                          className="experience-bar"
                          style={{
                            width: `${ex.experience * 5}%`,
                          }}
                        ></div>
                      </div>
                    </span>
                  ))}
            </div>
          </div>
        </div>

        {/* certification */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Certifications</h3>
            <button
              className="add-button"
              onClick={() => handleForm("employeecertifications")}
            ></button>
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
                      {isEditOn && (
                        <>
                          <button
                            className="cross-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              deletedata(
                                c.employee_certification_id,
                                "employeecertifications"
                              );
                              // deleteCertification(c.employee_certification_id);
                            }}
                          ></button>
                          <button
                            className="edit-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              handleEditForm(c, "employeecertifications");
                            }}
                          ></button>
                        </>
                      )}
                    </span>
                  ))}
            </div>
          </div>
        </div>

        {/* preferences */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Preferences</h3>
            <button
              className="add-button"
              onClick={() => handleForm("employeepreferences")}
            ></button>
          </div>

          <div className="sub-section">
            <div className="preferences-container">
              {preferences.length === 0
                ? "You haven't added any preferences yet. Please add your preferences."
                : preferences.map((p, index) => (
                    <span
                      key={index}
                      className="preferences-item"
                      // onClick={() => handleTabClick(p, "Preference")}
                    >
                      {p.preferences}
                      {isEditOn && (
                        <>
                          <button
                            className="cross-button"
                            onClick={() =>
                              deletedata(
                                p.employee_preferences_id,
                                "employeepreferences"
                              )
                            }
                          ></button>
                          <button
                            className="edit-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              handleEditForm(p, "employeepreferences");
                            }}
                          ></button>
                        </>
                      )}
                    </span>
                  ))}
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Skills</h3>
            <button
              className="add-button"
              onClick={() => handleForm("employeeskills")}
            ></button>
          </div>
          <div className="sub-section">
            <div className="skills-container">
              {skills.length === 0
                ? "You haven't added any skills yet. Please add your skills."
                : skills.map((s, index) => (
                    <span
                      key={index}
                      className="skills-item"
                      // onClick={() => handleTabClick(s, "Skills")}
                    >
                      {s.skills}
                      {isEditOn && (
                        <>
                          <button
                            className="cross-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              deletedata(
                                s.employee_skills_id,
                                "employeeskills"
                              );
                            }}
                          ></button>
                          <button
                            className="edit-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              handleEditForm(s, "employeeskills");
                            }}
                          ></button>
                        </>
                      )}
                    </span>
                  ))}
            </div>
          </div>
        </div>

        {/* achievements */}
        <div className="section">
          <div className="section-header">
            <h3 className="section-title">Achievements</h3>
            <button
              className="add-button"
              onClick={() => handleForm("employeeachievements")}
            ></button>
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
                      {isEditOn && (
                        <>
                          <button
                            className="cross-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              deletedata(
                                a.employee_achievements_id,
                                "employeeachievements"
                              );
                            }}
                          ></button>
                          <button
                            className="edit-button"
                            onClick={(x) => {
                              x.stopPropagation();
                              handleEditForm(a, "employeeachievements");
                            }}
                          ></button>
                        </>
                      )}
                    </span>
                  ))}
            </div>
          </div>
        </div>
      </div>

      {/* add form handling */}
      <AddToProfile
        addSelectedTab={addSelectedTab}
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
        setErrMsg={setErrMsg}
        setIsErrorVisible={setIsErrorVisible}
        setEducation={setEducation}
        setCertifications={setCertifications}
        setSkills={setSkills}
        setPreferences={setPreferences}
        setAchievements={setAchievements}
        setExperiences={setExperiences}
      />

      {/* Edit Profile */}
      <EditProfile
        selectedData={selectedData}
        editSelectedTab={editSelectedTab}
        isEditFormVisible={isEditFormVisible}
        setIsEditFormVisible={setIsEditFormVisible}
        setErrMsg={setErrMsg}
        setIsErrorVisible={setIsErrorVisible}
        setEducation={setEducation}
        setCertifications={setCertifications}
        setSkills={setSkills}
        setPreferences={setPreferences}
        setAchievements={setAchievements}
        setExperiences={setExperiences}
      />
      {/* view details */}
      <ViewDetails
        selectedData={selectedData}
        viewSelectedTab={viewSelectedTab}
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      />
    </div>
  );
}

export default ProfileRight;
