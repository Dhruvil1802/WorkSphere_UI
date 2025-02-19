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
          Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImVtcGxveWVlX2lkIjo1LCJlbWFpbCI6ImVtcGxveWVlNUBnbWFpbC5jb20iLCJleHAiOjE3NDIyODcwOTV9.HZz4oiuvvEmXEazI_y0L4D8v0NIYyogsD8ABNluBwkIX_s0EH1vAkRDHDqWOHMQqEn1BER-62joHn48Vi2_Q7g`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("dataaaaaaaaaaaaaaaaa", data.data["employee_achievements"]);

      setAttendanceHistory(data.data.reverse());

      console.log("state hereeee", attendanceHistory);
    }
    getAttendanceHistory();
  }, []);

  useEffect(() => {
    console.log(attendanceHistory);
  }, [attendanceHistory]);
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
