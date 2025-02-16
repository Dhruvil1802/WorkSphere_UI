import React from "react";
import "./attendance-table.css"; // Make sure the CSS is imported

const AttendanceTable = () => {
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
          <tbody>
            <tr>
              <td>Jul 31, Wed</td>
              <td>Workday</td>
              <td className="Present">Present</td>
              <td>7:50 hrs</td>
              <td>8:40 hrs</td>
            </tr>
            <tr>
              <td>Jul 30, Tue</td>
              <td>Workday</td>
              <td className="Late">Late</td>
              <td>3:50 hrs</td>
              <td>4:50 hrs</td>
            </tr>
            <tr>
              <td>Jul 29, Mon</td>
              <td>Workday</td>
              <td className="Absent">Absent</td>
              <td>0:00 hrs</td>
              <td>0:00 hrs</td>
            </tr>
            <tr>
              <td>Jul 31, Wed</td>
              <td>Workday</td>
              <td className="Present">Present</td>
              <td>7:50 hrs</td>
              <td>8:40 hrs</td>
            </tr>
            <tr>
              <td>Jul 30, Tue</td>
              <td>Workday</td>
              <td className="Late">Late</td>
              <td>3:50 hrs</td>
              <td>4:50 hrs</td>
            </tr>
            <tr>
              <td>Jul 29, Mon</td>
              <td>Workday</td>
              <td className="Absent">Absent</td>
              <td>0:00 hrs</td>
              <td>0:00 hrs</td>
            </tr>
            <tr>
              <td>Jul 29, Mon</td>
              <td>Workday</td>
              <td className="Absent">Absent</td>
              <td>0:00 hrs</td>
              <td>0:00 hrs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AttendanceTable;
