import React from "react";

import "./viewdetails.css";
function ViewDetails({
  selectedData,
  viewSelectedTab,
  closeModal,
  isModalVisible,
}) {
  return (
    <>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{viewSelectedTab} Details</h3>
              <div onClick={closeModal} className="close-modal">
                &times;
              </div>
            </div>

            {viewSelectedTab === "Education" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Institution</strong>
                      </td>
                      <td>{selectedData.education_institute}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Degree</strong>
                      </td>
                      <td>{selectedData.education}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Year of Graduation</strong>
                      </td>
                      <td>{selectedData.pass_out_year}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {viewSelectedTab === "Experience" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Company</strong>
                      </td>
                      <td>{selectedData.experience_institute}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Position</strong>
                      </td>
                      <td>{selectedData.experience_role}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>To</strong>
                      </td>
                      <td>{selectedData.experience_date_to} </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>From</strong>
                      </td>
                      <td>{selectedData.experience_date_from} </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Duration</strong>
                      </td>
                      <td>{selectedData.experience} years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* {viewSelectedTab === "Skills" && (
            <div className="modal-data">
              <table className="data-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Skill</strong>
                    </td>
                    <td>{selectedData.skills}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )} */}

            {viewSelectedTab === "Certifications" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Certification Name</strong>
                      </td>
                      <td>{selectedData.certificates}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Issuing Organization</strong>
                      </td>
                      <td>{selectedData.certification_institute}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Issue Date</strong>
                      </td>
                      <td>{selectedData.certification_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* {viewSelectedTab === "Preference" && (
            <div className="modal-data">
              <table className="data-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Preferences</strong>
                    </td>
                    <td>{selectedData.preferences}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )} */}

            {viewSelectedTab === "Achievements" && (
              <div className="modal-data">
                <table className="data-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Achievement</strong>
                      </td>
                      <td>{selectedData.achievements}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date</strong>
                      </td>
                      <td>{selectedData.achievements_recieved_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ViewDetails;
