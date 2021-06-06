import { useTranslation } from 'react-i18next';
import IntroVideo from '../components/IntroVideo';
import Per from '../assets/img/new_logo_trans.png';
import { HashLink } from 'react-router-hash-link';
import HeroBg from '../assets/img/hero_background3.png';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      className='relative py-24 sm:py-10 md:py-0 lg:py-15 items-center flex lg:h-screen'
      id='hero'
    >
      <div className='container mx-auto items-center flex flex-wrap z-10'>
        <div className='md:w-8/12 lg:w-6/12'>
          <div className='pt-5 sm:mt-24 md:mt-16 md:ml-10 sm:ml-0 md:my-32 mx-auto md:text-left lg:pt-10'>
            <img src={Per} alt='...' className='mx-auto w-8/12 md:ml-0' />

            {/* <h2 className='font-montheavy text-4xl text-graydark'>
              Next Generation Research Center
            </h2> */}
            <p className='pl-9 sm:pl-0 pt-4 text-sm lg:text-lg xl:text-xl leading-relaxed text-graydark font-montregular text-left'>
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
      <img
        src={HeroBg}
        className='absolute opacity-70 md:block top-0 right-0 md:w-7/12 lg:w-8/12 xl:w-5/12 hidden h-full'
        alt=''
      />
    </section>
  );
}
