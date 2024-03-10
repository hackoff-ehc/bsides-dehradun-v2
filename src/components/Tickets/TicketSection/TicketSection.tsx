'use client';

import React from 'react';
import { TicketsCarousel } from '../TicketsCarousel';

const missions = [
  {
    title: 'Pass Inclusion',
    description: [
      'Each pass type provides specific benefits, including access to talks, workshops, meals, and social events.',
      'Refer to the pass descriptions for detailed inclusions',
    ],
  },
  {
    title: 'Registration  Fees and Payment Methods',
    description: [
      'Registration is facilitated through Townscript.',
      'All rates quoted include GST.',
      ' Additional charges apply for payment gateway services. ',
      ' Travel and accommodation costs are not included in the ticket fee.',
    ],
  },
  {
    title: 'Group Registrations',
    description: [
      ' Organizations with 4 or more participants can request a group discount code.      ',
      ' Contact helpdesk@bsidesdehradun.com before registering on townscript.      ',
      ' Once registered and paid, participants are not eligible for a discount code or refund      ',
    ],
  },
  {
    title: 'Refund Policy',
    description: [' No refunds will be provided after purchasing any pass.      '],
  },
  {
    title: 'Code of Conduct',
    description: [' Participants are expected to adhere to the BSides Dehradun Code of Conduct'],
  },
  {
    title: 'Data Privacy',
    description: [
      ' Attendee data will be collected for registration purposes only.      ',
      ' Data will be used solely for event-related communication.      ',
      ' Information will be stored securely and not shared with third parties.',
    ],
  },
  {
    title: 'Age Verification',
    description: [
      ' If alcohol will be served, age verification will be conducted.      ',
      ' Participants must be 21 years old to consume alcoholic beverages.',
    ],
  },
  {
    title: 'Covid-19 Protocols',
    description: [
      'BSides Dehradun 0x01 will follow all local health guidelines and safety measures related to COVID-19.',
    ],
  },
  {
    title: 'Liability Waiver',
    description: [
      'A liability waiver will be included to protect organizers from legal issues arising during the event.      ',
    ],
  },
  {
    title: 'Right to Refuse Service',
    description: [
      ' BSides Dehradun reserves the right to refuse service to any individual who violates these Terms & Conditions or the event’s Code of Conduct. Such refusal may occur without prior warning or explanation.      ',
      'If any condition outlined in these Terms & Conditions becomes invalid, the remaining conditions will remain in effect',
    ],
  },
  {
    title: 'General',
    description: [
      'These Terms & Conditions apply to all event participants, including attendees,speakers, sponsors, and exhibitors.      ',
      'The opinions expressed by any event attendee, speaker, exhibitor, or sponsor do not necessarily reflect those of BSides Dehradun.      ',
      'All participants are solely responsible for the content of their individual or corporate presentations, marketing materials, and advertising.',
    ],
  },
];

export const TicketSection = () => {
  return (
    <div className=''>
      <div className=' section-padding'>
        <h1 className='bg-gradient-to-r from-violet-700 to-red-600 to-90% bg-clip-text text-transparent h2-text sm:text-4xl md:text-5xl font-bold md:font-bold md:my-5'>
          BSides Dehradun 0x01 Passes
        </h1>
        <p className='mt-3 text-sm sm:text-xl md:text-[1.7rem] para-text text-white font-semibold sm:leading-[150%]'>
          Grab Your Pass to BSides Dehradun 2024: The Premier Security Conference
        </p>
      </div>
      <div className='section-padding'>
        <h2 className='h2-text md:h1-text font-semibold mb-6 md:mb-9'>Group Discount</h2>
        <div className='px-3'>
          <div className='flex w-[100%] rounded-md md:rounded-xl bg-gradient-to-r from-violet-900 to-red-900 my-1'>
            <div className='w-[30%] bg-gree border-e py-3 md:py-8 text-center text-sm md:text-3xl rounded-s-lg text-slate-300'>
              Quantity
            </div>
            <div className='w-[70%] bg-blu border-s py-3 md:py-8 text-center text-sm md:text-3xl rounded-e-lg text-slate-300'>
              For 3 or more participants
            </div>
          </div>
          <div className='flex w-[100%] rounded-md bg-[#3f2f37] '>
            <div className='w-[30%] bg-gree border-e py-3 md:py-8 text-center text-sm md:text-xl rounded-s-lg'>
              Discount
            </div>
            <div className='w-[70%] bg-blu border-s py-3 md:py-8 text-center text-sm md:text-xl rounded-e-lg'>
              5%
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='h2-text md:h1-text font-semibold section-padding'>Passes</h2>
        <TicketsCarousel />
      </div>
      <div className='section-padding'>
        <h2 className='h2-text font-bold '>Terms & Conditions</h2>
        <p className='text-gray-300 text-sm md:text-xl font-light leading-[150%] mt-5'>
          When you register, you are explicitly consenting to comply with the Terms and Conditions
          established by BSides Dehradun. These terms may be updated periodically by BSides Dehradun
          and can be found here:
        </p>

        <div>
          {missions.map((mission, index) => (
            <div key={index} className='my-10'>
              <h3>
                <span className='text-3xl font-bold bg-gradient-to-r from-violet-700 to-red-600 bg-clip-text text-transparent'>
                  {mission.title}
                </span>
              </h3>
              <ul className='my-5'>
                {mission.description.map((item, index) => (
                  <li key={index} className='flex gap-4 items-start p-[0.15rem] '>
                    <span className='block bg-white rounded-full mt-2 sm:mt-3 min-w-[4px] min-h-[4px]' />
                    <p className='text-sm md:text-lg text-gray-200'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
