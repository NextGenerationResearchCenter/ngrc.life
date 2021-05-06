import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className='header relative pt-0 items-center flex h-screen max-h-860-px sm:h-100 '>
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='w-full lg:w-8/12 xl:w-7/12 px-4'>
          <div className='pt-20 md:pt-10 sm:pt-0'>
            <img
              src={require('../assets/img/ngrc_2.png').default}
              alt='...'
              // style={{ width: '300px' }}
              className='mb-6 mx-auto sm:ml-0 w-6/12 sm:w-5/12 md:w-5/12'
            />

            <div className='w-full'>
              <span className='font-bold text-2xl sm:text-2xl md:text-1xl lg:text-2xl xl:text-5xl text-gray-900 mb-0'>
                Next Generation Research Center
              </span>
            </div>
            <h3 className='mt-1 font-semibold text-lg md:text-4xl text-gray-700'>
              Bringing science to everyday life
            </h3>
            <p className='mt-4 text-base md:text-xl leading-relaxed text-gray-800'>
              {/* {t('language')} */}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus, vero mollitia ex ea magnam quidem, suscipit illum
              expedita odio id, vitae nulla at? Ducimus eligendi, excepturi
              doloremque libero voluptatum in?
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
                className='text-white text-xs md:text-lg lg:text-xl font-bold px-6 md:px-6 py-4 rounded-full outline-none focus:outline-none md:mr-4 mb-1 bg-gray-400 active:bg-green-700 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                Learn more
              </a>
              <a
                href='/'
                className='ml-1 text-white text-sm md:text-lg lg:text-xl font-bold px-8 md:px-12 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-purple-600 uppercase text-md shadow hover:shadow-lg ease-linear transition-all duration-150'
                target='_blank'
                rel='noreferrer'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className='absolute top-0 right-0 hidden xs:w6/12 sm:block sm:w-5/12 min-h-500 z-10'
        src={require('../assets/img/ngrc_colors5.png').default}
        alt='...'
      />
    </section>
  );
}
