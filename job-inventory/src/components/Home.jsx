import React from 'react';

const Home = () => {
  return (
    <div className=' flex gap-x-20 px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='mr-8 my-7'>
          <h1 className='text-6xl font-bold	tracking-wide'>One Step <br /> Closer To Your <br /> 
          <span className='text-blue-400'>Dream Job</span></h1>
          <p className='text-lg my-2.5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
          <button className='btn'>Get Started</button>
        </div>
        <div>
          <img className='h-96 mt-0' src="../src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
    </div>
  );
};

export default Home;