import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

interface ICard {
  title: string;
  description: string;
  index: string;
  href: string;
  iconSrc: string;
}

const Card = ({ title, description, index, href, iconSrc }: ICard) => {
  return (
    <Link
      href={href}
      className='rounded-lg border border-solid border-[#ffffff94] bg-[#ffffff24] backdrop-blur-[1px] p-6 md:p-10 flex flex-col'
    >
      <div className='flex items-center justify-between mb-2'>
        <span className='font-bold text-[clamp(26px,2.22vw,32px)] text-[#ffffff4d]'>{index}</span>
        <span className='aspect-square w-[48px] h-[48px] bg-[#EC0033] bg-opacity-30 rounded-full flex items-center justify-center pointer-events-none'>
          <Image src={iconSrc} alt='icon' width={32} height={32} />
        </span>
      </div>
      <div className='text-white grow'>
        <h3 className='font-bold text-[clamp(26px,2.22vw,32px)] mb-4'>{title}</h3>
        <p className='text-[clamp(14px,1.11vw,16px)] text-[#ffffffb3]'>{description}</p>
      </div>
      <div className='mt-1 flex justify-end'>
        <FaLink color='#EC0033' />
      </div>
    </Link>
  );
};

const interestCards = [
  {
    title: 'Get your Tickets',
    description:
      'Tickets for BSides Dehradun 0x01 will go on sale in early April 2024. We encourage you to purchase your tickets early, as they are expected to sell out quickly.',
    iconSrc: '/assets/icons/ticket.svg',
    href: '/tickets',
  },
  {
    title: 'Become a Sponsor',
    description:
      'Join the winning team and become a sponsor! We are proud to partner with amazing sponsors who support our mission and vision. Together, we make a difference.',
    iconSrc: '/assets/icons/handshake.svg',
    href: '/sponsor-us',
  },
];

export const Interests = () => {
  return (
    <section className='section-width-constraint px-3 md:px-[clamp(48px,7.78vw,112px)] py-4 md:py-8 lg:py-12'>
      <h1 className='text-white h1-text font-semibold mb-4 sm:mb-8 md:mb-[clamp(64px,5.56vw,80px)]'>
        Show your interest
      </h1>
      <div className='grid gap-6 md:grid-cols-2'>
        {interestCards.map((details, index) => (
          <Card key={details.title} {...details} index={`0${index + 1}`} />
        ))}
      </div>
    </section>
  );
};
