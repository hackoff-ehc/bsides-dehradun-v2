const valuePoints = [
  {
    heading: 'Big Fish, Small Pond',
    content:
      "Unlike large-scale conferences, where your brand might get lost in the crowd, BSides Dehradun offers a unique opportunity. You'll be the big fish in a small pond, standing out and effectively communicating your message to an active audience.",
  },
  {
    heading: 'Industry Recognition',
    content:
      'By supporting BSides Dehradun, you align your brand with a community-driven event that attracts industry professionals, thought leaders, and enthusiasts. Your sponsorship will be recognized through various channels, including t-shirts, signage, lanyards, lunch sessions, and attendee badges.',
  },
];

export function Value() {
  return (
    <section className='section-padding section-width-constraint'>
      <h1 className='font-bold font-poppins w-fit text-xl md:text-4xl text-white mb-3 md:mb-4'>
        The value of sponsorship
      </h1>
      <p className='para-text font-outfit'>
        At BSides Dehradun, we believe in quality over quantity. Our intimate and focused events
        allow sponsors to engage directly with participants, fostering meaningful connections and
        friendships. Here&apos;s why being a sponsor matters:
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-7 md:mt-10 gap-[10%]'>
        {valuePoints.map(({ heading, content }) => (
          <div
            key={heading}
            className='font-outfit rounded-2xl  bg-[rgba(255,255,255,0.12)] flex flex-col justify-between items-center py-[24px] px-[14px] md:px-[48px]'
          >
            <h1 className='text-center text-[28px] lg:text-[30px] xl:text-[34px] text-transparent bg-clip-text bg-gradient-to-r from-[#6104D7] to-[#FF0000]'>
              {heading}
            </h1>
            <div className='bg-[#ffffff30] w-2/3 h-[2px] my-3 md:my-6' />
            <p className='para-text text-[#FAF9F6] text-center flex-grow'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
