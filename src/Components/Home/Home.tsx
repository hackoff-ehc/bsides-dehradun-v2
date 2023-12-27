import Community from '../Community/Community';
import Footer from '../Footer/Footer';
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
      <Community />
      <Footer />
    </>
  );
}
