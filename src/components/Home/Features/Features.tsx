'use client';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const featuresCards = ['Keynotes and talks', 'Panel discussions', 'CTF competitions',"Village Events"];

export const Features = () => {
  const options = {
    type:"slide",
    perPage: 3,
    height: '60%',
    rewind: false,
    gap: '5vh',
    focus: 1,
    direction: 'ttb',
    wheel: true,
    arrows: false,
    pagination:false,
  };
  return (

    <section className='section-padding'>
      <h1 className='text-white h1-text font-semibold mb-4 sm:mb-4 md:mb-[0px]'>

        BSides confrences feature
      </h1>
      <div className='flex flex-col gap-9 md:gap-[104px] md:flex-row md:justify-between md:pr-24'>
        <div>
          <p className='para-text md:mb-[66px] max-w-[35ch]'>
            The conference will be held one-days and will feature a variety of talks, workshops, and
            panels on a wide range of security topics.
          </p>
          <button className='primary-btn py-6 text-[20px] text-center font-bold w-3/4 box-border hidden md:block'>
            GET YOUR TICKETS
          </button>
        </div>
        <div className='flex flex-col '>
        <Splide
          options={options}
          className='grow flex flex-col gap-5 md:gap-10 w-full md:w-[unset] md:active:scale-150 mx-auto md:max-w-max'
        >
          {/* <div>hi</div>
          <div>hello</div>
          <div>hi</div>
          <div>hello</div>
          <div>hi</div>
          <div>hello</div> */}
          {featuresCards.map((title) => (
            
            <SplideSlide className='border-[1.5px] border-solid flex flex-col border-[#EC0033] bg-[#0c090980] font-semibold text-[20px] md:text-[clamp(28px,2.6vw,36px)] xl:text-[clamp(36px,2.8vw,48px)] rounded-lg text-center text-white py-4 px-3 xl:px-6'>
              {title}
            </SplideSlide>
            
          ))}
        </Splide>
        </div>
      </div>
    </section>
  );
};
