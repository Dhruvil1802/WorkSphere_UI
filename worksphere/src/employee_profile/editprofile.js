import React from "react";
import { useEffect, useState } from "react";

import "./addtoprofile.css";

const local = "http://127.0.0.1:8000";
const host = "https://worksphere-smzq.onrender.com";

function EditProfile({
  selectedData,
  editSelectedTab,
  isEditFormVisible,
  setIsEditFormVisible,
  setErrMsg,
  setIsErrorVisible,
  setEducation,
  setCertifications,
  setSkills,
  setPreferences,
  setAchievements,
  setExperiences,
}) {
  const [formData, setFormData] = useState({});

  const closeModal = () => {
    setIsEditFormVisible(false);
  };

  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }

  useEffect(() => {
    setFormData(selectedData || {});
  }, [selectedData]);

  const handleInputChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function addData() {
      try {
        const res = await fetch(
          `${local}/employeeprofile/${editSelectedTab}/`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await res.json();

        if (data.status.code === 200) {
          if (data.status.code === 200) {
            const res = await fetch(
              `${local}/employeeprofile/${editSelectedTab}/`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();
            {
              editSelectedTab === "employeecertifications" &&
                setCertifications(data.data);
            }
            {
              editSelectedTab === "employeeeducation" &&
                setEducation(data.data);
            }
            {
              editSelectedTab === "employeeachievements" &&
                setAchievements(data.data);
            }
            {
              editSelectedTab === "employeepreferences" &&
                setPreferences(data.data);
            }
            {
              editSelectedTab === "employeeskills" && setSkills(data.data);
            }
            {
              editSelectedTab === "employeeexperiences" &&
                setExperiences(data.data);
            }
          }
        }
        if (data.status.code === 400) {
          setErrMsg(data.status.message);
          setIsErrorVisible(true);

          const timer = setTimeout(() => {
            handleCloseErrorMessage();
          }, 3000);

          //   timer();
        }
      } catch (err) {
        console.log(err);
      }
    }
    addData();
    closeModal();
  };

  return (
    <>
      {isEditFormVisible && (
        <div className="modal-add-overlay">
          <div className="modal-add-content">
            <div className="modal-header">
              <h3 className="modal-title">
                {editSelectedTab === "employeecertifications" &&
                  "Edit your certifications details"}
                {editSelectedTab === "employeeeducation" &&
                  "Edit your education details"}
                {editSelectedTab === "employeeachievements" &&
                  "Edit your achievements details"}
                {editSelectedTab === "employeepreferences" &&
                  "Edit your preferences details"}
                {editSelectedTab === "employeeskills" && "Add your skills"}
                {editSelectedTab === "employeeexperiences" &&
                  "Edit your expereinces details"}
              </h3>
              <div onClick={closeModal} className="close-add-modal">
                &times;
              </div>
            </div>

            <form onSubmit={handleSubmit} className="form-modal">
              {/* Education Form Fields */}
              {editSelectedTab === "employeeeducation" && (
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="education">Education:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="education"
                          name="education"
                          value={formData?.education || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="institution">Institution:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="education_institute"
                          name="education_institute"
                          value={formData?.education_institute}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="year">Year of Graduation:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="pass_out_year"
                          name="pass_out_year"
                          value={formData?.pass_out_year}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {/* Experience Form Fields */}
              {editSelectedTab === "employeeexperiences" && (
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="company">Company:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="experience_institute"
                          name="experience_institute"
                          value={formData?.experience_institute || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="position">Position:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="experience_role"
                          name="experience_role"
                          value={formData?.experience_role || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="duration">Duration:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="experience"
                          name="experience"
                          value={formData?.experience || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="fromDate">From Date:</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="experience_date_from"
                          name="experience_date_from"
                          value={formData?.experience_date_from || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="toDate">To Date:</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="experience_date_to"
                          name="experience_date_to"
                          value={formData?.experience_date_to || ""}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {/* Certifications Form Fields */}
              {editSelectedTab === "employeecertifications" && (
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="certification">Certification:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="certificates"
                          name="certificates"
                          value={formData?.certificates || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="institute">Issuing Organization:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="certification_institute"
                          name="certification_institute"
                          value={formData?.certification_institute || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="issueDate">Issue Date:</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="certification_date"
                          name="certification_date"
                          value={formData?.certification_date || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {/* Skills Form Fields */}
              {editSelectedTab === "employeeskills" && (
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="skill">Skill:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="skills"
                          name="skills"
                          value={formData?.skills || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {/* Achievements Form Fields */}
              {editSelectedTab === "employeeachievements" && (
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="achievement">Achievement:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="achievements"
                          name="achievements"
                          value={formData?.achievements || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="achievementDate">Date Received:</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="achievements_recieved_date"
                          name="achievements_recieved_date"
                          value={formData?.achievements_recieved_date || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {/* Preferences Form Fields */}
              {editSelectedTab === "employeepreferences" && (
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="preference">Preference:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="preferences"
                          name="preferences"
                          value={formData?.preferences || ""}
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {/* Submit Button */}
              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfile;
