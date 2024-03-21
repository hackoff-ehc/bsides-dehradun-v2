'use client';
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Ticket } from '@/components/Tickets/Ticket';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

const cardsContent = [
  {
    title: 'Student Pass',
    price: '1xxx',
    rules: [
      {
        rule: 'Access to the Conference',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Breakfast, Lunch and Tea/Coffee',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Access to after party',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Access to the select 2 days of training',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Exclusive BSides Dehradun swags',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Certificate of Participation',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
    ],
  },
  {
    title: 'Individual Pass',
    price: '2xxx',
    rules: [
      {
        rule: 'Access to the Conference',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Breakfast, Lunch and Tea/Coffee',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Access to after party',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Access to the select 2 days of training',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Exclusive BSides Dehradun swags',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Certificate of Participation',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
    ],
  },
  {
    title: 'Professional Pass',
    price: '3xxx',
    rules: [
      {
        rule: 'Access to the Conference',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Breakfast, Lunch and Tea/Coffee',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Access to after party',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Access to the select 2 days of training',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Exclusive BSides Dehradun swags',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Certificate of Participation',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
    ],
  },
  {
    title: '2 Day Training Pass',
    price: '2xxxx',
    rules: [
      {
        rule: 'Access to the Conference',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Breakfast, Lunch and Tea/Coffee',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Access to after party',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Access to the select 2 days of training(1x of choice)',
        icon: (
          <IoCheckmarkCircleOutline className='text-green-600 text-[20px] sm:text-[22px] md:mt-1' />
        ),
        iconColor: true,
      },
      {
        rule: 'Exclusive BSides Dehradun swags',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Training Completion Certificate',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
    ],
  },
  {
    title: 'After Party Pass',
    price: '1xxx',
    rules: [
      {
        rule: 'Access to the Conference',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Breakfast, Lunch and Tea/Coffee',
        icon: <IoCheckmarkCircleOutline className='text-green-600 md:mt-1' />,
        iconColor: true,
      },
      {
        rule: 'Access to the select 2 days of training',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
      {
        rule: 'Access to after party(*already included in Professional Pass)',
        icon: (
          <IoCheckmarkCircleOutline className='text-green-600 text-[20px] sm:text-[22px] md:mt-1' />
        ),
        iconColor: true,
      },
      {
        rule: 'Exclusive BSides Dehradun swags',
        icon: <IoCloseCircleOutline className='text-red-600 md:mt-1' />,
        iconColor: false,
      },
    ],
  },
];

function SampleNextArrow(props: Readonly<{ className: any; style: any; onClick: any }>) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-150 duration-200`}
      style={{ ...style, position: 'absolute', right: '50px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: Readonly<{ className: any; style: any; onClick: any }>) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-150 duration-200`}
      style={{ ...style, position: 'absolute', left: '50px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export const TicketsCarousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='w-full'>
      <Slider {...settings}>
        {cardsContent.map((item) => (
          <div key={item.title} className='p-4'>
            <Ticket item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
