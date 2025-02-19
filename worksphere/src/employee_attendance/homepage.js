import React from "react";
import SideMenu from "./side_menu";
import AttendanceTable from "./attendance_table";
import "./homepage.css";

const SplitBackground = ({
  showSplitBackground,
  isSplitBackgroundOpen,
  showProfile,
  isProfileOpen,
}) => {
  return (
    <div className="container">
      <div className="image-side">
        <SideMenu
          showSplitBackground={showSplitBackground}
          isSplitBackgroundOpen={isSplitBackgroundOpen}
          showProfile={showProfile}
          isProfileOpen={isProfileOpen}
        />
      </div>
      <div className="content-side">
        <AttendanceTable />
      </div>
    </div>
  );
};

export default SplitBackground;
