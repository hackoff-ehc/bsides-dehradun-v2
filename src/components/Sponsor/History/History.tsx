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

export const History = () => {
  return (
    <section className='mb-28 ml-[5%] md:ml-[9%] md:w-[80%] w-[90%]'>
      <h1 className='font-bold ml-[4%] font-poppins md:ml-0 w-fit text-xl md:text-4xl text-white'>
        Be Part of History
      </h1>
      <p className='font-medium font-outfit ml-[4%] md:ml-0 text-sm md:text-xl mt-5'>
        BSides Dehradun&apos;s inaugural edition is a milestone. By sponsoring this event, you
        become part of its legacy. Imagine the impact your brand will have as we kick off this
        exciting journey. Don&apos;t miss this chance to be a pioneer!
      </p>
      <div className='grid font-outfit grid-cols-1 md:grid-cols-1 mt-16 gap-2 md:gap-[10%]'>
        {valuePoints.map(({ heading, content }) => (
          <div
            key={heading}
            className='py-10 w-[99%] md:w-[95%] h-fit md:h-[40vh] lg:h-[100%] rounded-2xl  bg-[rgba(255,255,255,0.12)]  flex flex-col justify-between px-5 md:px-10 '
          >
            <h1 className='font-bold  flex flex-col justify-center items-center w-fit text-xl md:text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-[#6104D7] to-[#FF0000] '>
              {heading}
            </h1>
            <hr className='w-[90%] mt-5 h-[1px] text-[rgba(0,0,0,0.1)]' />
            <p className='font-medium text-sm md:text-2xl mt-5 w-[90%]'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
