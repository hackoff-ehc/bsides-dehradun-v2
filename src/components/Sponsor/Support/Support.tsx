const valuePoints = [
  {
    heading: 'Brand Exposure',
    content:
      'Depending on your sponsorship level, your brand may appear on event materials such as t-shirts, signage, and badges. Custom branding options, including transportation banners and other things, can also be arranged.',
  },
  {
    heading: 'Networking Opportunities',
    content:
      'BSides Dehradun brings together engaged participants eager to absorb information. As a sponsor, you&apos;ll have direct access to industry leaders, voices, and potential collaborators.',
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
    <section className='mb-36 ml-[9%] w-[80%]'>
      <h1 className='font-bold w-fit text-xl font-poppins md:text-4xl text-white'>
        Reasons to Show Your Support
      </h1>
      <p className='font-medium font-outfit text-sm md:text-xl mt-5'>
        We understand that sponsors seek a return on their investment. Here are compelling reasons
        to support BSides Dehradun:
      </p>
      <div className='grid font-outfit grid-cols-1 md:grid-cols-2 mt-10 gap-5 md:gap-[10%]'>
        {valuePoints.map(({ heading, content }) => (
          <div
            key={heading}
            className='py-16 px-3 w-[95%] h-fit rounded-2xl md:h-[60vh] lg:h-[100%] bg-[rgba(255,255,255,0.12)]  flex flex-col justify-between items-center '
          >
            <h1 className='font-bold flex flex-col justify-center items-center w-fit text-xl md:text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-[#6104D7] to-[#FF0000] '>
              {heading}
              <br />
              <hr className='w-[95%] mt-5 h-[1px] text-[rgba(0,0,0,0.1)]' />
            </h1>

            <p className='font-medium text-sm md:text-2xl  mt-5 w-[90%]'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
