import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './Home.css';

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className='homeContainer'>
        <Hero />
      </div>
    </>
  );
}
