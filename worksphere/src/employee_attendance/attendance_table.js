import React from "react";
import { useEffect, useState } from "react";

import "./attendance-table.css"; // Make sure the CSS is imported

const AttendanceTable = () => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "sunday",
  ];

  useEffect(() => {
    async function getAttendanceHistory() {
      const res = await fetch("http://127.0.0.1:8000/attendance/history/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setAttendanceHistory(data.data.reverse());
    }
    getAttendanceHistory();
  }, []);

  return (
    <>
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
