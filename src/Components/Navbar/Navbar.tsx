'use client';
import Logo from '../../assets/navLogo.png';
import BurgerIC from '../../assets/menu_open.svg';
import './Navbar.css';
import { useState, useEffect } from 'react';
import down from '../../assets/down.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
function LongNavbar() {
  return (
    <div className='bgCont'>
      <div className='navContainer'>
        <Link href='/'>
          <Image src={Logo} alt='No Image Available' />
        </Link>

        <Link href='/coming-soon'>
          <div className='navcon'>
            OVERVIEW <Image src={down} alt='None' />{' '}
          </div>
        </Link>
        <Link href='/coming-soon'>
          <div className='navcon'>
            SCHEDULE <Image src={down} alt='None' />{' '}
          </div>
        </Link>
        <Link href='/coming-soon'>
          {' '}
          <div className='navcon'>
            CONFERENCE <Image src={down} alt='None' />{' '}
          </div>
        </Link>
        <Link href='/coming-soon'>
          <div className='navcon'>SPONSOR US </div>
        </Link>
        <Link href='/coming-soon'>
          <div className='navcon'>CONTACT US </div>
        </Link>
        <Link href='/coming-soon'>
          <div className='getTicket navcon'>GET YOUR TICKETS </div>
        </Link>
      </div>
    </div>
  );
}

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

export default function Navbar() {
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

  return <>{width > 500 ? <LongNavbar /> : <HamburgerNavbar />}</>;
}
