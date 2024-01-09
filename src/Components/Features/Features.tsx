const featuresCards = ['Keynotes and talks', 'Panel discussions', 'CTF competitions'];

export const Features = () => {
  return (
    <section className='px-3 md:px-[clamp(48px,7.78vw,112px)] py-4 md:py-8 lg:py-12'>
      <h1 className='text-white h1-text font-semibold mb-4 sm:mb-8 md:mb-[clamp(64px,5.56vw,80px)]'>
        BSides confrences feature
      </h1>
      <div className='flex flex-col gap-9 md:gap-[104px] md:max-w-[85%] mx-auto md:flex-row'>
        <div>
          <p className='text-[#fff7] md:mb-[120px] max-w-[35ch] text-[16px] md:text-[20px]'>
            The conference will be held one-days and will feature a variety of talks, workshops, and
            panels on a wide range of security topics.
          </p>
          <button className='py-6 px-[24px] lg:px-[64px] xl:px-[104px] bg-[#6104D7] rounded-[24px] text-center text-white text-[20px] font-bold w-full box-border hidden md:block'>
            GET YOUR TICKETS
          </button>
        </div>
        <div className='grow flex flex-col gap-5 md:gap-10 w-[80%] md:w-[unset] mx-auto md:max-w-max'>
          {featuresCards.map((title) => (
            <div
              key={title}
              className='border-[1.5px] border-solid border-[#EC0033] bg-[#0c090980] font-semibold text-[20px] md:text-[clamp(28px,2.6vw,36px)] xl:text-[clamp(36px,2.8vw,48px)] rounded-lg text-center text-white py-4 px-3 xl:px-6'
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
