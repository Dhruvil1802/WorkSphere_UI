import React from "react";

import { useEffect, useState } from "react";

import SideMenu from "./side_menu";
import AttendanceTable from "./attendance_table";
import ErrorMessage from "../utils/ErrorMessage.js";
import "./homepage.css";

const SplitBackground = ({ showProfile }) => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }
  return (
    <div className="container">
      <div className="image-side">
        <SideMenu
          showProfile={showProfile}
          setErrMsg={setErrMsg}
          setIsErrorVisible={setIsErrorVisible}
        />
      </div>
      <div className="content-side">
        <AttendanceTable
          setErrMsg={setErrMsg}
          setIsErrorVisible={setIsErrorVisible}
        />
      </div>
      {isErrorVisible && (
        <ErrorMessage message={errMsg} onClick={handleCloseErrorMessage} />
      )}
    </div>
  );
};

export default SplitBackground;
