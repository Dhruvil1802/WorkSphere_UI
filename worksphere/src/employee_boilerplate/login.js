import React, { useState } from "react";
import "./login.css"; // Ensure this path is correct based on your project structure
import ErrorMessage from "../utils/ErrorMessage.js";
// const host = "https://worksphere-smzq.onrender.com";
const host = "http://127.0.0.1:8000/";

const LoginForm = ({ showSplitBackground }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    async function Fetcher() {
      try {
        const res = await fetch(`${host}/employee/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.status.code === 200) {
          localStorage.setItem("token", data.data.employee_refresh_token);
          showSplitBackground();
        }

        if (data.status.code === 400) {
          setErrorMessage(data.status.message);
          setIsErrorVisible(true);
          setEmail("");
          setPassword("");

          const timer = setTimeout(() => {
            handleCloseErrorMessage();
          }, 3000);

          // timer();
        }
      } catch (err) {
        console.log(err);
      }
    }

    Fetcher();
  };

  return (
    <>
      <h2>LOGIN</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      {isErrorVisible && (
        <ErrorMessage
          message={errorMessage}
          onClick={handleCloseErrorMessage}
        />
      )}
    </>
  );
};

const Login = ({ showSplitBackground }) => {
  return (
    <>
      <div className="login-page">
        <div className="overlay">
          <LoginForm showSplitBackground={showSplitBackground} />
        </div>
      </div>
    </>
  );
};

export default Login;
