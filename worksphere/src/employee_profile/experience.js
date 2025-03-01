import React from "react";

function Experiences({
  experiences,
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
    </>
  );
}
export default Experiences;
