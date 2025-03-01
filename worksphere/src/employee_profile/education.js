import React from "react";

function Education({
  education,
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
    </>
  );
}

export default Education;
