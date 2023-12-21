'use client';
import React from 'react';
import Logo from '../../assets/navLogo.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import { VscArrowCircleUp } from 'react-icons/vsc';

const Footer = () => {
  return (
    <footer className='w-full'>
      lorem3000
      <div className=' text-white block lg:grid grid-cols-2 pt-16 p-10 sm:px-20 border-t-4 border-violet-900'>
        <div className='w-full lg:p-10'>
          <Link href='/coming-soon'>
            <Image className='w-60' src={Logo} alt='No Image Available' />
          </Link>
          <div className='flex gap-3 my-4'>
            <div className='border-2 border-white rounded-full p-2 hover:bg-[#EC0033] hover:border-red-500 '>
              <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
                <IoLogoInstagram />
              </Link>
            </div>
            <div className='border-2 border-white rounded-full p-2 hover:bg-[#EC0033] hover:border-red-500 '>
              <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
                <FaFacebook />
              </Link>
            </div>
            <div className='border-2 border-white rounded-full p-2 hover:bg-[#EC0033] hover:border-red-500 '>
              <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
                <FaYoutube />
              </Link>
            </div>
            <div className='border-2 border-white rounded-full p-2 hover:bg-[#EC0033] hover:border-red-500 '>
              <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
                <BsTwitterX />
              </Link>
            </div>
            <div className='border-2 border-white rounded-full p-2 hover:bg-[#EC0033] hover:border-red-500 '>
              <Link className='text-2xl cur cursor-pointer rounded-full ' href='/coming-soon'>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full leading-normal py-10'>
          <VscArrowCircleUp
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            className=' absolute right-0 text-3xl mr-10 md:mr-20 mt-2 text-slate-700 hover:text-white'
          />
          <h1 className='text-4xl md:text-5xl font-semibold '>Contact Us</h1>

          <p className='text-gray-300 text-sm font-semibold leading-[30px]'>
            Do you have question about sponsorship or something else?
            <br />
            You’re free to mail us.
          </p>
          <div className='block sm:flex gap-5 pr-20'>
            <div className='px-6 py-2 w-auto border border-[#EC0033] rounded-2xl hover:scale-[1.01] cursor-pointer my-3 text-center'>
              <Link href='/coming-soon'>Sponsor@bsidesderhadun.com</Link>
            </div>
            <div className='px-10 py-2 w-auto border border-[#EC0033] rounded-2xl bg-red-900 hover:scale-[1.01] cursor-pointer my-3 text-center'>
              <Link href='/coming-soon'>hello@bsidesderhadun.</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
