import React from "react";
import { useEffect, useState } from "react";

import { Switch } from "@mui/material";

import "./profileright.css";
import AddToProfile from "./addtoprofile";
import ViewDetails from "./viewdetails";
import EditProfile from "./editprofile";
import Experiences from "./experience";
import Education from "./education";
import Certifications from "./certification";
import Preferences from "./preference";
import Skills from "./skill";
import Achievements from "./achievement";

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
        if (data.status.code === 200) {
          setEducation(data.data["employee_education"]);
          setSkills(data.data["employee_skills"]);
          setPreferences(data.data["employee_preferences"]);
          setExperiences(data.data["employee_experiences"]);
          setAchievements(data.data["employee_achievements"]);
          setCertifications(data.data["employee_certifications"]);
        }
        if (data.status.code === 400) {
          // setErrMsg(data.status.message);
          // setIsErrorVisible(true);
          // const timer = setTimeout(() => {
          //   handleCloseErrorMessage();
          // }, 3000);
          // timer();
        }
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

      <div className="profile-details">
        <Education
          education={education}
          handleForm={handleForm}
          handleTabClick={handleTabClick}
          isEditOn={isEditOn}
          deletedata={deletedata}
          handleEditForm={handleEditForm}
        />

        <Experiences
          experiences={experiences}
          handleForm={handleForm}
          handleTabClick={handleTabClick}
          isEditOn={isEditOn}
          deletedata={deletedata}
          handleEditForm={handleEditForm}
        />

        <Certifications
          certifications={certifications}
          handleForm={handleForm}
          handleTabClick={handleTabClick}
          isEditOn={isEditOn}
          deletedata={deletedata}
          handleEditForm={handleEditForm}
        />

        <Preferences
          preferences={preferences}
          handleForm={handleForm}
          handleTabClick={handleTabClick}
          isEditOn={isEditOn}
          deletedata={deletedata}
          handleEditForm={handleEditForm}
        />

        <Skills
          skills={skills}
          handleForm={handleForm}
          handleTabClick={handleTabClick}
          isEditOn={isEditOn}
          deletedata={deletedata}
          handleEditForm={handleEditForm}
        />

        <Achievements
          achievements={achievements}
          handleForm={handleForm}
          handleTabClick={handleTabClick}
          isEditOn={isEditOn}
          deletedata={deletedata}
          handleEditForm={handleEditForm}
        />
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
