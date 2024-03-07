import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

import Link from 'next/link';

export const Ticket = (props: { price: string; tag: string }) => {
  return (
    <div className='p-8 rounded-lg mx-auto bg-[#5e5e5e24] fill-[#5e5e5e24] backdrop-blur-[2.5px] stroke-[1.5px] stroke-[#ffffff5c] m-2'>
      <h2 className=' md:text-3xl font-semibold'>{props.tag} </h2>
      <p className='text-4xl md:h1-text font-semibold rounded-full flex items-center justify-start gap-1 my-5'>
        <FaRupeeSign className='text-4xl md:text-5xl text-violet-700' />
        <span className='bg-gradient-to-r from-violet-600 to-red-600 to-90% bg-clip-text text-transparent'>
          {props.price}
        </span>
      </p>
      <h2 className='text-2xl mb-3'>Deliverables</h2>
      <div>
        <li className='text-sm md:text-lg text-gray-200 my-3 flex items-start justify-start gap-2'>
          <IoCheckmarkCircleOutline className='text-green-600 text-xl md:mt-1' />
          <span>Access to the Conference</span>
        </li>

        <li className='text-sm md:text-lg text-gray-200 my-3 flex items-start justify-start gap-2'>
          <IoCheckmarkCircleOutline className='text-green-600 text-xl md:mt-1' />
          <span>Breakfast, Lunch and Tea/Coffee</span>
        </li>

        <li className='text-sm md:text-lg text-gray-400 my-3 flex items-start justify-start gap-2'>
          <IoCloseCircleOutline className='text-red-700 text-xl md:mt-1' />
          <span>Access to after party</span>
        </li>

        <li className='text-sm md:text-lg text-gray-200 my-3 flex items-start justify-start gap-2'>
          <IoCheckmarkCircleOutline className='text-green-600 text-xl md:mt-1' />
          <span>Exclusive BSides Dehradun swags</span>
        </li>

        <li className='text-sm md:text-lg text-gray-200 my-3 flex items-start justify-start gap-2'>
          <IoCheckmarkCircleOutline className='text-green-600 text-xl md:mt-1' />
          <span> Certificate of Participation</span>
        </li>
      </div>
      <Link href='/coming-soon'>
        <button className='my-4 sm:p tickets text-xl  h-11 rounded-lg bg-gradient-to-r from-violet-600 to-red-600 shadow-xl'>
          Buy Now
        </button>
      </Link>
    </div>
  );
};
