import { useTranslation } from 'react-i18next';
import IntroVideo from '../components/IntroVideo';
import Per from '../assets/img/newLogo.png';
import { HashLink } from 'react-router-hash-link';

import Background from '../assets/img/hero_background3.png';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      className='relative pt-0 xl:py-15 items-center flex lg:h-screen'
      id='hero'
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain, cover',
        height: '100vh',
      }}
    >
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='md:w-8/12 lg:w-6/12'>
          <div className='pt-5 md:pt-10 sm:ml-0 my-32 mx-auto text-center md:text-left px-6'>
            <img
              src={Per}
              alt='...'
              className='mx-auto sm:ml-2 w-11/12 sm:w-8/12 md:w-10/12'
            />
            {/* <h2 className='font-montheavy text-4xl text-graydark'>
              Next Generation Research Center
            </h2> */}
            <p className='pl-4 pt-2 text-sm lg:text-lg xl:text-xl leading-relaxed text-graydark font-montregular text-left'>
              {t('hero.h1-sub')}
            </p>
            <div className='pl-2 mt-5 sm:mt-10'>
              <HashLink smooth to='/#about'>
                <button className='rounded-full lg:px-6 lg:py-3 bg-gray-500 text-gray-200 cursor-pointer hover:bg-gray-600 hover:text-gray-200 uppercase font-montheavy text-sm sm:text-md xl:text-xl px-4 py-3 mb-5 mr-3'>
                  {t('hero.cta-button-1')}
                </button>
              </HashLink>
              <IntroVideo />
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className='absolute top-0 right-0 hidden xs:w6/12 sm:block sm:w-5/12 min-h-500 z-10'
        src={require('../assets/img/ngrc_colors5.png').default}
        alt='...'
      /> */}
    </section>
  );
}
