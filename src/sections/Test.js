import bg from '../assets/img/ngrc_sep_grey2.png';

export default function Test() {
  return (
    <section
      className='about dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-50 py-5 md:py-32'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      >
      <div className='container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl'>
        <div>
          <h2 className='text-2xl wd:text-3xl font-bold tracking-tight text-center sm:text-4xl dark:text-coolGray-50'>
            Heading 1
          </h2>
          <p className='max-w-5xl mx-auto mt-4 text-base md:text-xl dark:text-coolGray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            suscipit explicabo praesentium iusto soluta excepturi earum rem quas
            culpa voluptatem adipisci laudantium sed, quis debitis odio deleniti
            maxime tempore! Quis? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Minus repudiandae ea ratione porro, harum
            praesentium qui aperiam iusto natus numquam magni in molestias
            accusantium vitae alias laudantium eveniet illum maiores!
          </p>
        </div>

        <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center w-100'>
          <div>
            <h3 className='text-xl md:text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50'>
              Heading 2
            </h3>
            <p className='mt-3 text-base md:text-lg dark:text-coolGray-400'>
              Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
              etiam regione ut, persius eripuit quo id. Sit te euismod
              tacimates.
            </p>
            <div className='mt-12 space-y-12'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
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
                  <h4 className='text-xl md:text-lg font-medium leading-6 dark:text-coolGray-50'>
                    Argument 1
                  </h4>
                  <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
                    Ex usu illum iudico molestie. Pro ne agam facete
                    mediocritatem, ridens labore facete mea ei. Pro id apeirian
                    dignissim.
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
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
                  <h4 className='text-xl md:text-lg font-medium leading-6 dark:text-coolGray-50'>
                    Cu imperdiet posidonium sed
                  </h4>
                  <p className='mt-2 dark:text-coolGray-400'>
                    Amet utinam aliquando ut mea, malis admodum ocurreret nec
                    et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                    quis.
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
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
                  <h4 className='text-xl md:text-lg font-medium leading-6 dark:text-coolGray-50'>
                    Nulla omittam sadipscing mel ne
                  </h4>
                  <p className='mt-2 dark:text-coolGray-400'>
                    At sed possim oporteat probatus, justo graece ne nec, minim
                    commodo legimus ut vix. Ut eos iudico quando soleat, nam
                    modus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden='true' className='mt-10 lg:mt-0'>
            <img
              src='https://source.unsplash.com/random/360x480'
              alt=''
              className='mx-auto rounded-lg shadow-lg'
            />
          </div>
        </div>

        {/* <div class='flex flex-wrap items-center align-top'>
          <div class='lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
            <h1 class='title-font font-medium text-xl md:text-2xl text-gray-900'>
              Do you want more info about BioVac?
            </h1>
            <p class='leading-relaxed mt-4 text-base md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              pariatur velit ducimus voluptas, accusamus nihil id quibusdam
              labore soluta corporis repellendus blanditiis accusantium totam
              ipsum beatae repudiandae odio. Perspiciatis, corporis?
            </p>
          </div>
          <div class='lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
            <h2 class='text-gray-900 text-lg font-medium title-font mb-5 mx-auto'>
              Sign up to to get more information
            </h2>
            <div class='relative mb-4'>
              <label for='full-name' class='leading-7 text-sm text-gray-600'>
                Full Name
              </label>
              <input
                type='text'
                id='full-name'
                name='full-name'
                class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                control-id='ControlID-83'
              />
            </div>
            <div class='relative mb-4'>
              <label for='email' class='leading-7 text-sm text-gray-600'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <button class='text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg'>
              Sign up
            </button>
            <p class='text-xs text-gray-500 mt-3'>
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
{
  /* <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center'>
            <div className='lg:col-start-2'>
              <h3 className='text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50'>
                Eam nibh gloriatur ex
              </h3>
              <p className='mt-3 text-lg dark:text-coolGray-400'>
                Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te
                latine theophrastus. Ea his tale nibh dissentias, mei exerci
                tamquam euripidis cu.
              </p>
              <div className='mt-12 space-y-12'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
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
                    <h4 className='text-lg font-medium leading-6 dark:text-coolGray-50'>
                      Cibo augue offendit has ad
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400'>
                      An per velit appellantur, ut utinam minimum nominavi sit,
                      odio nostro habemus ne nec. Ne sonet regione contentiones
                      est.
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
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
                    <h4 className='text-lg font-medium leading-6 dark:text-coolGray-50'>
                      At eum ferri luptatum lobortis
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400'>
                      Te per quidam maiorum ocurreret, etiam delicatissimi usu
                      ad. Ne has quod periculis. Te sit primis iisque
                      efficiantur.
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
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
                    <h4 className='text-lg font-medium leading-6 dark:text-coolGray-50'>
                      Dicunt verterem evertitur eu sea
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400'>
                      Audire principes rationibus eam an, autem nominavi
                      luptatum per te. Sumo fabulas vim eu, sonet saperet
                      eleifend ut vix.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1'>
              <img
                src='https://source.unsplash.com/random/361x481'
                alt=''
                className='mx-auto rounded-lg shadow-lg'
              />
            </div> */
}
{
  /* </div> */
}
