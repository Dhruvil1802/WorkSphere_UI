import React from "react";
import { useState } from "react";

import "./profilepage.css";
import ErrorMessage from "../utils/ErrorMessage";
import ProfileLeft from "./profileleft";
import ProfileRight from "./profileright";
const EmployeeProfile = () => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }
  return (
    <>
      <div className="profile-page-container">
        {/* Left Section - General details */}
        <ProfileLeft
          setErrMsg={setErrMsg}
          setIsErrorVisible={setIsErrorVisible}
        />

        {/* Right Section - Details */}
        <ProfileRight
          setErrMsg={setErrMsg}
          setIsErrorVisible={setIsErrorVisible}
        />
      </div>
      {/* Display Error Message */}
      {isErrorVisible && (
        <ErrorMessage message={errMsg} onClick={handleCloseErrorMessage} />
      )}
    </>
  );
};

export default EmployeeProfile;
