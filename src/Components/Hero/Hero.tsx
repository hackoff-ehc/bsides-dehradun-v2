'use client';
import './Hero.css';
import React from 'react';
import Typed from 'typed.js';

export default function Hero() {
  //for the 2024 part
  const pl = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(pl.current, {
      strings: ['2024'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // for the BSIDES DEHRADUN part
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['BSIDES DEHRADUN'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='heroContainer'>
        <div className='mainText'>
          <span ref={el} />
          <div className='subText'>
            <p className='date'>17 FEB</p>
            <span ref={pl} />
          </div>
        </div>
      </div>
    </>
  );
}
