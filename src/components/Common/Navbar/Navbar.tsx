'use client';
import Logo from '@/assets/navLogo.png';
import BurgerIC from '@/assets/menu_open.svg';
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import down from '@/assets/down.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'overview', menu: [], href: '/coming-soon' },
  { title: 'conference', menu: [], href: '/coming-soon' },
  { title: 'sponsor us', menu: null, href: '/coming-soon' },
];

export const LongNavbar = () => {
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
        className='flex justify-between items-center fixed bg-[#30303080] backdrop-blur-[15px] fill-[rgba(48,48,48,0.50)] rounded-xl w-5/6 mx-auto px-3 py-2 left-1/2 -translate-x-1/2 text-white font-bold top-[24px] z-50'
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
          <button className='primary-btn uppercase'>GET YOUR TICKETS</button>
        </nav>
      </motion.header>
    </div>
  );
};

function HamburgerNavbar() {
  const [burger, setBurger] = useState<boolean>(false);
  const toggleBurger = () => {
    setBurger(!burger);
  };
  const [left, setLeft] = useState<string>('110%');
  useEffect(() => {
    setLeft(burger ? '0%' : '110%');
  }, [burger]);

  return (
    <>
      <div className='burgerContainer'>
        <Image src={Logo} alt='No Logo Found' />
        <button className='toggleBurger' onClick={toggleBurger}>
          <GiHamburgerMenu />
        </button>
        <div className='burgerPage' style={{ left: left }}>
          <div className='burtoggle'>
            <Image src={Logo} className='burLogo' alt='No Logo' />
            <button onClick={toggleBurger}>
              <Image src={BurgerIC} className='closeIcon' alt='No Image Fo8nd' />
            </button>
          </div>
          <div className='burContent'>
            <Link href='/coming-soon'>
              <div className='navburcon'>
                OVERVIEW <Image src={down} alt='None' />{' '}
              </div>
            </Link>
            <Link href='/coming-soon'>
              <div className='navburcon'>
                SCHEDULE <Image src={down} alt='None' />{' '}
              </div>
            </Link>
            <Link href='/coming-soon'>
              {' '}
              <div className='navburcon'>
                CONFERENCE <Image src={down} alt='None' />{' '}
              </div>
            </Link>
            <Link href='/coming-soon'>
              <div className='navburcon'>SPONSOR US </div>
            </Link>
            <Link href='/coming-soon'>
              <div className='navburcon'>CONTACT US </div>
            </Link>
          </div>
          <button className='tickets'> Get Your Tickets </button>
        </div>
      </div>
    </>
  );
}

export const Navbar = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => setWidth(window.innerWidth), []);
  useEffect(() => {
    const handleResize = () => {
      setWidth((prevWidth) => {
        const newWidth = window.innerWidth;
        console.log(newWidth);
        return newWidth;
      }),
        [];
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <>{width > 920 ? <LongNavbar /> : <HamburgerNavbar />}</>;
};
