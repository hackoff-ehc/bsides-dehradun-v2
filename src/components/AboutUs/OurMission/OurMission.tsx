/* eslint-disable @next/next/no-img-element */
const missions = [
  {
    title: 'Knowledge sharing',
    description:
      'We promote knowledge sharing to advance the security community. We encourage speakers to share their expertise on various security topics.',
  },
  {
    title: 'Networking',
    description:
      'We provide networking opportunities for attendees to connect and build relationships. These connections can be valuable for professional growth and career advancement.',
  },
  {
    title: 'Community building',
    description:
      'We provide networking opportunities for attendees to connect and build relationships. These connections can be valuable for professional growth and career advancement.',
  },
];

export function OurMission() {
  return (
    <section className='section-padding pb-[80px] relative overflow-hidden'>
      <h2 className='h2-text font-bold mb-4 md:mb-10'>Our Mission</h2>
      <ul className='flex flex-col gap-6 md:gap-[56px] md:max-w-[50%]'>
        {missions.map(({ title, description }) => (
          <li
            key={title}
            className='flex gap-4 items-start border-t-0 border-x-0 md:border-b-2 md:border-solid md:border-b-white md:pb-10 md:gap-10'
          >
            <span className='block bg-white rounded-full mt-[6px] min-w-[12px] min-h-[12px] md:min-w-[24px] md:min-h-[24px] md:mt-[7px]' />
            <div className='border-b-2 border-solid border-b-white pb-4 md:border-none md:pb-0'>
              <p className='text-[16px] uppercase font-semibold mb-2 md:text-[24px] md:mb-[16px]'>
                {title}
              </p>
              <p className='text-[14px] md:text-[20px]'>{description}</p>
            </div>
          </li>
        ))}
      </ul>
      <img
        src='/assets/images/planet.png'
        alt=''
        className='hidden absolute top-[16%] right-0 md:block'
      />
    </section>
  );
}
