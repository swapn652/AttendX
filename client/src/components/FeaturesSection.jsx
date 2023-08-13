import React from 'react';

export const FeaturesSection = () => {
  return (
    <div className='bg-blue-900 h-72 w-screen -ml-[32px] xl:-ml-[32px] flex justify-center items-center mt-10'>
      <div className='flex gap-8 max-w-screen-lg mx-auto'>
        <div className='bg-white h-60 w-80 p-4 rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Use AI Recognition to Mark Attendance</h3>
          <p className='text-gray-700'>
            Simplify attendance tracking with AI-powered face recognition. No more manual
            roll calls. AttendX uses cutting-edge technology to ensure accurate and efficient
            attendance recording.
          </p>
        </div>
        <div className='bg-white h-60 w-80 p-4 rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Check Your Attendance Anywhere</h3>
          <p className='text-gray-700'>
            Access your attendance records on the go. AttendX provides you with a secure login
            that allows you to view your attendance history anytime, anywhere. Stay informed
            about your attendance status effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}
