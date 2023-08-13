import React, { useState } from 'react';
import axios from 'axios';
import { Bugfender } from '@bugfender/sdk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataImage1 = new FormData();
      formDataImage1.append('name', name);
      formDataImage1.append('image', image1);
      formDataImage1.append('imageName', '1');

      const formDataImage2 = new FormData();
      formDataImage2.append('name', name);
      formDataImage2.append('image', image2);
      formDataImage2.append('imageName', '2');

      const [uploadResponse1, uploadResponse2] = await Promise.all([
        axios.post('http://localhost:8000/uploadImage', formDataImage1, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
        axios.post('http://localhost:8000/uploadImage', formDataImage2, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      ]);

      const response = await axios.post('http://localhost:8000/addStudent', {
        name,
        password
      });

      toast.success(`Student registered successfully. Roll ID: ${response.data.rollId}`);

      console.log(response.data);
      Bugfender.log(response.data);
    } catch (error) {
      console.error(error);
      Bugfender.log(error);
    }
  };

  return (
    <>
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
          <input type='file' accept='image/*' className='border-2 border-white rounded-lg p-2 mt-1' onChange={handleImage1Change} />
        </div>

        <div className='flex flex-col mt-4 w-[300px] self-center'>
          <label className='text-white text-lg self-start ml-2'>Upload Image 2</label>
          <input type='file' accept='image/*' className='border-2 border-white rounded-lg p-2 mt-1' onChange={handleImage2Change} />
        </div>

        <button
          className='bg-white border-2 border-black text-black w-[300px] h-[40px] rounded-lg self-center mt-10'
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
    <div className='w-[400px] mt-4 text-center mx-auto'>
      <p className='text-2xl'>
        Please remember your roll number that will pop up after you register successfully.
      </p>
    </div>
  </>
  );
};
