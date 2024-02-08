import React from 'react';
import Image from 'next/image';
import Globe from '../../../../public/assets/icons/07.svg';
import Link from 'next/link';

export const Community = () => {
  return (
    <>
      <section className='section-padding pr-0 text-white overflow-hidden'>
        <div className='relative'>
          <h2 className='h2-text leading-[112%] text-left font-bold mb-[26px] md:mb-[40px] md:leading-[148%]'>
            A Conference for and <br /> by
            <span className='text-[#6104D7]'> Cybersecurity</span> community.
          </h2>
          <p className='mb-[24px] text-left pl-0 para-text leading-[137%] max-w-[90%] md:max-w-[60%] lg:max-w-[70%]'>
            Security BSides is a community-driven cybersecurity conference where people from all
            over the world come together to collaborate, learn, and share their knowledge. We are
            responsible for organizing an independent BSides-approved event for Dehradun.
          </p>
          <Link href='/about-us' className='primary-btn mt-[32px] mr-auto md:mt-[36px]'>
            About Us
          </Link>
          <Image
            src={Globe}
            className='absolute top-[10%] right-0 max-h-full opacity-20 translate-x-[15%] md:top-0 md:translate-x-0 md:opacity-70 md:max-h-none'
            alt=''
          />
        </div>
      </section>
    </>
  );
};
