import React from "react";

function Preferences({
  preferences,
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
    </>
  );
}
export default Preferences;
