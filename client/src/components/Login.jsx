import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [rollId, setRollId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        rollId,
        password
      });

      const { message, studentName, studentRollId } = response.data;
      toast.success(message);

      // You can use studentName and studentRollId as needed, e.g. store them in state or context

    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col h-[300px] w-[400px] bg-blue-900 border-2 border-black rounded-lg p-4'>
        <div className='flex flex-col mt-2 self-center'>
          <label className='text-white text-lg self-start ml-2'>Roll ID</label>
          <input
            className='w-[300px] h-[40px] border-2 border-black rounded-lg p-2 mt-1'
            placeholder='Enter your Roll ID...'
            value={rollId}
            onChange={(e) => setRollId(e.target.value)}
          />
        </div>

        <div className='flex flex-col mt-4 self-center'>
          <label className='text-white text-lg self-start ml-2'>Password</label>
          <input
            type='password'
            className='w-[300px] h-[40px] border-2 border-black rounded-lg p-2 mt-1'
            placeholder='Enter your password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className='bg-white border-2 border-black text-black w-[300px] h-[40px] rounded-lg self-center mt-6'
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
