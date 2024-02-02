'use client';
import '@/styles/footer.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import Marquee from 'react-fast-marquee';

export const Footer = () => {
  return (
    <footer className='w-full lg:grid grid-cols-2 bg-[#000000B0] text-white px-3 md:px-[clamp(48px,7.78vw,112px)] py-4 md:py-8 lg:py-12 relative z-10 overflow-hidden'>
      <div className='footer-bg-text-container -top-[35%]'>
        <Marquee gradientWidth={10} speed={100}>
          <p>BSIDES &nbsp;</p>
        </Marquee>
      </div>
      <div className='footer-bg-text-container -bottom-[30%] left-7'>
        <Marquee gradientWidth={10} speed={100}>
          <p>DEHRADUN &nbsp; &nbsp;&nbsp;&nbsp;</p>
        </Marquee>
      </div>
      <div className='w-fit mx-auto lg:mx-0 lg:p-10'>
        <Link href='/'>
          <Image
            src='/assets/icons/bsides-dehradun.svg'
            alt='BSides Dehradun Logo'
            width={290}
            height={125}
          />
        </Link>
        <div className='flex gap-3 mt-4 justify-between'>
          <div className='border-2 border-white rounded-full p-2 transition-colors hover:bg-[rgba(236,0,51,0.30)] hover:border-[rgba(236,0,51,0.30)]'>
            <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
              <IoLogoInstagram />
            </Link>
          </div>
          <div className='border-2 border-white rounded-full p-2 transition-colors hover:bg-[rgba(236,0,51,0.30)] hover:border-[rgba(236,0,51,0.30)]'>
            <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
              <FaFacebook />
            </Link>
          </div>
          <div className='border-2 border-white rounded-full p-2 transition-colors hover:bg-[rgba(236,0,51,0.30)] hover:border-[rgba(236,0,51,0.30)]'>
            <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
              <FaYoutube />
            </Link>
          </div>
          <div className='border-2 border-white rounded-full p-2 transition-colors hover:bg-[rgba(236,0,51,0.30)] hover:border-[rgba(236,0,51,0.30)]'>
            <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
              <BsTwitterX />
            </Link>
          </div>
          <div className='border-2 border-white rounded-full p-2 transition-colors hover:bg-[rgba(236,0,51,0.30)] hover:border-[rgba(236,0,51,0.30)]'>
            <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full leading-normal py-10 text-center lg:text-left'>
        <h1 className='h1-text font-bold'>Contact Us</h1>
        <p className='font-semibold text-sm md:text-base mb-4'>
          Do you have question about sponsorship or something else?{' '}
          <br className='hidden md:block' />
          You&apos;re free to mail us.
        </p>
        <div className='flex flex-wrap gap-2 md:gap-5'>
          {['sponsor@bsidesderhadun.com', 'hello@bsidesderhadun.com'].map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className='px-4 py-3 border-[1.5px] border-solid border-[#EC0033] rounded-[20px] cursor-pointer grow lowercase text-center transition-colors hover:bg-[rgba(236,0,51,0.30)]'
            >
              {email}
            </a>
          ))}
        </div>
      </div>
      <svg
        width='47'
        height='188'
        viewBox='0 0 47 188'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='hidden md:block absolute top-8 lg:top-20 right-6 cursor-pointer'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <path
          d='M21.751 186C21.751 186.69 22.3106 187.25 23.001 187.25C23.6913 187.25 24.251 186.69 24.251 186L21.751 186ZM23.8849 22.1161C23.3967 21.628 22.6052 21.628 22.1171 22.1161L14.1621 30.0711C13.674 30.5592 13.674 31.3507 14.1621 31.8388C14.6503 32.327 15.4417 32.327 15.9299 31.8388L23.001 24.7678L30.072 31.8388C30.5602 32.327 31.3516 32.327 31.8398 31.8388C32.328 31.3507 32.328 30.5592 31.8398 30.0711L23.8849 22.1161ZM24.251 186L24.251 23L21.751 23L21.751 186L24.251 186Z'
          fill='white'
        />
        <mask id='path-2-inside-1_1_927' fill='white'>
          <path d='M27.2552 44.6049C27.3617 45.1468 27.8881 45.5019 28.4249 45.372C33.6795 44.1 38.3304 41.0139 41.546 36.6412C44.9594 31.9994 46.5069 26.2458 45.8824 20.518C45.258 14.7902 42.5071 9.50522 38.1737 5.708C33.8402 1.91078 28.2397 -0.122217 22.4795 0.0109827C16.7193 0.144183 11.2188 2.43388 7.0655 6.42735C2.91222 10.4208 0.408549 15.8273 0.0495402 21.5779C-0.309468 27.3284 1.50231 33.0043 5.12665 37.4834C8.54088 41.7027 13.3294 44.5706 18.6373 45.5983C19.1795 45.7033 19.6889 45.3242 19.7702 44.7779L19.7884 44.6558C19.8698 44.1095 19.4922 43.6032 18.9505 43.4958C14.1686 42.548 9.85709 39.9535 6.77743 36.1476C3.48762 32.082 1.84306 26.9299 2.16894 21.7102C2.49481 16.4904 4.76738 11.5829 8.53732 7.95807C12.3073 4.3332 17.3001 2.25484 22.5286 2.13393C27.7571 2.01303 32.8407 3.85838 36.7742 7.30511C40.7076 10.7518 43.2046 15.549 43.7714 20.7482C44.3382 25.9473 42.9336 31.1698 39.8352 35.3831C36.9348 39.3273 32.7477 42.1183 28.0148 43.2862C27.4786 43.4185 27.1249 43.9417 27.2314 44.4837L27.2552 44.6049Z' />
        </mask>
        <path
          d='M27.2552 44.6049C27.3617 45.1468 27.8881 45.5019 28.4249 45.372C33.6795 44.1 38.3304 41.0139 41.546 36.6412C44.9594 31.9994 46.5069 26.2458 45.8824 20.518C45.258 14.7902 42.5071 9.50522 38.1737 5.708C33.8402 1.91078 28.2397 -0.122217 22.4795 0.0109827C16.7193 0.144183 11.2188 2.43388 7.0655 6.42735C2.91222 10.4208 0.408549 15.8273 0.0495402 21.5779C-0.309468 27.3284 1.50231 33.0043 5.12665 37.4834C8.54088 41.7027 13.3294 44.5706 18.6373 45.5983C19.1795 45.7033 19.6889 45.3242 19.7702 44.7779L19.7884 44.6558C19.8698 44.1095 19.4922 43.6032 18.9505 43.4958C14.1686 42.548 9.85709 39.9535 6.77743 36.1476C3.48762 32.082 1.84306 26.9299 2.16894 21.7102C2.49481 16.4904 4.76738 11.5829 8.53732 7.95807C12.3073 4.3332 17.3001 2.25484 22.5286 2.13393C27.7571 2.01303 32.8407 3.85838 36.7742 7.30511C40.7076 10.7518 43.2046 15.549 43.7714 20.7482C44.3382 25.9473 42.9336 31.1698 39.8352 35.3831C36.9348 39.3273 32.7477 42.1183 28.0148 43.2862C27.4786 43.4185 27.1249 43.9417 27.2314 44.4837L27.2552 44.6049Z'
          stroke='#EC0033'
          stroke-width='5'
          mask='url(#path-2-inside-1_1_927)'
        />
      </svg>
    </footer>
  );
};
