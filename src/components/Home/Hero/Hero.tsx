'use client';
import './Hero.css';
import React from 'react';
import Typed from 'typed.js';
import Marquee from 'react-fast-marquee';

function Card({ text }: { text: String }) {
  return (
    <>
      <div className='cardCont'>{text}</div>
    </>
  );
}

export const Hero = () => {
  //for the 2024 part
  const texts: String[] = [
    'Threat Intelligence',
    'Application Security',
    'Infrastructure Security',
    'Malware Analysis',
    'Mobile Security',
    'Cryptography',
    'Web Security',
  ];
  const pl = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(pl.current, {
      strings: ['2024'],
      typeSpeed: 100,
      showCursor: false,
      startDelay: 3100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const fl = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(fl.current, {
      strings: ['08 JUNE'],
      typeSpeed: 100,
      showCursor: false,
      startDelay: 2000,
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
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='heroContainer'>
        {/* <div className='fakeContainer'></div> */}
        <div className='cyber'>
          <Marquee gradientWidth={10} speed={75}>
            <p>CYBER &nbsp;</p>
            <p>SECURITY &nbsp; &nbsp;&nbsp;</p>
          </Marquee>
        </div>

        <div className='section-padding section-width-constraint mainText'>
          <span ref={el} />
          <div className='subText'>
            <span className='date' ref={fl}></span>
            <span ref={pl} />
          </div>
        </div>
        <div className='conference cyber'>
          <Marquee gradientWidth={10} speed={75}>
            <p>CONFERENCE&nbsp; &nbsp; &nbsp;</p>
          </Marquee>
        </div>
        <div className='cards'>
          <Marquee gradientWidth={10} speed={100}>
            {texts.map((text, index) => (
              <Card key={index} text={text} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};
