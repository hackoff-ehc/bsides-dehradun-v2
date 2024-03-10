'use client';
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Ticket } from '@/components/Tickets/Ticket';

const cardsContent = [
  {
    title: 'Individual Pass',
    price: '2999',
  },
  {
    title: 'After Party Pass',
    price: '1999',
  },
  {
    title: 'Professional Pass ',
    price: '3999',
  },
  {
    title: '2 days Training Pass ',
    price: '29999',
  },
  {
    title: 'Student Pass',
    price: '1999',
  },
];

function SampleNextArrow(props: Readonly<{ className: any; style: any; onClick: any }>) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-150 duration-200`}
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
            <Ticket price={item.price} tag={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
