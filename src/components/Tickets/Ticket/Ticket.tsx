import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

import Link from 'next/link';

export const Ticket = (props: {
  item: { title: string; price: string; rules: { rule: string; icon: any; iconColor: boolean }[] };
}) => {
  return (
    <div className='p-5 md:p-8 rounded-lg mx-auto bg-[#5e5e5e24] fill-[#5e5e5e24] backdrop-blur-[2.5px] stroke-[1.5px] stroke-[#ffffff5c]'>
      <h2 className=' md:text-2xl font-semibold'>{props.item.title} </h2>
      <p className='h1-text font-semibold rounded-full flex items-center justify-start gap-1 my-3'>
        <FaRupeeSign className='text-4xl md:text-5xl text-violet-700' />
        <span className='bg-gradient-to-r from-violet-600 to-red-600 to-90% bg-clip-text text-transparent'>
          {props.item.price}
        </span>
      </p>
      <h2 className='text-xl mb-3'>Deliverables</h2>
      <div>
        {props.item.rules.map((rule) => (
          <li
            key={rule.rule}
            className={` text-xs sm:text-sm md:text-sm text-gray-200 ${
              !rule.iconColor && 'text-gray-400'
            } mb-2 flex items-start justify-start gap-2`}
          >
            <span>{rule.icon}</span>
            <span>{rule.rule}</span>
          </li>
        ))}
      </div>
      <Link href='/coming-soon'>
        <button className='my-4 mx-auto w-40 tickets text-xl h-11 rounded-lg bg-gradient-to-r from-violet-600 to-red-600 shadow-xl'>
          Coming soon
        </button>
      </Link>
    </div>
  );
};
