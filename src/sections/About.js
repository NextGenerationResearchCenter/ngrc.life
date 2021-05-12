import React from 'react';
import image from '../assets/img/image.jpeg';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className='about dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-50 py-5 md:py-32'>
        <div className='max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl'>
          <div>
            <h2 className='text-2xl wd:text-3xl font-bold tracking-tight sm:text-4xl dark:text-coolGray-50'>
              {t('about.h1-1')}
            </h2>
            <p className='max-w-5xl mt-4 text-base md:text-lg dark:text-coolGray-400'>
              {t('about.p1.part1')}
            </p>
            <p className='max-w-5xl mt-4 text-base md:text-lg dark:text-coolGray-400'>
              {t('about.p1.part2')}
            </p>
          </div>
          <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center w-100'>
            <div>
              <h3 className='text-xl md:text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50'>
                {t('about.h2-1')}
              </h3>
              <p className='text-base md:text-lg dark:text-coolGray-400'>
                {t('about.p2')}
              </p>
              <div className='mt-12 space-y-12'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='text-indigo-800 flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-7 h-7'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-gray-800 text-xl md:text-lg font-bold leading-6 dark:text-coolGray-50'>
                      Our Vision
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
                      {t('about.p-vision')}
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900 text-indigo-800'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-7 h-7'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-gray-800 text-xl md:text-lg font-bold leading-6 dark:text-coolGray-50'>
                      Our Mission
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
                      {t('about.p-mission')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden='true' className='mt-10 lg:mt-0'>
              <img
                src={image}
                alt=''
                className='mx-auto rounded-lg shadow-lg border border-purple-200'
                style={{ madWidth: '360px', maxHeight: '480px' }}
              />
            </div>
          </div>
          <div>
            <p className='max-w-5xl mt-3 lg:mt-6 text-base md:text-lg dark:text-coolGray-400'>
              {t('about.p3.part1')}
            </p>
            <p className='max-w-5xl mt-3 lg:mt-6 text-base md:text-lg dark:text-coolGray-400'>
              {t('about.p3.part2')}
            </p>
            <p className='max-w-5xl mt-3 lg:mt-6 text-base md:text-lg dark:text-coolGray-400'>
              {t('about.p3.part3')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
