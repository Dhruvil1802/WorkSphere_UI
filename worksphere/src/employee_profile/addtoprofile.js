import React from "react";
import { useEffect, useState } from "react";

import "./addtoprofile.css";

const local = "http://127.0.0.1:8000";
const host = "https://worksphere-smzq.onrender.com";

function AddToProfile({
  addSelectedTab,
  isFormVisible,
  setIsFormVisible,
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
    setIsFormVisible(false);
  };

  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }

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
        const res = await fetch(`${local}/employeeprofile/${addSelectedTab}/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.status.code === 200) {
          if (data.status.code === 200) {
            const res = await fetch(
              `${local}/employeeprofile/${addSelectedTab}/`,
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
              addSelectedTab === "employeecertifications" &&
                setCertifications(data.data);
            }
            {
              addSelectedTab === "employeeeducation" && setEducation(data.data);
            }
            {
              addSelectedTab === "employeeachievements" &&
                setAchievements(data.data);
            }
            {
              addSelectedTab === "employeepreferences" &&
                setPreferences(data.data);
            }
            {
              addSelectedTab === "employeeskills" && setSkills(data.data);
            }
            {
              addSelectedTab === "employeeexperiences" &&
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

          timer();
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
      {isFormVisible && (
        <div className="modal-add-overlay">
          <div className="modal-add-content">
            <div className="modal-header">
              <h3 className="modal-title">
                {addSelectedTab === "employeecertifications" &&
                  "Add your certifications"}
                {addSelectedTab === "employeeeducation" && "Add your education"}
                {addSelectedTab === "employeeachievements" &&
                  "Add your achievements"}
                {addSelectedTab === "employeepreferences" &&
                  "Add your preferences"}
                {addSelectedTab === "employeeskills" && "Add your skills"}
                {addSelectedTab === "employeeexperiences" &&
                  "Add your expereinces"}
              </h3>
              <div onClick={closeModal} className="close-add-modal">
                &times;
              </div>
            </div>

            <form onSubmit={handleSubmit} className="form-modal">
              {/* Education Form Fields */}
              {addSelectedTab === "employeeeducation" && (
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
                        <select
                          id="pass_out_year"
                          name="pass_out_year"
                          required
                          onChange={(e) => handleInputChange(e)}
                        >
                          <option value="">Select Year</option>
                          {[...Array(100)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* Experience Form Fields */}
              {addSelectedTab === "employeeexperiences" && (
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
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* Certifications Form Fields */}
              {addSelectedTab === "employeecertifications" && (
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
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* Skills Form Fields */}
              {addSelectedTab === "employeeskills" && (
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
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* Achievements Form Fields */}
              {addSelectedTab === "employeeachievements" && (
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
                          required
                          onChange={(e) => handleInputChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* Preferences Form Fields */}
              {addSelectedTab === "employeepreferences" && (
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

export default AddToProfile;
