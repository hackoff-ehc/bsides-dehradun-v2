'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import './Form.css';

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const defaultFormData = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
};

export const Connect = () => {
  const [innerForm, setInnerForm] = useState(true);
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const allFormFields = Object.keys(formData);
    for (let i = 0; i < allFormFields.length; i++) {
      setErrors((prev) => ({
        ...prev,
        // @ts-ignore
        [allFormFields[i]]: !formData[allFormFields[i]]?.trim() ? prev[allFormFields[i]] : '',
      }));
    }
  }, [formData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const allFormFields = Object.keys(formData);
      let canSubmit = true;
      for (let i = 0; i < allFormFields.length; i++) {
        // @ts-ignore
        if (!formData[allFormFields[i]]?.trim()) {
          canSubmit = false;
          setErrors((prev) => ({
            ...prev,
            [allFormFields[i]]: `This field is required.`,
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [allFormFields[i]]: '',
          }));
        }
      }
      const blockedDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
      const domain = formData.email.split('@')[1];
      if (!emailRegEx.test(formData.email)) {
        canSubmit = false;
        setErrors((prev) => ({ ...prev, email: 'Please provide a valid email address.' }));
      } else if (blockedDomains.includes(domain)) {
        canSubmit = false;
        setErrors((prev) => ({
          ...prev,
          email: 'Please use your company email address.',
        }));
      }
      if (!canSubmit) return;
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...formData, access_key: '6448a856-4de9-42cd-a6a4-2aa8611051fc' }),
      });
      const result = await response.json();
      if (result.success) {
        setFormData(defaultFormData);
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className='section-padding section-width-constraint text-white'>
      <h1 className='h1-text font-semibold mb-5 md:mb-10'>Let&apos;s connect</h1>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-[40px] rounded-[10px] bg-[#5e5e5e24] fill-[#5e5e5e24] backdrop-blur-[2.5px] stroke-[1.5px] stroke-[#ffffff5c] p-4 md:p-[40px]'>
        <div className='formCon'>
          <div className='text-[14px] md:text-[16px]'>
            <div className='flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-5'>
              <button
                onClick={() => {
                  setInnerForm(true);
                }}
                className={` ${
                  innerForm ? 'bg-[#6104D7] text-white' : 'bg-white text-black'
                } py-3 px-4 md:py-4 md:px-6 border border-[#6104D7] shadow-2xl rounded-full flex items-center justify-center gap-2 flex-grow`}
              >
                <span>Message us directly</span>
                <IoIosInformationCircleOutline className='text-xl' />
              </button>
              <button
                onClick={() => {
                  setInnerForm(false);
                }}
                className={` ${
                  innerForm ? 'bg-white text-black' : 'bg-[#6104D7] text-white'
                } py-2 md:py-4 px-4 md:px-6 border border-[#6104D7] shadow-2xl rounded-full flex items-center justify-center gap-2 flex-grow`}
              >
                <span>Schedule a meet</span> <IoIosInformationCircleOutline className='text-xl' />
              </button>
            </div>
            {innerForm ? (
              <form onSubmit={handleSubmit} action='#' className='space-y-2'>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Name</label>
                  <input
                    className='mt-2 block rounded-md border-2 border-white bg-black px-3 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                    type='text'
                    style={errors.name ? { border: '2px solid red' } : { border: 'inherit' }}
                    name='name'
                    id='name'
                    placeholder='Full name'
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  />
                  <p className='text-[#a50000] text-sm mb-0 mt-[2px]'>{errors.name}</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='mt-2 block rounded-md border border-white bg-black px-3 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='you@company.com'
                    style={errors.email ? { border: '2px solid red' } : { border: 'inherit' }}
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                  <p className='text-[#a50000] text-sm mb-0 mt-[2px]'>{errors.email}</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='company'>Company</label>
                  <input
                    className='mt-2 block rounded-md border border-white bg-black px-3 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                    type='text'
                    name='company'
                    id='company'
                    placeholder='Company name'
                    style={errors.company ? { border: '2px solid red' } : { border: 'inherit' }}
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  />
                  <p className='text-[#a50000] text-sm mb-0 mt-[2px]'>{errors.company}</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='subject'>Subject</label>
                  <input
                    className='mt-2 block rounded-md border border-white bg-black px-3 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7]'
                    type='text'
                    style={errors.subject ? { border: '2px solid red' } : { border: 'inherit' }}
                    name='subject'
                    id='subject'
                    placeholder='How can we help?'
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  />
                  <p className='text-[#a50000] text-sm mb-0 mt-[2px]'>{errors.subject}</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    className='mt-2 resize-none block rounded-md bg-black p-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6104D7] outline-none border border-white'
                    rows={3}
                    maxLength={200}
                    style={errors.message ? { border: '2px solid red' } : { border: 'inherit' }}
                    name='message'
                    id='message'
                    placeholder='Your messege'
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  />
                  <p className='text-[#a50000] text-sm mb-0 mt-[2px]'>{errors.message}</p>
                </div>
                <button type='submit' className='primary-btn block mx-auto !mt-3 md:!mt-8'>
                  Send Message
                </button>
              </form>
            ) : (
              <div className='text-center'>
                <Image
                  src='/assets/images/schedule-meeting.svg'
                  alt='Loading img...'
                  width={350}
                  height={315}
                  className='mx-auto'
                />
                <h2 className='text-3xl font-semibold my-8'>Plan ahead</h2>
                <p className='para-text'>
                  Click the button below to schedule a meeting with the BSides Dehradun team.
                </p>
                <button
                  className='primary-btn block mx-auto !mt-3 md:!mt-8'
                  onClick={() => {
                    // @ts-ignore
                    if (Calendly) {
                      // @ts-ignore
                      Calendly.initPopupWidget({
                        url: 'https://calendly.com/bsides-dehradun-2024/30min',
                      });
                      return false;
                    }
                  }}
                >
                  BOOK A MEETING
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='mapContainer'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16838.740662631302!2d78.02409859358902!3d30.32138836830718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1703190907554!5m2!1sen!2sin'
            className='map'
            width='600'
            height='450'
            style={{ border: '0' }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </section>
  );
};
