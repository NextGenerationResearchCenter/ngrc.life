import React from 'react';
import image from '../assets/img/image.jpeg';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      className='dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-50 pt-12 pb-5 md:py-32'
      id='about'
    >
      <div className='max-w-xl p-6 mx-auto space-y-16 lg:px-8 lg:max-w-7xl'>
        <div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
            {t('about.h1-1')}
          </h2>
          <hr className='mb-8 mt-3 border bg-gray-900' />
          <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
            {t('about.p1.part1')}
          </p>
          <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
            {t('about.p1.part2')}
          </p>
        </div>
        <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center w-100'>
          <div>
            <h3 className='text-xl md:text-2xl lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
              {t('about.h2-1')}
            </h3>
            <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
              {t('about.p2')}
            </p>
            <div className='mt-12 space-y-12'>
              <div className='flex'>
                <div className='ml-4'>
                  <h4 className='text-md md:text-lg lg:text-xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                    Our Vision
                  </h4>
                  <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                    {t('about.p-vision')}
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='ml-4'>
                  <h4 className='text-md md:text-lg lg:text-xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                    Our Mission
                  </h4>
                  <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
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
      </div>
      <div className='max-w-xl mx-auto lg:max-w-7xl  p-6'>
        <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
          {t('about.p3.part1')}
        </p>
        <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
          {t('about.p3.part2')}
        </p>
        <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
          {t('about.p3.part3')}
        </p>
      </div>
    </section>
  );
}
