import Logo from '../../assets/navLogo.png';
import './Navbar.css';
import down from '../../assets/down.svg';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
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
