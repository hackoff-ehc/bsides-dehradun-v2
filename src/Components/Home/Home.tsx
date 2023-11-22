import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './Home.css';

export default function Landing() {
  return (
    <>
      <div className='homeContainer'>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
