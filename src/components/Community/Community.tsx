import React from 'react';
import Link from 'next/link';

const Community = () => {
  return (
    <div className='w-full md:text-center text-white p-10 lg:px-40 py-24 mt-96 pt-96'>
      <h1 className='text-4xl md:text-5xl font-semibold leading-20 md:leading-[60px]'>
        A Conference for and by
        <br />
        <span className='text-[#6104D7] font-bold'>Cybersecurity</span> community.
      </h1>
      <p className='my-3 text-gray-300 text-[14px]'>
        Security BSides is a community-driven cybersecurity conference where people from all over
        the world come together to collaborate, learn, and share their knowledge. We are responsible
        for organizing an independent BSides-approved event for Dehradun.
      </p>
      <div className='border-2 backdrop-blur-lg border-[#6104D7] max-w-[120px] text-center p-3 rounded-xl md:mx-auto my-5 cursor-pointer hover:bg-violet-900 hover:scale-105 shadow-2xl hover:shadow-violet-800 hover:border-2'>
        <Link href='/coming-soon'>About Us</Link>
      </div>
    </div>
  );
};

export default Community;
