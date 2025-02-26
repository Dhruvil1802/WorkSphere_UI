import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SplitBackground from "./employee_attendance/homepage";
import EmployeeProfile from "./employee_profile/profilepage";
import Login from "./employee_boilerplate/login";
import ErrorMessage from "./utils/ErrorMessage";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/split-background");
    } else {
      navigate("/login");
    }
  }, [token]);

  const showSplitBackground = () => {
    navigate("/split-background");
  };
  const showProfile = () => {
    navigate("/show-profile");
  };
  const showHome = () => {
    navigate("/split-background");
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login showSplitBackground={showSplitBackground} />}
      />
      <Route
        path="/split-background"
        element={
          <SplitBackground showProfile={showProfile} setToken={setToken} />
        }
      />
      <Route path="/show-profile" element={<EmployeeProfile />} />
    </Routes>
  );
}

export default App;
