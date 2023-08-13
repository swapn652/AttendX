import React from 'react';
import logoImage from '/placeholder.jpg'; 
import { Link } from 'react-router-dom';

export const Navbar = ({ isLoggedIn, studentName }) => {
  return (
    <div className='bg-blue-900 h-24 w-screen fixed top-0 left-0 flex justify-between items-center px-4'>
      <Link to="/">
        <div style={{ fontFamily: 'Dancing Script' }} className='text-6xl text-white'>
          AttendX
        </div>
      </Link>
      <div className='flex gap-10'>
        {isLoggedIn ? (
          <>
            <img
              src={logoImage} // Placeholder image URL
              alt={`Logo for ${studentName}`}
              className='h-10 w-10 rounded-full'
            />
            <p className='text-white mt-2 -ml-8 mr-10'>{studentName}</p>
          </>
        ) : (
          <>
            <Link to="/webcam" className='bg-white h-10 w-auto p-2 pb-8 border-black border-2 rounded-lg cursor-pointer'>
              Mark Attendance
            </Link>
            <Link to="/register" className='bg-white h-10 w-auto p-2 pb-8 border-black border-2 rounded-lg cursor-pointer'>
              Register
            </Link>
            <Link to="/login" className='bg-white h-10 w-auto p-2 pb-8 border-black border-2 rounded-lg cursor-pointer'>
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
