import Community from '../Community/Community';
import { Features } from '../Features/Features';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

import { Interest } from '../Interests/Interests';

import Form from '../ConnectForm/Form';

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
      <Interest/>
      <Features/>
      <Form/>
      <Footer />
    </>
  );
}
