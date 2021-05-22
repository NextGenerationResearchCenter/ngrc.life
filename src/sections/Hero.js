import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import FullLogo from '../assets/img/ngrc_full_logo.png';
import IntroVideo from '../components/IntroVideo';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className='hero relative pt-0 xl:py-15 items-center flex lg:h-screen'>
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='md:w-8/12 lg:w-6/12 px-4'>
          <div className='md:pt-10 sm:ml-0 my-32 mx-auto text-center md:text-left'>
            <img
              src={FullLogo}
              alt='...'
              className='mx-auto sm:ml-2 mb-6 w-72 sm:w-6/12 md:w-10/12'
            />
            <p className='mt-4 text-base md:text-xl leading-relaxed text-graydark font-montregular'>
              {t('hero.h1-sub')}
            </p>
            <div className='mt-5 sm:mt-10'>
              <Link to='about' spy={true} smooth={true} duration={1000}>
                <button className='rounded-full lg:px-7 lg:py-4 bg-gray-500 text-gray-200 cursor-pointer hover:bg-gray-600 hover:text-gray-200 uppercase font-montheavy text-sm sm:text-md xl:text-xl px-4 py-3 mb-5 mr-3'>
                  {t('hero.cta-button-1')}
                </button>
              </Link>
              <IntroVideo />
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
