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
      <div className='container mx-auto items-center z-10'>
        <div className='md:w-6/12 lg:w-6/12 px-5'>
          <div className='pt-5 sm:mt-24 md:mt-16 md:my-32 mx-auto md:text-left lg:pt-10 md:px-4 lg:px-0 px-14'>
            <img
              src={Per}
              alt='...'
              className='mx-auto w-full xl:w-9/12 md:ml-0 sm:px-8 md:px-0'
            />
            <p className='sm:pl-0 pt-4 text-base md:text-md lg:text-lg leading-relaxed  text-graydark font-montregular text-left'>
              {t('hero.h1-sub')}
            </p>
            <div className='flex items-center py-10 justify-center md:justify-start'>
              <HashLink smooth to='/#about'>
                <button className='rounded-full whitespace-nowrap bg-gray-500 text-gray-200 cursor-pointer hover:bg-gray-600 hover:text-gray-200 uppercase font-montheavy text-sm sm:text-md xl:text-xl px-4 py-3 mr-3 lg:px-6 lg:py-3'>
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
        className='absolute opacity-70 md:block top-0 right-0 md:w-8/12 lg:w-8/12 xl:w-5/12 hidden h-full'
        alt=''
      />
    </section>
  );
}
