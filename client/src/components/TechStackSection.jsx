import React from 'react';

export const TechStackSection = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-row gap-20 justify-center'>
        <img src="/techStack/react.png" alt="" className='h-20 mt-8' />
        <img src="/techStack/tailwind.png" alt="" className='h-[160px]' />
        <img src="/techStack/node.png" alt="" className='h-[160px]' />
      </div>
      <div className='flex flex-row gap-20 justify-center mt-8'>
        <img src="/techStack/express.png" alt="" className='h-[160px]' />
        <div className='h-20 w-60 bg-blue-900 border-2 border-black rounded-lg flex justify-center items-center mt-10'>
          <span className='text-white text-2xl'>Face-api.js</span>
        </div>
      </div>
    </div>
  );
};
