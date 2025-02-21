import React from "react";
import SideMenu from "./side_menu";
import AttendanceTable from "./attendance_table";
import "./homepage.css";

const SplitBackground = ({ showProfile }) => {
  return (
    <div className="container">
      <div className="image-side">
        <SideMenu showProfile={showProfile} />
      </div>
      <div className="content-side">
        <AttendanceTable />
      </div>
    </div>
  );
};

export default SplitBackground;
