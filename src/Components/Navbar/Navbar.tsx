'use client';

import Logo from '../../assets/navLogo.png';
import './Navbar.css';
import down from '../../assets/down.svg';
import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'overview', menu: [], href: '/coming-soon' },
  { title: 'conference', menu: [], href: '/coming-soon' },
  { title: 'sponsor us', menu: null, href: '/coming-soon' },
];

export const Navbar = () => {
  const [headerTop, setHeaderTop] = useState<number>(24);
  const headerRef = useRef<null | HTMLHeadElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let previousScroll = 0;

      const scrollHandler = () => {
        const headerHeight = (headerRef.current?.clientHeight || 60) + 24;
        const currentScroll = window.scrollY;
        if (currentScroll > previousScroll) {
          if (currentScroll > window.innerHeight / 2) {
            setHeaderTop(headerHeight * -1);
          }
        } else {
          setHeaderTop(24);
        }
        previousScroll = currentScroll;
      };

      window.addEventListener('scroll', scrollHandler);

      return () => window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <div className='bgCont absolute left-0 right-0 top-[-14vh]'>
      <motion.header
        className='flex justify-between items-center fixed bg-[rgba(182,182,182,0.50)] rounded-xl w-5/6 mx-auto px-3 py-2 left-1/2 -translate-x-1/2 text-white font-bold top-[24px]'
        initial={{ top: 24 }}
        animate={{ top: headerTop }}
      >
        <Link href='/'>
          <Image src={Logo} alt='BSides Dehradun' />
        </Link>
        <nav className='flex gap-[clamp(16px,1.944vw,32px)] items-center'>
          {navLinks.map((link) => (
            <Link
              href={link.href ? '/coming-soon' : '#'}
              key={link.title}
              className='gap-[6px] flex items-center'
            >
              <span className='uppercase'>{link.title}</span>{' '}
              {link.menu ? <Image src={down} alt='Menu' /> : null}
            </Link>
          ))}
          <button className='text-center uppercase py-4 px-5 rounded-full bg-[#6104D7]'>
            GET YOUR TICKETS
          </button>
        </nav>
      </motion.header>
    </div>
  );
};
