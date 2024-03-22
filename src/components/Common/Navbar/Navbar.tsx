'use client';
import Logo from '@/assets/navLogo.png';
import BurgerIC from '@/assets/menu_open.svg';
import './Navbar.css';
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from '@nextui-org/react';
import { useState, useEffect, useRef } from 'react';
import right from '@/assets/right.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';

const navLinks = [
  {
    title: 'overview',
    menu: [
      { title: 'About Bsides Dehradun', href: '/about-us' },
      { title: 'Code of Conduct', href: '/code-of-conduct' },
      { title: 'Venue', href: '/coming-soon' },
      { title: 'Visit Doon', href: '/coming-soon' },
      { title: 'FAQ', href: '/coming-soon' },
    ],
    href: '/coming-soon',
  },
  {
    title: 'schedule',
    menu: [
      { title: 'Conference', href: '/coming-soon' },
      { title: 'Trainings', href: '/coming-soon' },
      { title: 'Exhibition', href: '/coming-soon' },
    ],
    href: '/coming-soon',
  },
  {
    title: 'conference',
    menu: [
      { title: 'Call for Sponsors', href: '/coming-soon' },
      { title: 'Speakers', href: '/coming-soon' },
      { title: 'Community Partners', href: '/coming-soon' },
    ],
    href: '/coming-soon',
  },
  { title: 'sponsor us', menu: null, href: '/sponsor-us' },
  { title: 'contact us', menu: null, href: '#footer' },
];

export const Navbar = () => {
  const [headerTop, setHeaderTop] = useState<number>(24);

  const headerRef = useRef<null | HTMLHeadElement>(null);
  const [burger, setBurger] = useState<boolean>(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };
  const [left, setLeft] = useState<string>('110%');
  useEffect(() => {
    setLeft(burger ? '0%' : '110%');
  }, [burger]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let previousScroll = 0;

      const scrollHandler = () => {
        const headerHeight = (headerRef.current?.clientHeight || 60) + 24;
        const currentScroll = window.scrollY;
        if (currentScroll > previousScroll) {
          if (currentScroll > window.innerHeight / 2) {
            setHeaderTop(headerHeight * -2);
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
    <>
      <div className='burgerContainer z-30 absolute left-0 right-0 top-0 py-4 md:hidden'>
        <Image
          src='/assets/icons/bsides-dehradun.svg'
          alt='BSides Dehradun Logo'
          width={64}
          height={32}
        />
        <button className='toggleBurger' onClick={toggleBurger}>
          <GiHamburgerMenu />
        </button>
        <div className='burgerPage' style={{ left: left }}>
          <div className='burtoggle'>
            <Image
              src='/assets/icons/bsides-dehradun.svg'
              alt='BSides Dehradun Logo'
              width={64}
              height={32}
            />
            <button onClick={toggleBurger}>
              <Image src={BurgerIC} className='closeIcon' alt='No Image Fo8nd' />
            </button>
          </div>
          <div className='burContent'>
            {navLinks.map((link) => (
              <BurgerRender key={link.title} link={link} setLeft={setLeft} />
            ))}
          </div>
          <button className='tickets primary-button'> Get Your Tickets </button>
        </div>
      </div>

      <div className='bgCont absolute left-0 right-0 top-[-14vh] hidden md:block'>
        <motion.header
          className='flex justify-between border-white border-[1px] items-center fixed bg-[#30303080] backdrop-blur-[15px] fill-[rgba(48,48,48,0.50)] rounded-xl w-[65%] mx-auto px-3 py-2 left-1/2 -translate-x-1/2 text-white font-bold top-[24px] z-50 section-width-constraint'
          initial={{ top: 24 }}
          animate={{ top: headerTop }}
        >
          <Link href='/'>
            <Image
              src='/assets/icons/bsides-dehradun.svg'
              alt='BSides Dehradun Logo'
              width={110}
              height={48}
            />
          </Link>
          <nav className='flex gap-[clamp(16px,1vw,32px)] items-center capitalize'>
            {navLinks.map((link) => (
              <NavElement key={link.title} link={link} />
            ))}
          </nav>
          <a href='/tickets' className='primary-btn lg:p-[16px] uppercase'>
            GET YOUR TICKETS
          </a>
        </motion.header>
      </div>
    </>
  );
};

const BurgerRender = ({ link, setLeft }: { link: any; setLeft: any }) => {
  var menu = link.menu;
  const [open, setOpen] = useState(false);
  const [disp, setDisp] = useState('hidden');
  const [angle, setAngle] = useState('0deg');
  const [opacity, setOpacity] = useState('100%');
  useEffect(() => {
    if (open == true) {
      setDisp('flex');
      setAngle('-180deg');
      setOpacity('0.5');
    } else {
      setDisp('hidden');
      setAngle('0deg');
      setOpacity('1');
    }
  }, [open]);
  return menu ? (
    <div key={link.title}>
      <button
        onClick={() => setOpen(!open)}
        style={{ opacity: `${opacity}` }}
        className='navburcon capitalize'
      >
        {link.title}
        <svg
          stroke='white'
          style={{ transform: `rotate(${angle})`, transition: '0.5s' }}
          width='14'
          height='14'
          viewBox='0 0 14 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_178_107)'>
            <path
              d='M7.45893 13.1199L8.10989 12.4095L12.7047 7.39521L11.4029 5.97974L7.45893 10.2837L3.51501 5.97974L2.21313 7.39521L6.808 12.4095L7.45893 13.1199Z'
              fill='white'
            />
            <path
              d='M7.45893 8.02001L8.10989 7.30965L12.7047 2.29537L11.4029 0.879883L7.45893 5.1838L3.51501 0.879883L2.21313 2.29537L6.808 7.30965L7.45893 8.02001Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_178_107'>
              <rect
                width='12.2402'
                height='12.2401'
                fill='white'
                transform='translate(1.33887 0.879883)'
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className={disp + ' flex-col ml-3 duration-500 text-lg font-medium text-red-700'}>
        {menu.map((m: any) => (
          <Link onClick={() => setLeft('110%')} key={m.title} href={m.href}>
            {m.title}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link className='navburcon capitalize font-poppins font-medium' href={link.href}>
      {link.title}
    </Link>
  );
};

const NavElement = ({ link }: { link: any }) => {
  var menu = link.menu;
  const [color, setColor] = useState('white');
  const [angle, setAngle] = useState('0deg');
  return link.menu ? (
    <Dropdown
      onOpenChange={() => {
        setColor('#e87371');
        setAngle('-180deg');
      }}
      onClose={() => {
        setColor('#fff');
        setAngle('0deg');
      }}
    >
      <DropdownTrigger>
        <Button
          variant='bordered'
          style={{ color: `${color}` }}
          className='flex gap-1 capitalize text-[14px]'
        >
          {link.title}
          <svg
            width='14'
            stroke={color}
            style={{ transform: `rotate(${angle})`, transition: '0.5s', scale: 0.8 }}
            height='14'
            viewBox='0 0 14 14'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_178_107)'>
              <path
                d='M7.45893 13.1199L8.10989 12.4095L12.7047 7.39521L11.4029 5.97974L7.45893 10.2837L3.51501 5.97974L2.21313 7.39521L6.808 12.4095L7.45893 13.1199Z'
                fill='white'
              />
              <path
                d='M7.45893 8.02001L8.10989 7.30965L12.7047 2.29537L11.4029 0.879883L7.45893 5.1838L3.51501 0.879883L2.21313 2.29537L6.808 7.30965L7.45893 8.02001Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_178_107'>
                <rect
                  width='12.2402'
                  height='12.2401'
                  fill={color}
                  transform='translate(1.33887 0.879883)'
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Link Actions'
        className='bg-custom-bg rounded-md mt-4 p-2 flex  justify-center items-center w-[20vw] text-black font-poppins font-medium capitalize'
        items={link.menu}
      >
        {(item: any) => {
          return (
            <DropdownItem
              key={item.title}
              href={item.href}
              className='p-1 w-[98%] mt-1 flex  justify-start rounded-md bg-navlink items-start text-white text-[14px]'
            >
              <span className='flex justify-between w-[17vw]'>
                {item.title} <Image src={right} alt='None' />
              </span>
            </DropdownItem>
          );
        }}
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Link href={link.href} key={link.title} className='text-[14px]'>
      {link.title}
    </Link>
  );
};
