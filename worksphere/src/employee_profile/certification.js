import React from "react";

function Certifications({
  certifications,
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
    </>
  );
}
export default Certifications;
