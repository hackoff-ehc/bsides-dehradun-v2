import Logo from '../../assets/navLogo.png';
import './Navbar.css';
import down from '../../assets/down.svg';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className='navContainer'>
      <img src={Logo.src} alt='' />
      <Link href='/coming-soon'>
        <div className='navcon'>
          OVERVIEW <img src={down.src} alt='' />{' '}
        </div>
      </Link>
      <Link href='/coming-soon'>
        <div className='navcon'>
          SCHEDULE <img src={down.src} alt='' />{' '}
        </div>
      </Link>
      <Link href='/coming-soon'>
        {' '}
        <div className='navcon'>
          CONFERENCE <img src={down.src} alt='' />{' '}
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
  );
}
