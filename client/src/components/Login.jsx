import React from 'react';

export const Login = () => {
  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col h-[300px] w-[400px] bg-blue-900 border-2 border-black rounded-lg p-4'>
        <div className='flex flex-col mt-2 self-center'>
          <label className='text-white text-lg self-start ml-2'>Roll ID</label>
          <input
            className='w-[300px] h-[40px] border-2 border-black rounded-lg p-2 mt-1'
            placeholder='Enter your Roll ID...'
          />
        </div>

        <div className='flex flex-col mt-4 self-center'>
          <label className='text-white text-lg self-start ml-2'>Password</label>
          <input
            type='password'
            className='w-[300px] h-[40px] border-2 border-black rounded-lg p-2 mt-1'
            placeholder='Enter your password...'
          />
        </div>

        <button className='bg-white border-2 border-black text-black w-[300px] h-[40px] rounded-lg self-center mt-6'>
          Login
        </button>
      </div>
    </div>
  );
};
