export default function Hero() {
  return (
    <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
          <div className='pt-32 sm:pt-0'>
            <img
              src={require('../assets/img/ngrc_logo.png').default}
              alt='...'
              style={{ width: '250px' }}
              className='mb-12'
            />
            <h2 className='font-bold text-4xl text-blueGray-600'>
              Next Generation Research Center
            </h2>
            <p className='mt-4 text-lg leading-relaxed text-blueGray-200'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos laudantium magni vitae, porro ullam possimus dolorum
              eaque odit et nam quasi iusto nobis alias quidem enim harum! Id,
              neque exercitationem!
              <a
                href='https://tailwindcss.com/?ref=creativetim'
                className='text-blueGray-600'
                target='_blank'
                rel='noreferrer'
              >
                Bringing science into everyday life!
              </a>
            </p>
            <div className='mt-12'>
              <a
                href='/'
                target='_blank'
                rel='noreferrer'
                className='text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-purple-400 active:bg-purple-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                Our vision
              </a>
              <a
                href='/'
                className='ml-1 text-white font-bold px-12 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-purple-700 active:bg-purple-600 uppercase text-md shadow hover:shadow-lg ease-linear transition-all duration-150'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fas fa-pills'></i> BioVac info
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className='absolute top-0 right-0 w-6/12'
        src={require('../assets/img/ngrc_colors5.png').default}
        alt='...'
      />
    </section>
  );
}
