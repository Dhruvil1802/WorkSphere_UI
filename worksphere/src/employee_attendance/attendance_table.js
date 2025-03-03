import React from "react";
import { useEffect, useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./attendance-table.css"; // Make sure the CSS is imported
import ErrorMessage from "../utils/ErrorMessage";

const local = "http://127.0.0.1:8000";
const host = "https://worksphere-smzq.onrender.com";

const AttendanceTable = ({ setErrMsg, setIsErrorVisible }) => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    async function getAttendanceHistory() {
      try {
        const res = await fetch(`${local}/attendance/history/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        if (data.status.code === 200) {
          setAttendanceHistory(data.data.reverse());
        }
      } catch {
        setErrMsg("service unavailable");
        setIsErrorVisible(true);
      }
    }
    getAttendanceHistory();
  }, []);

  return (
    <>
      <Attendance setErrMsg={setErrMsg} setIsErrorVisible={setIsErrorVisible} />

      <h2 className="attendance-history-heading">Attendance History</h2>
      <div className="attendance-table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Attendance Status</th>
              <th>Effective Hours</th>
              <th>Gross Hours</th>
            </tr>
          </thead>
          {attendanceHistory.map((attendance) => (
            <tbody>
              <tr>
                <td>{attendance.date}</td>
                <td>{daysOfWeek[new Date(attendance.date).getDay()]}</td>
                <td className="Present">
                  {attendance.is_on_leave === 0 ? "Absent" : "Present"}
                </td>
                <td>{attendance.worked_hours}</td>
                <td>{attendance.worked_hours}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AttendanceTable;

function Attendance({ setErrMsg, setIsErrorVisible }) {
  async function handleAttendance(punch_type) {
    try {
      const date = new Date();
      const showTime =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      const res = await fetch(`${local}/attendance/${punch_type}/`, {
        method:
          punch_type === "clock-in"
            ? "POST"
            : punch_type === "clock-out" || "meal-start" || "meal-end"
            ? "PATCH"
            : "",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [punch_type === "clock-in"
            ? "clock_in_time"
            : punch_type === "clock-out"
            ? "clock_out_time"
            : punch_type === "meal-start"
            ? "break_start_time"
            : punch_type === "meal-end"
            ? "break_end_time"
            : ""]: showTime,
        }),
      });
      const data = await res.json();
      // console.log(data);

      if (data.status.code === 400) {
        setErrMsg(data.status.message);
        setIsErrorVisible(true);
        const timer = setTimeout(() => {
          handleCloseErrorMessage();
        }, 3000);

        timer();
      }
      if (data.status.code === 200) {
        // setAttendanceHistory(data.data.reverse());
      }
    } catch {
      console.log("error");
    }
  }
  function handleCloseErrorMessage() {
    setIsErrorVisible(false);
  }

  return (
    <>
      <div className="attendance">
        <div className="attendance-container">
          {/* LEFT SECTION: Clock In & Clock Out */}
          <div className="clock-section">
            <h2 className="attendance-title">Attendance</h2>

            <div className="clock-wrapper">
              <div className="clock-box">
                <h3>Clock In</h3>
                <button
                  className="clock-button"
                  onClick={() => handleAttendance("clock-in")}
                >
                  <i className="fas fa-clock"></i>
                </button>

                <div className="time-box">9:00 AM</div>
                <button
                  className="btn-purple"
                  onClick={() => handleAttendance("meal-start")}
                >
                  Start Break
                </button>
              </div>

              <div className="clock-box">
                <h3>Clock Out</h3>
                <button
                  className="clock-button"
                  onClick={() => handleAttendance("clock-out")}
                >
                  <i className="fas fa-clock"></i>
                </button>
                <div className="time-box">7:00 PM</div>
                <button
                  className="btn-purple"
                  onClick={() => handleAttendance("meal-end")}
                >
                  End Break
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: Pie Chart for Leaves Used */}
          <div className="leave-section">
            <h3>Leaves Used</h3>
            <div className="pie-chart"></div>
          </div>
        </div>
      </div>
    </>
  );
}
