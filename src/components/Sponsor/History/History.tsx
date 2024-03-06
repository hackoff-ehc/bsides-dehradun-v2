const valuePoints = [
  {
    heading: 'Custom Packages to Meet Your Specific Needs',
    content:
      "We understand that every sponsor has unique goals and requirements. That's why we offer a variety of sponsorship packages tailored to your specific needs and budget. We can work with you to create a customized package that delivers maximum value and ROI.",
  },
  {
    heading: 'Get in Touch',
    content: (
      <>
        Reach out to us at{' '}
        <a href='mailto:sponsor@bsidesdehradun.com' className='text-[#EC0033]'>
          sponsor@bsidesdehradun.com
        </a>
        , and let&apos;s start a conversation about your specific needs. We&apos;re excited to craft
        a sponsorship package that not only meets your goals but also contributes to the success of
        BSides Dehradun&apos;s inaugural edition. Together, we&apos;ll make history! Thank you for
        considering a partnership with us!
      </>
    ),
  },
];

export const History = () => {
  return (
    <section className='section-padding section-width-constraint'>
      <h1 className='font-bold ml-[4%] font-poppins md:ml-0 w-fit text-xl md:text-4xl text-white mb-3 md:mb-4'>
        Be Part of History
      </h1>
      <p className='para-text font-outfit'>
        BSides Dehradun&apos;s inaugural edition is a milestone. By sponsoring this event, you
        become part of its legacy. Imagine the impact your brand will have as we kick off this
        exciting journey. Don&apos;t miss this chance to be a pioneer!
      </p>
      <div className='flex flex-col font-outfit mt-7 md:mt-10 gap-10 md:gap-[60px]'>
        {valuePoints.map(({ heading, content }) => (
          <div
            key={heading}
            className='py-[24px] px-[20px] md:px-[36px] md:py-[28px] rounded-2xl bg-[#ffffff12] backdrop-blur-[2px] flex flex-col justify-between gap-3 md:gap-6'
          >
            <h1 className='font-bold flex flex-col justify-center items-center w-fit text-[28px] lg:text-[30px] xl:text-[34px] text-transparent bg-clip-text  bg-gradient-to-r from-[#6104D7] to-[#FF0000]'>
              {heading}
            </h1>
            <div className='bg-[#ffffff30] h-[2px]' />
            <p className='para-text text-[#faf9f6e6]'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
