import React from 'react';

const AttendancePage = () => {
  // Mock attendance data for demonstration
  const attendanceData = [
    { date: '2023-08-15', status: 'Present' },
    { date: '2023-08-16', status: 'Absent' },
    { date: '2023-08-17', status: 'Present' },
    // Add more data as needed
  ];

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
