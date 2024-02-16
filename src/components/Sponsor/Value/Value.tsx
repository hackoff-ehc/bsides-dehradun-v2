const valuePoints = [
  {
    heading: 'Big Fish, Small Pond',
    content:
      'Unlike large-scale conferences, where your brand might get lost in the crowd, BSides Dehradun offers a unique opportunity. You’ll be the big fish in a small pond, standing out and effectively communicating your message to an active audience.',
  },
  {
    heading: 'Industry Recognition',
    content:
      'By supporting BSides Dehradun, you align your brand with a community-driven event that attracts industry professionals, thought leaders, and enthusiasts. Your sponsorship will be recognized through various channels, including t-shirts, signage, lanyards, lunch sessions, and attendee badges.',
  },
];

export function Value() {
  return (
    <section className='mb-28 ml-[9%] w-[80%]'>
      <h1 className='font-bold font-poppins w-fit text-xl md:text-4xl text-white'>
        The value of sponsorship
      </h1>
      <p className='font-medium font-outfit text-sm md:text-xl mt-5'>
        At BSides Dehradun, we believe in quality over quantity. Our intimate and focused events
        allow sponsors to engage directly with participants, fostering meaningful connections and
        friendships. Here&apos;s why being a sponsor matters:
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-[10%]'>
        {valuePoints.map(({ heading, content }) => (
          <div
            key={heading}
            className='font-outfit py-10 w-[95%] h-fit md:h-[60vh] lg:h-[100%]  rounded-2xl  bg-[rgba(255,255,255,0.12)]  flex flex-col justify-between items-center '
          >
            <h1 className='font-bold flex flex-col justify-center items-center w-fit text-lg md:text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-[#6104D7] to-[#FF0000] '>
              {heading}
              <br />
              <hr className='w-[90%] mt-5 h-[1px] text-[rgba(0,0,0,0.1)]' />
            </h1>

            <p className='font-medium text-sm md:text-2xl mt-5 w-[90%]'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
