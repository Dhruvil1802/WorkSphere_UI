import React from "react";

function Skills({
  skills,
  handleForm,
  handleTabClick,
  isEditOn,
  deletedata,
  handleEditForm,
}) {
  return (
    <>
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
                            deletedata(s.employee_skills_id, "employeeskills");
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
    </>
  );
}
export default Skills;
