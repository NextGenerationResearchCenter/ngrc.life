export default function Hero() {
  return (
    <section className='header relative pt-0 md:pt-12 items-center flex h-screen max-h-860-px h-100 '>
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='w-full md:w-8/12 lg:w-8/12 xl:w-7/12 px-4'>
          <div className='pt-0 md:pt-32 sm:pt-0'>
            <img
              src={require('../assets/img/ngrc_logo.png').default}
              alt='...'
              // style={{ width: '300px' }}
              className='mb-12 w-1/6 sm:w-1/6 md:w-1/4 lg:w-1/3'
            />
            <span className='font-bold text-3xl md:text-5xl text-gray-900 mb-0'>
              Next Generation Research Center
            </span>
            <br />
            <h3 className='mt-1 font-semibold text-xl md:text-3xl text-gray-700'>
              Bringing science to everyday life
            </h3>
            <p className='mt-4 text-base md:text-xl leading-relaxed text-gray-800'>
              Next Generation Research Center (NGRC) is changing the world. We
              are bridging the gap between science and everyday life in order to
              support a society based upon the values of compassion and
              cooperation.
              {/* By engaging a global community with health
              professionals and health seekers, we co-create a platform from
              which everyone can thrive through innovative education,
              leadership, inter-professional collaboration, and research. We
              embrace global research-based healing (or holistic health?)
              traditions, and will promote the delivery of evidence-based,
              sustainable, affordable person-centered care. */}
              <a
                href='https://tailwindcss.com/?ref=creativetim'
                className='text-blueGray-600'
                target='_blank'
                rel='noreferrer'
              ></a>
            </p>
            <div className='mt-14 relative'>
              <a
                href='/'
                target='_blank'
                rel='noreferrer'
                className='text-white text-xs md:text-lg lg:text-xl font-bold px-3 md:px-6 py-4 rounded-full outline-none focus:outline-none md:mr-4 mb-1 bg-gray-400 active:bg-purple-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                Learn more
              </a>
              <a
                href='/'
                className='ml-1 text-white text-xs md:text-lg lg:text-xl font-bold px-6 md:px-12 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-purple-600 uppercase text-md shadow hover:shadow-lg ease-linear transition-all duration-150'
                target='_blank'
                rel='noreferrer'
              >
                {/* <i class='fas fa-pills'></i>  */}
                BioVac info
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className='absolute top-0 right-0 w-5/12 z-10 '
        src={require('../assets/img/ngrc_colors5.png').default}
        alt='...'
      />
    </section>
  );
}
