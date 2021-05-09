import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import ReactPlayer from 'react-player';
import classnames from 'classnames';

export default function Hero() {
  const [ShowOrNot, setShowOrNot] = useState('hidden');
  function openVideo() {
    setShowOrNot('');
  }
  // const { t } = useTranslation();
  return (
    <>
      <section className='header relative pt-0 items-center flex sm:h-100 '>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='md:w-8/12 lg:w-6/12 px-4'>
            <div className='md:pt-10 sm:ml-0 my-20 mx-auto text-center md:text-left'>
              <img
                src={require('../assets/img/full_logo.png').default}
                alt='...'
                className='sm:ml-2 mb-6 w-82 sm:w-7/12 md:w-10/12'
              />
              <p className='mt-4 text-base md:text-xl leading-relaxed text-gray-800'>
                NGRC is bridging the gap between science and everyday life to
                support a society based upon the values of compassion and
                cooperation. We promote science-based holistic health and
                environmental sustainability for us - and generations to come.
              </p>
              <div className='mt-10'>
                <Link to='news' spy={true} smooth={true} duration={1000}>
                  {' '}
                  <button className='text-white text-xs md:text-lg lg:text-xl font-bold px-6 md:px-6 py-4 rounded-full outline-none focus:outline-none md:mr-4 mb-1 bg-gray-600 active:bg-green-700 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150'>
                    Botanical Immune Booster
                  </button>
                </Link>
                <span onClick={openVideo}>
                  <button className='text-md text-white text-sm md:text-lg lg:text-xl font-bold mx-1 px-8 md:px-12 py-4 rounded-full outline-none focus:outline-none mb-1 bg-gray-500 active:bg-gray-700 uppercase shadow hover:shadow-lg ease-linear transition-all duration-150'>
                    <i className='fas fa-play-circle' /> Load INTRO video
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div
            className={classnames(
              'ml-6 z-20 my-20 relative mx-auto',
              ShowOrNot
            )}
            style={{
              maxWidth: '640px',
              width: '100%',
              height: '300px',
            }}
          >
            <ReactPlayer
              url='https://www.youtube.com/watch?v=4PLVNGufEio'
              className='z-10 absolute'
              controls='true'
              width='95%'
            />
          </div>
        </div>
        <img
          className='absolute top-0 right-0 hidden xs:w6/12 sm:block sm:w-5/12 min-h-500 z-10'
          src={require('../assets/img/ngrc_colors5.png').default}
          alt='...'
        />
      </section>
    </>
  );
}
