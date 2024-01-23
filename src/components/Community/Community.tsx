import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Globe from '../../../public/assets/icons/07.svg';

const Community = () => {
  return (
    <>
      <div className=' mt-[40vh] md:mt-[110vh] lg:mt[100vh]  grid grid-cols-4 grid-rows-4 w-[100vw] h-[40vh] md:h-[70vh] overflow-hidden'>
        <section className='w-[80%] lg:w-[80%] row-start-1 col-start-1 col-end-5 justify-start md:text-center text-white pl-2 md:px-[clamp(48px,7.78vw,112px)] py-4 md:py-8 lg:py-12  '>
          <h2 className='h2-text w-3/5 leading-[133.333%] text-left font-bold mb-[16px]'>
            A Conference for and <br /> by
            <span className='text-[#6104D7]'> Cybersecurity</span> community.
          </h2>
          <p className='mb-[24px] text-left text-[rgba(255,255,255,0.70)] pl-0 text-[12px] md:text-[14px] leading-[150%] lg:w-3/5 '>
            Security BSides is a community-driven cybersecurity conference where people from all
            over the world come together to collaborate, learn, and share their knowledge. We are
            responsible for organizing an independent BSides-approved event for Dehradun.
          </p>
          <button className='primary-btn left-3 lg:left-28 my-5 absolute md:mx-0 '>About Us</button>
        </section>
        <Image
          src={Globe}
          className='col-start-3 col-span-2 row-start-2 row-span-2  h-[25vh] opacity-20 lg:col-start-4 lg:h-[80vh] lg:pl-[20%] lg:row-start-1 lg:opacity-60 lg:w-full'
          alt='No Globe Image Feeded'
        />
      </div>
    </>
  );
};

export default Community;
