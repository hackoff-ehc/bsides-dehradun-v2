import React from 'react';
import Link from 'next/link';

const Community = () => {
  return (
    <section className='w-full md:text-center text-white px-3 md:px-[clamp(48px,7.78vw,112px)] py-4 md:py-8 lg:py-12 mt-[100vh]'>
      <h2 className='h2-text leading-[133.333%] font-bold mb-[16px]'>
        A Conference for and by
        <br />
        <span className='text-[#6104D7]'>Cybersecurity</span> community.
      </h2>
      <p className='mb-[24px] text-[rgba(255,255,255,0.70)] text-[12px] md:text-[14px] leading-[150%] lg:max-w-[80%] lg:mx-auto'>
        Security BSides is a community-driven cybersecurity conference where people from all over
        the world come together to collaborate, learn, and share their knowledge. We are responsible
        for organizing an independent BSides-approved event for Dehradun.
      </p>
      <button className='primary-btn md:mx-auto'>About Us</button>
    </section>
  );
};

export default Community;
