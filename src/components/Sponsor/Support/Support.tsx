const valuePoints = [
  {
    heading: 'Brand Exposure',
    content:
      'Depending on your sponsorship level, your brand may appear on event materials such as t-shirts, signage, and badges. Custom branding options, including transportation banners and other things, can also be arranged.',
  },
  {
    heading: 'Networking Opportunities',
    content:
      "BSides Dehradun brings together engaged participants eager to absorb information. As a sponsor, you'll have direct access to industry leaders, voices, and potential collaborators.",
  },
  {
    heading: 'Recruit Top Talent',
    content:
      'Attract and recruit highly qualified cybersecurity professionals by showcasing your company as an industry leader and supporter of the InfoSec community. Gain access to resumes and network with potential candidates directly at the event.',
  },
  {
    heading: 'Giving Back',
    content:
      'Supporting BSides Dehradun means contributing to the growth and education of the InfoSec community. Your sponsorship helps us create a valuable event for the region.',
  },
];

export const Support = () => {
  return (
    <section className='section-padding section-width-constraint'>
      <h1 className='font-bold w-fit text-xl font-poppins md:text-4xl text-white mb-3 md:mb-4'>
        Reasons to Show Your Support
      </h1>
      <p className='para-text font-outfit'>
        We understand that sponsors seek a return on their investment. Here are compelling reasons
        to support BSides Dehradun:
      </p>
      <div className='font-outfit flex flex-col lg:grid lg:grid-rows-[repeat(2,minmax(0,clamp(340px,calc(600px-15vw),460px)))] lg:grid-cols-2 mt-7 md:mt-10 gap-5 lg:gap-[10%]'>
        {valuePoints.map(({ heading, content }) => (
          <div
            key={heading}
            className='py-[24px] px-[14px] md:px-[48px] rounded-2xl bg-[rgba(255,255,255,0.12)] flex flex-col items-center lg:h-full'
          >
            <h1 className='text-center text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#6104D7] to-[#FF0000] '>
              {heading}
            </h1>
            <div className='bg-[#ffffff30] w-2/3 h-[2px] my-3 md:my-6' />
            <p className='para-text text-[#FAF9F6] text-center flex-grow'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
