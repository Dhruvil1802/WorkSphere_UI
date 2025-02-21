import "./App.css";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SplitBackground from "./employee_attendance/homepage";
import EmployeeProfile from "./employee_profile/profilepage";
import Login from "./employee_boilerplate/login";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/split-background");
    } else {
      navigate("/login");
    }
  }, []);

  const showSplitBackground = () => {
    navigate("/split-background");
  };
  const showProfile = () => {
    navigate("/show-profile");
  };
  const showHome = () => {
    navigate("/split-background");
  };
  // const showLogin = () => {};

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login showSplitBackground={showSplitBackground} />}
      />
      <Route
        path="/split-background"
        element={<SplitBackground showProfile={showProfile} />}
      />
      <Route path="/show-profile" element={<EmployeeProfile />} />
    </Routes>
  );
}

export default App;
