import React from 'react';

export const Navbar = () => {
  return (
    <div className='bg-blue-900 h-24 w-screen fixed top-0 left-0 flex justify-between items-center px-4'>
      <div style={{ fontFamily: 'Dancing Script' }} className='text-6xl text-white'>
        AttendX
      </div>
      <div className='flex gap-10'>
        <button className='bg-white h-10 w-auto p-2 pb-8 border-black border-2 rounded-lg cursor-pointer'>
          Mark Attendance
        </button>
        <button className='bg-white h-10 w-auto p-2 pb-8 border-black border-2 rounded-lg cursor-pointer'>
          Register
        </button>
        <button className='bg-white h-10 w-auto p-2 pb-8 border-black border-2 rounded-lg cursor-pointer'>
          Sign In
        </button>
      </div>
    </div>
  );
};
