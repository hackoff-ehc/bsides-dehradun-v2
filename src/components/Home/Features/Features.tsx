const featuresCards = ['Keynotes and talks', 'Panel discussions', 'CTF competitions'];

export const Features = () => {
  return (
    <section className='section-padding'>
      <h1 className='text-white h1-text font-semibold mb-4 sm:mb-4 md:mb-[36px]'>
        BSides confrences feature
      </h1>
      <div className='flex flex-col gap-9 md:gap-[104px] md:flex-row'>
        <div>
          <p className='para-text md:mb-[66px] max-w-[35ch]'>
            The conference will be held one-days and will feature a variety of talks, workshops, and
            panels on a wide range of security topics.
          </p>
          <button className='primary-btn py-6 text-[20px] text-center font-bold w-3/4 box-border hidden md:block'>
            GET YOUR TICKETS
          </button>
        </div>
        <div className='grow flex flex-col gap-5 md:gap-10 w-full md:w-[unset] mx-auto md:max-w-max'>
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
