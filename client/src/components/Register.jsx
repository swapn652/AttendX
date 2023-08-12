import React, { useState } from 'react';
import axios from 'axios';
import { Bugfender } from '@bugfender/sdk';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/addStudent', {
            name,
            password,
          });
          

      console.log(response.data);
      Bugfender.log(response.data);
      
    
    } catch (error) {
      console.error(error);
      Bugfender.log(error);
      
    }
  };

  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col h-[500px] w-[500px] bg-blue-900 border-2 border-black rounded-lg p-4'>
        <div className='flex flex-col mt-2 self-center'>
          <label className='text-white text-lg self-start ml-2'>Name</label>
          <input
            className='w-[300px] h-[40px] border-2 border-black rounded-lg p-2 mt-1'
            placeholder='Enter your name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='flex flex-col mt-6 self-center'>
          <label className='text-white text-lg self-start ml-2'>Password</label>
          <input
            className='w-[300px] h-[40px] border-2 border-black rounded-lg p-2 mt-1'
            placeholder='Enter a strong password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex flex-col mt-4 w-[300px] self-center'>
          <label className='text-white text-lg self-start ml-2'>Upload Image 1</label>
          <input type='file' accept='image/*' className='border-2 border-white rounded-lg p-2 mt-1' />
        </div>

        <div className='flex flex-col mt-4 w-[300px] self-center'>
          <label className='text-white text-lg self-start ml-2'>Upload Image 2</label>
          <input type='file' accept='image/*' className='border-2 border-white rounded-lg p-2 mt-1' />
        </div>

        <button
          className='bg-white border-2 border-black text-black w-[300px] h-[40px] rounded-lg self-center mt-10'
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};
