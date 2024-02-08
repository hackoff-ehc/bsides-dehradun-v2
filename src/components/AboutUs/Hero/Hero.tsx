import Image from 'next/image';

const aboutUsPoints = [
  {
    title: 'Collaborative environment',
    description:
      "The conference fosters a confidential and supportive environment where attendees can freely participate in discussions and learn from each other's expertise.",
    imgSrc: '/assets/icons/people.svg',
  },
  {
    title: 'Unique opportunity for development',
    description:
      'The event serves as an invaluable learning experience for security professionals of all levels, equipping them with the latest knowledge and skills to address evolving cybersecurity threats.',
    imgSrc: '/assets/icons/compass.svg',
  },
  {
    title: 'Opportunity to learn from experts',
    description:
      'BSides Dehradun brings together some of the brightest minds in cybersecurity, providing an opportunity for participants to learn from the best in the industry.',
    imgSrc: '/assets/icons/magnify.svg',
  },
  {
    title: 'gathering of cybersecurity experts',
    description:
      'Attracting participants from around the world, BSides Dehradun provides a platform for connecting with and learning from leading cybersecurity professionals.',
    imgSrc: '/assets/icons/globe.svg',
  },
];

export function Hero() {
  return (
    <section className='section-padding'>
      <h2 className='h2-text font-bold mb-4 md:mb-10'>About BSides Dehradun</h2>
      <p className='para-text lg:max-w-[80%]'>
        Security BSides is a community-driven cybersecurity conference where people from all over
        the world come together to collaborate, learn, and share their knowledge. We are responsible
        for organizing an independent BSides-approved event for Dehradun. It is a place where
        everyone can participate in a confidential environment that encourages collaboration.
      </p>
      <div className='mt-[120px] md:mt-[106px] grid md:grid-cols-2 gap-[66px] md:gap-[40px] md:gap-y-[100px]'>
        {aboutUsPoints.map(({ title, description, imgSrc }) => (
          <div
            key={title}
            className='bg-[#ffffff24] text-center rounded-[10px] relative px-3 pb-[48px] pt-20 sm:px-4 md:px-5 lg:px-10 lg:pt-[90px] lg:pb-12'
          >
            <div className='p-3 bg-[#f00] rounded-[20px] absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_50px_5px_#f00] md:-top-1'>
              <Image src={imgSrc} alt='' width={45} height={45} className='w-[45px] h-[45px]' />
            </div>
            <h3 className='font-semibold text-[20px] lg:text-[32px] uppercase mb-5 lg:mb-6'>
              {title}
            </h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
