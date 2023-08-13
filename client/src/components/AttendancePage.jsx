import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendancePage = ({ studentRollId }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getAttendance/${studentRollId}`);
        setAttendanceData(response.data.attendance);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };  
    console.log(studentRollId)

    fetchAttendanceData();
  }, [studentRollId]);

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h1 className='text-3xl font-bold mb-4'>Attendance Report</h1>
      <table className='bg-blue-900 text-white border border-white rounded-lg w-[80%]'>
        <thead>
          <tr>
            <th className='border border-white p-2 text-2xl'>Date</th>
            <th className='border border-white p-2 text-2xl'>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td className='border border-white p-2'>{entry.date}</td>
              <td className='border border-white p-2'>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
