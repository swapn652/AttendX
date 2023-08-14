import React, { useState } from 'react';
import logoImage from '/placeholder.jpg';
import { Link } from 'react-router-dom';

export const Navbar = ({ isLoggedIn, studentName }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-blue-900 h-24 w-screen fixed top-0 left-0 flex justify-between items-center px-4'>
      <Link to="/">
        <div style={{ fontFamily: 'Dancing Script' }} className='text-4xl text-white'>
          AttendX
        </div>
      </Link>
      <div className='relative md:hidden'>
        <button
          className='text-white'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`absolute bg-blue-900 ${menuOpen ? 'block' : 'hidden'}`}>
          {isLoggedIn ? (
            <div className='md:flex md:gap-4 items-center'>
              <img
                src={logoImage} // Placeholder image URL
                alt={`Logo for ${studentName}`}
                className='h-10 w-10 rounded-full'
              />
              <p className='text-white'>{studentName}</p>
            </div>
          ) : (
            <div className='md:flex md:gap-2 -ml-20'>
              <Link to="/webcam" className='block text-sm md:inline-block bg-white h-8 px-2 py-1 border-black border-2 rounded-lg cursor-pointer'>
                Attendance
              </Link>
              <Link to="/register" className='block text-sm md:inline-block bg-white h-8 px-2 py-1 border-black border-2 rounded-lg cursor-pointer'>
                Register
              </Link>
              <Link to="/login" className='block text-sm md:inline-block bg-white h-8 px-2 py-1 border-black border-2 rounded-lg cursor-pointer'>
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='hidden md:flex md:items-center'>
        {isLoggedIn ? (
          <div className='md:flex md:gap-4 items-center'>
            <img
              src={logoImage} // Placeholder image URL
              alt={`Logo for ${studentName}`}
              className='h-10 w-10 rounded-full'
            />
            <p className='text-white'>{studentName}</p>
          </div>
        ) : (
          <div className={`md:flex mt-4 ${menuOpen ? 'block' : 'hidden'} md:block gap-x-6`}>
            <Link to="/webcam" className='block md:inline-block bg-white h-10 px-2 py-1 border-black border-2 rounded-lg cursor-pointer'>
              Mark Attendance
            </Link>
            <Link to="/register" className='block md:inline-block bg-white h-10 px-2 py-1 border-black border-2 rounded-lg cursor-pointer'>
              Register
            </Link>
            <Link to="/login" className='block md:inline-block bg-white h-10 px-2 py-1 border-black border-2 rounded-lg cursor-pointer'>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
