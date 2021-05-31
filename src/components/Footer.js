// import bg from '../assets/img/ngrc_sep_grey.png';
// import { useTranslation } from 'react-i18next';

export default function Footer() {
  // const { t } = useTranslation();
  return (
    <footer
      className='bg-white dark:bg-gray-800 py-10 bg-footer-design bg-opacity-10'
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex'>
          <div className='w-full -mx-6 lg:w-2/5'>
            <div className='px-6'>
              <div>
                <img
                  src={require('../assets/img/ngrc_logo.png').default}
                  alt='...'
                  // style={{ width: '300px' }}
                  className='w-20 sm:w-36 mb-5'
                />
                <span className='text-md md:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark my-2'>
                  Next Generation Research Center
                </span>
              </div>

              <p className='text-md md:text-lg font-montregular tracking-tight dark:text-coolGray-50 text-graydark'>
                Bringing science to everyday life
              </p>
              {/* <p>
                Next Generation Research Center (NGRC) is changing the world. We
                are bridging the gap between science and everyday life in order
                to support a society based upon the values of compassion and
                cooperation.
              </p> */}

              <div className='flex mt-4 -mx-2'>
                <a
                  href='https://www.linkedin.com/company/ngrc/'
                  className='mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
                  aria-label='Linkden'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 512 512'>
                    <path d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z' />
                  </svg>
                </a>

                <a
                  href='https://www.facebook.com/ngrc.life'
                  className='mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
                  aria-label='Facebook'
                  rel='noreferrer'
                  target='_blank'
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 512 512'>
                    <path d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z' />
                  </svg>
                </a>

                {/* <a
                  href='#'
                  className='mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
                  aria-label='Twitter'
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 512 512'>
                    <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z' />
                  </svg>
                </a> */}
                <a
                  href='https://www.instagram.com/ngrc.life/'
                  className='mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
                  aria-label='Facebook'
                  rel='noreferrer'
                  target='_blank'
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 512 512'>
                    <path
                      fill='currentColor'
                      d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <div className='mt-6 lg:mt-0 lg:flex-1'>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4'>
              <div>
                <h3 className='text-gray-700 uppercase dark:text-white'>
                  About
                </h3>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Company
                </a>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  community
                </a>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className='text-gray-700 uppercase dark:text-white'>
                  Blog
                </h3>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Tec
                </a>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Music
                </a>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className='text-gray-700 uppercase dark:text-white'>
                  Products
                </h3>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Mega cloud
                </a>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Aperion UI
                </a>
                <a
                  href='#'
                  className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                >
                  Meraki UI
                </a>
              </div> */}

          {/* <div>
                <h3 className='text-gray-700 uppercase dark:text-white'>
                  Contact
                </h3>
                <span className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'>
                  +1 526 654 8965
                </span>
                <span className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'>
                  info@ngrc.life
                </span>
              </div> 
            </div>
          </div>*/}
        </div>

        <hr className='h-px my-6 bg-gray-300 border-none dark:bg-gray-700' />

        <div>
          <p className='text-center text-graylight dark:text-white font-montregular text-sm md:text-md'>
            © Next Generation Research Center 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
