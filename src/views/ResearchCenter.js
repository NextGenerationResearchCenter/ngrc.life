import React from 'react';
import { useTranslation } from 'react-i18next';

import LifeSciencePic1 from '../assets/img/lifescience_one.png';
import LifeSciencePic2 from '../assets/img/lifescience_two.jpg';
import Background from '../assets/img/LifeScience_hero.jpg';

export default function ResearchCenter() {
  const { t } = useTranslation();
  return (
    <>
      <section
        className='py-6 items-top flex xl:h-screen'
        id='research-center-hero'
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
      >
        <div className='max-w-xl px-6 pt-20 lg:pt-32 mx-auto lg:px-8 lg:max-w-7xl'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-left font-montheavy tracking-tight dark:text-coolGray-50 text-graylight'>
            Research Center
          </h2>

          <p className='mt-0 lg:mt-3 dark:text-coolGray-400 text-black text-base md:text-md lg:text-2xl font-montregular pt-3'>
            {t('research-center.h1-sub')}
          </p>
          <p className='mt-2 dark:text-coolGray-400 text-black text-base md:text-md lg:text-lg font-montregular pt-3'>
            {t('research-center.p-1')}
          </p>
          <p className='mt-2 dark:text-coolGray-400 text-black text-base md:text-md lg:text-lg font-montregular pt-3'>
            {t('research-center.p-2')}
          </p>
        </div>
      </section>
      {/* LIFE SCIENCE SECTION */}
      <section
        className='dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-100'
        id='life-science'
      >
        <div className='container max-w-xl p-6 lg:px-16 py-14 lg:py-20 mx-auto space-y-12 lg:max-w-7xl'>
          <div className='flex items-center lg:my-5 justify-center'>
            <div class='w-16 h-16 lg:w-24 lg:h-24 p-1 mr-3 inline-flex items-center justify-center rounded-full bg-red-400 text-black flex-shrink-0 border-4 border-gray-700'>
              <svg
                width='134px'
                height='120px'
                viewBox='0 0 134 120'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <g
                  id='Page-1'
                  stroke='none'
                  stroke-width='1'
                  fill='none'
                  fill-rule='evenodd'
                >
                  <g
                    id='Icons'
                    transform='translate(-333.000000, -357.000000)'
                    fill-rule='nonzero'
                  >
                    <g id='Atom' transform='translate(333.666667, 357.333333)'>
                      <path
                        d='M113.066383,40.0056738 C110.555745,39.04 107.877163,38.1636879 105.060709,37.377305 C105.787801,34.5449645 106.368227,31.7869504 106.787518,29.1296454 C108.968794,15.2978723 106.558298,5.5951773 100.000284,1.80879433 C98.0939007,0.708085106 95.9029787,0.149787234 93.4885106,0.149787234 C85.8624113,0.149787234 76.2260993,5.81361702 66.5046809,15.3784397 C64.3809929,13.292766 62.2476596,11.3770213 60.1211348,9.65730496 C49.2334752,0.852198582 39.6246809,-1.91177305 33.067234,1.87460993 C28.852766,4.30780142 26.2896454,9.27687943 25.6556028,16.2439716 C25.5489362,17.4141844 26.4113475,18.449078 27.5815603,18.555461 C28.755461,18.6638298 29.786383,17.7997163 29.8930496,16.6295035 C30.2442553,12.7730496 31.4487943,7.7222695 35.1946099,5.55971631 C40.0485106,2.75659574 48.1588652,5.45617021 57.4453901,12.9656738 C59.471773,14.6042553 61.5060993,16.4314894 63.533617,18.421844 C59.4561702,22.7602837 55.3985816,27.7534752 51.5024113,33.2720567 C44.6485106,33.8958865 38.1202837,34.9424113 32.129078,36.3778723 C31.08,32.2995745 30.3594326,28.408227 30.0039716,24.7957447 C29.889078,23.626383 28.8524823,22.7719149 27.6782979,22.8868085 C26.5089362,23.0017021 25.6541844,24.0431206 25.7693617,25.2124823 C26.1455319,29.0348936 26.906383,33.1460993 28.0153191,37.4487943 C25.2930496,38.2164539 22.701844,39.0692199 20.2675177,40.0053901 C7.19744681,45.0323404 5.68434189e-14,51.9713475 5.68434189e-14,59.5438298 C5.68434189e-14,67.1163121 7.19744681,74.0553191 20.2669504,79.0819858 C22.7775887,80.0476596 25.4561702,80.9239716 28.2726241,81.7103546 C27.5455319,84.542695 26.9651064,87.3007092 26.5458156,89.9580142 C24.364539,103.789787 26.7750355,113.492482 33.3330496,117.278865 C35.2394326,118.379574 37.4303546,118.937872 39.8448227,118.937872 C47.3832624,118.937872 56.8862411,113.401418 66.4939007,104.035461 C68.5520567,106.045674 70.6187234,107.89617 72.6791489,109.56227 C80.3843972,115.793759 87.4476596,118.999149 93.2434043,118.999149 C95.6371631,118.999149 97.8161702,118.451631 99.7330496,117.344965 C106.291064,113.558582 108.70156,103.855887 106.520284,90.0241135 C106.101277,87.3670922 105.520851,84.6093617 104.793759,81.777305 C109.173617,80.5710638 113.20227,79.1503546 116.770496,77.5333333 C117.840851,77.048227 118.315177,75.7875177 117.830071,74.7171631 C117.344965,73.6468085 116.083972,73.1721986 115.013901,73.6575887 C111.63461,75.1889362 107.814752,76.5370213 103.654468,77.6836879 C101.934468,71.9358865 99.6439716,65.9356028 96.852766,59.8658156 C99.7693617,53.5900709 102.153475,47.3824113 103.928794,41.4442553 C119.720284,45.8658156 129.078014,52.849078 129.078014,59.5438298 C129.078014,63.8692199 125.306099,67.4380142 122.141844,69.6697872 C121.18156,70.347234 120.95234,71.6746099 121.629504,72.6348936 C122.30695,73.595461 123.634326,73.8243972 124.59461,73.147234 C130.311773,69.1146099 133.333333,64.4104965 133.333333,59.5438298 C133.333333,51.9713475 126.135887,45.0323404 113.066383,40.0056738 Z M93.488227,4.40539007 C95.1460993,4.40539007 96.6212766,4.77163121 97.8723404,5.4941844 C102.726809,8.29702128 104.444255,16.6703546 102.583546,28.4669504 C102.184965,30.9937589 101.633191,33.6184397 100.941277,36.3163121 C94.9251064,34.8899291 88.3741844,33.8539007 81.4995745,33.2425532 C77.6425532,27.7838298 73.5943262,22.791773 69.4782979,18.4190071 C70.2314894,17.6763121 70.9852482,16.9557447 71.7375887,16.2624113 C80.0360284,8.61617021 87.7602837,4.40539007 93.488227,4.40539007 L93.488227,4.40539007 Z M66.5106383,21.4697872 C69.7211348,24.8916312 72.893617,28.7086525 75.9639716,32.8462411 C72.9089362,32.6797163 69.804539,32.5934752 66.6666667,32.5934752 C63.4238298,32.5934752 60.2161702,32.684539 57.0624113,32.8621277 C60.1285106,28.7316312 63.3052482,24.8990071 66.5106383,21.4697872 L66.5106383,21.4697872 Z M66.4956028,97.968227 C63.1713475,94.4448227 59.8868085,90.4956028 56.7123404,86.2048227 C59.9787234,86.3960284 63.3035461,86.4941844 66.6666667,86.4941844 C69.9060993,86.4941844 73.115461,86.3997163 76.275461,86.2192908 C73.1038298,90.492766 69.8139007,94.449078 66.4956028,97.968227 Z M66.6666667,82.2388652 C62.0950355,82.2388652 57.7083688,82.061844 53.5279433,81.732766 C51.1798582,78.3069504 48.9083688,74.7029787 46.7458156,70.9571631 C44.617305,67.2706383 42.6592908,63.550922 40.8856738,59.8493617 C42.7268085,55.9739007 44.7741844,52.0729078 47.0121986,48.1963121 C49.1795745,44.4425532 51.4802837,40.8025532 53.870922,37.329078 C57.9486525,37.017305 62.2195745,36.8487943 66.6666667,36.8487943 C70.9994326,36.8487943 75.1648227,37.0087943 79.147234,37.3052482 C81.5398582,40.7852482 83.853617,44.4499291 86.0547518,48.2621277 C88.2817021,52.1194326 90.3197163,56.0008511 92.1540426,59.857305 C90.3897872,63.5287943 88.4402837,67.2209929 86.3214184,70.8910638 C84.1582979,74.6377305 81.861844,78.2712057 79.4760284,81.7390071 C75.3012766,82.0675177 71.013617,82.2388652 66.6666667,82.2388652 Z M48.0524823,81.2019858 C42.8175887,80.5971631 37.9582979,79.7469504 33.5262411,78.702695 C34.8720567,74.2235461 36.578156,69.5792908 38.6124823,64.8615603 C40.0019858,67.6099291 41.4856738,70.3574468 43.0604255,73.0848227 C44.6683688,75.8700709 46.3367376,78.5801418 48.0524823,81.2019858 Z M48.3900709,37.8462411 C46.6564539,40.4896454 44.9636879,43.2337589 43.3270922,46.0686525 C41.6439716,48.9838298 40.0649645,51.915461 38.5960284,54.8425532 C36.4561702,49.9296454 34.6646809,45.0904965 33.2660993,40.4456738 C37.862695,39.350922 42.9234043,38.4646809 48.3900709,37.8462411 Z M4.25531915,59.5438298 C4.25531915,52.8851064 13.5131915,45.9407092 29.150922,41.515461 C30.9197163,47.4167376 33.2930496,53.6062411 36.1878014,59.8550355 C33.4039716,65.9151773 31.1197163,71.9052482 29.4039716,77.6436879 C13.6130496,73.221844 4.25531915,66.2385816 4.25531915,59.5438298 L4.25531915,59.5438298 Z M39.8451064,114.68227 C38.187234,114.68227 36.7120567,114.316028 35.4609929,113.593475 C30.6065248,110.790638 28.889078,102.417305 30.7497872,90.6207092 C31.1483688,88.0939007 31.7001418,85.4692199 32.3920567,82.7713475 C38.212766,84.1514894 44.5339007,85.1659574 51.164539,85.7838298 C55.1222695,91.4028369 59.2831206,96.5307801 63.5134752,101.003121 C62.8740426,101.627518 62.2343262,102.236596 61.5957447,102.825248 C53.297305,110.471773 45.5730496,114.68227 39.8451064,114.68227 Z M102.317163,90.6868085 C104.177872,102.483404 102.460426,110.856738 97.6059574,113.659574 C92.7512057,116.462128 84.6417021,113.762837 75.3551773,106.253617 C73.3997163,104.67234 71.4363121,102.915461 69.4794326,101.005674 C73.6669504,96.586383 77.8374468,91.4729078 81.8377305,85.8059574 C88.4851064,85.1957447 94.8368794,84.1897872 100.671489,82.8246809 C101.365106,85.5270922 101.918014,88.1560284 102.317163,90.6868085 Z M99.5285106,78.7285106 C94.9713475,79.7875177 90.0785816,80.6207092 84.9642553,81.2093617 C86.6904965,78.5758865 88.3761702,75.8425532 90.0062411,73.0190071 C91.5713475,70.3080851 93.0453901,67.5832624 94.4258156,64.8609929 C96.4669504,69.587234 98.1784397,74.2405674 99.5285106,78.7285106 L99.5285106,78.7285106 Z M94.4453901,54.8575887 C92.9838298,51.947234 91.4133333,49.0329078 89.7398582,46.1344681 C88.0893617,43.275461 86.3756028,40.4953191 84.6116312,37.8087943 C90.1024113,38.4175887 95.186383,39.2961702 99.8070922,40.3849645 C98.4014184,45.0638298 96.6008511,49.9234043 94.4453901,54.8575887 L94.4453901,54.8575887 Z'
                        id='Shape'
                        fill='#9013FE'
                      ></path>
                      <path
                        d='M66.6666667,48.9055319 C60.8005674,48.9055319 56.0283688,53.6777305 56.0283688,59.5438298 C56.0283688,65.4099291 60.8005674,70.1821277 66.6666667,70.1821277 C72.532766,70.1821277 77.3049645,65.4099291 77.3049645,59.5438298 C77.3049645,53.6777305 72.532766,48.9055319 66.6666667,48.9055319 Z M66.6666667,65.9268085 C63.147234,65.9268085 60.2836879,63.0632624 60.2836879,59.5438298 C60.2836879,56.0243972 63.147234,53.1608511 66.6666667,53.1608511 C70.1860993,53.1608511 73.0496454,56.0243972 73.0496454,59.5438298 C73.0496454,63.0632624 70.1860993,65.9268085 66.6666667,65.9268085 Z'
                        id='Shape'
                        fill='#50E38C'
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark ml-3 text-left'>
              Life science
            </h2>
          </div>
          <div className='grid lg:gap-2 lg:grid-cols-2 lg:items-center'>
            <div>
              <p className='mt-4 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-lg font-montregular'>
                {t('lifescience.p-1')}

                <br />
                {t('lifescience.p-2')}
              </p>
              <p className='mt-4 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-lg font-montregular'>
                {t('lifescience.p-3')}
              </p>
            </div>
            <div aria-hidden='true' className='mt-10 lg:mt-0'>
              <img
                src={LifeSciencePic1}
                alt=''
                className='mx-auto rounded-lg shadow-lg'
              />
            </div>
          </div>
          <p className='mt-4 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-lg font-montregular'>
            {t('lifescience.p-4')}
          </p>
          <div className='grid lg:gap-2 lg:grid-cols-2 lg:items-center lg:pt-10'>
            <div className='lg:col-start-2'>
              <h4 className='text-md md:text-lg lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark ml-2'>
                {t('lifescience.h-2')}
              </h4>
              <div className='mt-3 space-y-3'>
                <div className='flex'>
                  <div className=''>
                    <div className='flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 64 64'
                      >
                        <g id='Layer_7' data-name='Layer 7'>
                          <path
                            fill='#383838'
                            d='M32,10.5A21.53,21.53,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.53,21.53,0,0,0,32,10.5ZM43.42,26.86,31,39.26a1.51,1.51,0,0,1-2.12,0l-8.32-8.32a1.5,1.5,0,0,1,2.12-2.12L30,36.08,41.3,24.74A1.5,1.5,0,0,1,43.42,26.86Z'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <p className='mt-2 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-md font-montregular'>
                      {t('lifescience.l-1')}
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 64 64'
                      >
                        <g id='Layer_7' data-name='Layer 7'>
                          <path
                            fill='#383838'
                            d='M32,10.5A21.53,21.53,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.53,21.53,0,0,0,32,10.5ZM43.42,26.86,31,39.26a1.51,1.51,0,0,1-2.12,0l-8.32-8.32a1.5,1.5,0,0,1,2.12-2.12L30,36.08,41.3,24.74A1.5,1.5,0,0,1,43.42,26.86Z'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <p className='mt-2 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-md font-montregular'>
                      {t('lifescience.l-2')}
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 64 64'
                      >
                        <g id='Layer_7' data-name='Layer 7'>
                          <path
                            fill='#383838'
                            d='M32,10.5A21.53,21.53,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.53,21.53,0,0,0,32,10.5ZM43.42,26.86,31,39.26a1.51,1.51,0,0,1-2.12,0l-8.32-8.32a1.5,1.5,0,0,1,2.12-2.12L30,36.08,41.3,24.74A1.5,1.5,0,0,1,43.42,26.86Z'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <p className='mt-2 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-md font-montregular'>
                      {t('lifescience.l-3')}
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 64 64'
                      >
                        <g id='Layer_7' data-name='Layer 7'>
                          <path
                            fill='#383838'
                            d='M32,10.5A21.53,21.53,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.53,21.53,0,0,0,32,10.5ZM43.42,26.86,31,39.26a1.51,1.51,0,0,1-2.12,0l-8.32-8.32a1.5,1.5,0,0,1,2.12-2.12L30,36.08,41.3,24.74A1.5,1.5,0,0,1,43.42,26.86Z'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <p className='mt-2 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-md font-montregular'>
                      {t('lifescience.l-4')}
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 64 64'
                      >
                        <g id='Layer_7' data-name='Layer 7'>
                          <path
                            fill='#383838'
                            d='M32,10.5A21.53,21.53,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.53,21.53,0,0,0,32,10.5ZM43.42,26.86,31,39.26a1.51,1.51,0,0,1-2.12,0l-8.32-8.32a1.5,1.5,0,0,1,2.12-2.12L30,36.08,41.3,24.74A1.5,1.5,0,0,1,43.42,26.86Z'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <p className='mt-2 dark:text-coolGray-400 text-graydark text-base md:text-md lg:text-md font-montregular'>
                      {t('lifescience.l-5')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1'>
              <img
                src={LifeSciencePic2}
                alt=''
                className='mx-auto rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
