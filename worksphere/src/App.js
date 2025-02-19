import "./App.css";
import { useEffect, useState } from "react";

import SplitBackground from "./employee_attendance/homepage";
import EmployeeProfile from "./employee_profile/profilepage";
import Login from "./employee_boilerplate/login";

function App() {
  const [isSplitBackgroundOpen, setIsSplitBackgroundOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  console.log("chedcking profile", isProfileOpen);
  console.log("chedcking split background", isSplitBackgroundOpen);
  const showSplitBackground = () => {
    setIsSplitBackgroundOpen(true);
    setIsProfileOpen(false);
  };

  const showProfile = () => {
    setIsSplitBackgroundOpen(false);
    setIsProfileOpen(true);
  };

  return (
    <div>
      {/* <Login /> */}
      {isSplitBackgroundOpen && (
        <SplitBackground
          showSplitBackground={showSplitBackground}
          isSplitBackgroundOpen={isSplitBackgroundOpen}
          showProfile={showProfile}
          isProfileOpen={isProfileOpen}
        />
      )}

      <EmployeeProfile isProfileOpen={isProfileOpen} />
    </div>
  );
}

export default App;
