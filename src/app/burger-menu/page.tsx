'use client';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import down from '../../assets/down.svg';
import BurgerIC from '../../assets/menu_open.svg';
import Logo from '../../assets/navLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import './burger.css';

export default function Burger() {
  const [burger, setBurger] = useState<boolean>(false);
  const toggleBurger = () => {
    setBurger(!burger);
  };
  const [left, setLeft] = useState<string>('110%');
  useEffect(() => {
    setLeft(burger ? '0%' : '110%');
  });

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
          </div>
          <button className='tickets'> Get Your Tickets </button>
        </div>
      </div>
    </>
  );
}
