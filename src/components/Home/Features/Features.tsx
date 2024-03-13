'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
import Link from 'next/link';

const fullConfig = resolveConfig(tailwindConfig);

const featuresCards = [
  'Keynotes and talks',
  'Panel discussions',
  'CTF competitions',
  'Village events',
];

export const Features = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [cardInFocus, setCardInFocus] = useState<number>(0);

  useEffect(() => {
    const mdBreakpoint = (fullConfig.theme?.screens as any).md;
    const inDesktopView = mdBreakpoint
      ? window.matchMedia(`(min-width: ${mdBreakpoint})`).matches
      : false;
    if (inDesktopView && sectionRef.current) {
      sectionRef.current.style.height = `${featuresCards.length * 50 + 3}vh`;
      let scrollFromTopOfSection = 0;
      let sectionDistanceFromTop = sectionRef.current.offsetTop;
      const sectionScrollHeight = sectionRef.current.scrollHeight;
      const eachCardScrollHeight = Math.round(sectionScrollHeight / featuresCards.length);
      const handleScroll = () => {
        if (sectionRef.current) {
          const scrolledFromTop = Math.round(window.scrollY);
          scrollFromTopOfSection = Math.max(
            Math.min(scrolledFromTop - sectionDistanceFromTop, sectionScrollHeight),
            0,
          );
          const cardToBeFocused = Math.min(
            Math.floor(scrollFromTopOfSection / eachCardScrollHeight),
            featuresCards.length,
          );
          setCardInFocus(cardToBeFocused);
          if (sectionDistanceFromTop >= scrolledFromTop + 10) {
            sectionRef.current.style.position = 'sticky';
            sectionRef.current.style.top = '0px';
          }
          /*
          const scrolledFromLastCard = Math.min(
            scrollFromTopOfSection % eachCardScrollHeight,
            eachCardScrollHeight,
          );
          console.log({
            sectionScrollHeight,
            scrollFromTopOfSection,
            eachCardScrollHeight,
            scrolledFromLastCard,
            cardToBeFocused,
          });
        */
        }
      };

      window.addEventListener('scroll', handleScroll);

      () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className='section-padding section-width-constraint' ref={sectionRef}>
      <h1 className='text-white h1-text font-semibold mb-4 sm:mb-4 md:mb-[36px]'>
        BSides confrences feature
      </h1>
      <div className='flex flex-col gap-9 md:gap-[104px] md:flex-row'>
        <div>
          <p className='para-text md:mb-[66px] max-w-[35ch]'>
            The conference will be held one-days and will feature a variety of talks, workshops, and
            panels on a wide range of security topics.
          </p>
          <Link
            href='/tickets'
            className='primary-btn py-6 text-[20px] text-center font-bold w-3/4 box-border hidden md:block'
          >
            GET YOUR TICKETS
          </Link>
        </div>
        <div className='hidden md:flex flex-col grow items-center relative overflow-hidden w-[unset] mx-auto'>
          {featuresCards.map((title, index) => {
            const isInFocus = index === cardInFocus;
            return (
              <motion.div
                key={title}
                className='border-[1.5px] border-solid border-[#EC0033] bg-[#0c090980] font-semibold text-[20px] md:text-[clamp(28px,2.6vw,36px)] xl:text-[clamp(36px,2.8vw,48px)] md:absolute rounded-lg text-center text-white py-4 px-3 xl:px-6'
                animate={{
                  opacity: isInFocus ? 1 : index > cardInFocus + 1 ? 0 : 0.5,
                  scale: isInFocus ? 1 : 0.9,
                  top: isInFocus
                    ? 0
                    : index < cardInFocus
                      ? '-100px'
                      : `${(index - cardInFocus) * 115 + (cardInFocus + 1 === index ? 5 : 0)}px`,
                }}
              >
                {title}
              </motion.div>
            );
          })}
        </div>
        <div className='md:hidden grow flex flex-col w-full gap-3 mx-auto'>
          {featuresCards.map((title) => (
            <div
              key={title}
              className='border-[1.5px] border-solid border-[#EC0033] bg-[#0c090980] font-semibold text-[20px] rounded-lg text-center text-white py-4 px-3'
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
