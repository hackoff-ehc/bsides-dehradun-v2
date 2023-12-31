'use client';
import React, { useState, useEffect } from 'react';
import MeetingImg from '../../assets/Meeting.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const Form = () => {
  const [innerForm, setInnerForm] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [help, setHelp] = useState('');
  const [des, setDes] = useState('');
  const [error, setError] = useState({
    email: '',
    name: '',
    company: '',
    help: '',
    des: '',
  });
  useEffect(() => {
    if (email === '') {
      setError((preverror) => ({
        ...preverror,
        email: '',
      }));
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError((preverror) => ({
        ...preverror,
        email: 'Invalid Email Format',
      }));
    } else {
      setError((preverror) => ({
        ...preverror,
        email: '',
      }));
    }
    if (name) {
      setError((preverror) => ({
        ...preverror,
        name: '',
      }));
    }
    if (company) {
      setError((preverror) => ({
        ...preverror,
        company: '',
      }));
    }
    if (help) {
      setError((preverror) => ({
        ...preverror,
        help: '',
      }));
    }
    if (des) {
      setError((preverror) => ({
        ...preverror,
        des: '',
      }));
    }
    // console.log(error)
  }, [email, name, des, help, company]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blockedDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
    const domain = email.split('@')[1];

    if (!name) {
      setError((preverror) => ({
        ...preverror,
        name: 'Enter a Valid Name',
      }));
    }
    if (!email) {
      setError((preverror) => ({
        ...preverror,
        email: 'Enter a Valid Email Adress',
      }));
    } else if (blockedDomains.includes(domain)) {
      setError((preverror) => ({
        ...preverror,
        email: 'Personal emails are not allowed. Please use your company email.',
      }));
    }
    if (!company) {
      setError((prev) => ({
        ...prev,
        company: 'Kindly Enter the Company Name',
      }));
    }
    if (!help) {
      setError((prev) => ({
        ...prev,
        help: 'Kindly Fill The Subject',
      }));
    }
    if (!des) {
      setError((prev) => ({
        ...prev,
        des: 'Kindly Provide a Description',
      }));
    }
    if (error.name && error.company && error.des && error.help && error.email) {
      return 'Code Contains error';
    } else {
      // API submitting
      const formData = new FormData(event.target);
      formData.append('access_key', 'ef61b607-b249-4909-9cb6-5a8a4c83bc2c');

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
      event.target.reset();
    }
  };

  return (
    <>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16838.740662631302!2d78.02409859358902!3d30.32138836830718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1703190907554!5m2!1sen!2sin'
        className='w-full absolute z-[-1] mt-[23%] '
        width='600'
        height='450'
        style={{ border: '0' }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>

      <div className='w-full p-10 text-white'>
        <h1 className='text-4xl font-semibold m-5 md:m-10'>Let&apos;s connect</h1>

        <div className='w-full md:w-[60%] lg:w-[45%] rounded-xl backdrop-blur-lg shadow-sm shadow-white m-auto lg:ms-36 '>
          <div className='flex gap-3 px-10 pt-8'>
            <div
              onClick={() => {
                setInnerForm(true);
              }}
              className={` ${
                innerForm ? 'bg-violet-800' : 'bg-transparent'
              } px-3 py-2  w-full  border border-[#6104D7] shadow-2xl rounded-full hover:scale-[1.01] cursor-pointer my-3 text-center  inline-flex items-center`}
            >
              massege us directly <IoIosInformationCircleOutline className=' m-1' />
            </div>
            <div
              onClick={() => {
                setInnerForm(false);
              }}
              className={` ${
                innerForm ? 'bg-transparent' : 'bg-violet-800'
              } px-3 py-2  w-full  border border-[#6104D7] shadow-2xl rounded-full hover:scale-[1.01] cursor-pointer my-3 inline-flex items-center`}
            >
              schdule a meet <IoIosInformationCircleOutline className='m-1' />
            </div>
          </div>
          {innerForm ? (
            <form onSubmit={handleSubmit} action='#' className='px-8 p-5 space-y-5'>
              <div>
                <label htmlFor='name' className='text-base font-medium'>
                  Name
                </label>
                <input
                  className='mt-2 h-10 w-full rounded-md border-2 border-white bg-black ps-3 py-1 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                  type='text'
                  style={error.name ? { border: '2px solid red' } : { border: 'inherit' }}
                  name='name'
                  placeholder='Full name'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
                <p className='text-red-800 text-sm mb-0'>{error.name}</p>
              </div>
              <div>
                <label htmlFor='email' className='text-base font-medium'>
                  Email
                </label>
                <input
                  className='mt-2 h-10 w-full rounded-md border border-white bg-black ps-3 py-1 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                  type='email'
                  name='email'
                  placeholder='Email'
                  style={error.email ? { border: '2px solid red' } : { border: 'inherit' }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <p className='text-red-800 text-sm mb-0'>{error.email}</p>
              </div>
              <div>
                <label htmlFor='company' className='text-base font-medium'>
                  Company
                </label>
                <input
                  className='mt-2 h-10 w-full rounded-md border border-white bg-black ps-3 py-1 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                  type='text'
                  name='company'
                  placeholder='Company name'
                  style={error.company ? { border: '2px solid red' } : { border: 'inherit' }}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                ></input>
                <p className='text-red-800 text-sm mb-0'>{error.company}</p>
              </div>
              <div>
                <label htmlFor='subject' className='text-base font-medium'>
                  Subject
                </label>
                <input
                  className='mt-2 h-10 w-full rounded-md border border-white bg-black ps-3 py-1 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                  type='text'
                  style={error.help ? { border: '2px solid red' } : { border: 'inherit' }}
                  name='subject'
                  placeholder='How can we help?'
                  onChange={(e) => {
                    setHelp(e.target.value);
                  }}
                ></input>
                <p className='text-red-800 text-sm mb-0'>{error.help}</p>
              </div>
              <div>
                <label htmlFor='textarea' className='text-base font-medium'>
                  Messege
                </label>
                <div className=''>
                  <textarea
                    className='mt-2 h-200 w-full rounded-md bg-black p-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7] outline-none border border-white'
                    rows='5'
                    type='text'
                    style={error.des ? { border: '2px solid red' } : { border: 'inherit' }}
                    name='textarea'
                    placeholder='Your messege'
                    onChange={(e) => {
                      setDes(e.target.value);
                    }}
                  ></textarea>
                  <p className='text-red-800 text-sm mb-0'>{error.des}</p>
                </div>
              </div>

              <div className='text-center'>
                <input
                  style={{ border: '1px solid #6104D7' }}
                  type='submit'
                  value='SEND MESSAGE'
                  className='border-2 w-52 m-auto text-sm backdrop-blur-lg text-center p-3 rounded-xl my-5 backdrop:blur-xl cursor-pointer hover:bg-violet-800 '
                ></input>
              </div>
            </form>
          ) : (
            <div className='px-8 p-5 text-center'>
              <Image src={MeetingImg} alt='Loading img...' />
              <h2 className='text-3xl font-semibold my-8'>Plane ahead</h2>
              <p className='text-sm P-10'>
                Click the button below to schedule a meeting with the BSides Dehradun team.
              </p>
              <div className='border-2 w-52 text-sm backdrop-blur-lg border-[#6104D7] text-center p-3 rounded-xl md:mx-auto my-5 cursor-pointer   bg-violet-800 '>
                <Link href='/coming-soon'>BOOK A MEETING</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
