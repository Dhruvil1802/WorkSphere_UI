import React from "react";

function Achievements({
  achievements,
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
    </>
  );
}
export default Achievements;
