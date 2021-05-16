import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import ReactFlagsSelect from 'react-flags-select';
import bg from '../assets/img/ngrc_sep_grey2.png';
import exitIntent from 'exit-intent';
import Modal from 'react-modal';
import { useLocalStorage } from '../localStorage';
import { db } from '../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import PictureLogo from '../assets/img/ngrc_logo.png';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [selected, setSelected] = useState('GB');
  const [lan, setLan] = useState('');
  const { t, i18n } = useTranslation();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({});

  // Similar to useState but first arg is key to the value in local storage.
  const [subscriptionStatus, setSubscriptionStatus] = useLocalStorage(
    'subscription',
    'not-subscribed'
  );

  useEffect(() => {
    if (selected === 'GB') {
      setLan('en');
    } else if (selected === 'SE') {
      setLan('sv');
    }
    i18n.changeLanguage(lan);

    Modal.setAppElement('body');
    // Destroy exit-intent
    removeExitIntent();
  }, [i18n, lan, selected]);

  // Initialise exit-intent
  const removeExitIntent = exitIntent({
    threshold: 15,
    maxDisplays: 1,
    eventThrottle: 10,
    onExitIntent: () => {
      setSubscriptionStatus('subscribed');
      if (subscriptionStatus === 'not-subscribed') {
        openModal();
        setSubscriptionStatus('subscribed');
      }
    },
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    setFormData({
      name: '',
      email: '',
    });
  };
  const postData = () => {
    db.collection('bio_interest')
      .add({
        name: formData.name,
        email: formData.email,
        time: new Date(),
      })
      .then((res) => {
        toast.success('Success: Thank you for showing your interest!');
      })
      .catch((error) => {
        toast.error('Error: Something went wrong, try again later!');
      });
  };

  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-gray-50 shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between py-1'>
          <div className='items-center w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              duration={1000}
              className='cursor-pointer'
            >
              <img
                src={PictureLogo}
                style={{ width: '40px', height: '40px' }}
                alt='Logo'
              />
            </Link>
            <div className='flex items-center'>
              <ReactFlagsSelect
                countries={['GB', 'SE']}
                customLabels={{
                  GB: 'EN',
                  SE: 'SE',
                }}
                placeholder='Language'
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className='m-0 p-0 bg-gray-50 block lg:hidden mx-3'
              />
              <div className='flex center-items'>
                <button
                  className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                  type='button'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <i className='fas fa-bars' />
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <ul className='flex flex-col pt-3 lg:pt-0 lg:mt-0 lg:flex-row list-none lg:ml-auto bg-gray-50'>
                <li className='flex items-center flex-col lg:flex-row text-center'>
                  <Link
                    className='text-md py-2 px-4 block font-medium w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='hero'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      className='text-gray-800 text-sm hover:text-black font-medium leading-relaxed whitespace-nowrap uppercase cursor-pointer'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink1')}
                    </span>
                  </Link>
                  <Link
                    className='text-md py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      className='text-gray-800 text-sm hover:text-black font-medium leading-relaxed whitespace-nowrap uppercase cursor-pointer'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink2')}
                    </span>
                  </Link>
                  <Link
                    className='text-md py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='news'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      className='text-gray-800 text-sm hover:text-black font-medium leading-relaxed whitespace-nowrap uppercase cursor-pointer'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink3')}
                    </span>
                  </Link>
                  <Link
                    className=' py-2 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      className='text-gray-700 text-sm font-medium hover:text-black leading-relaxed whitespace-nowrap uppercase cursor-pointer'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink4')}
                    </span>
                  </Link>
                </li>
                <li className='flex flex-col lg:flex-row bg-gray-50 px-6 py-3 lg:py-0'>
                  <ReactFlagsSelect
                    countries={['GB', 'SE']}
                    customLabels={{
                      GB: 'EN',
                      SE: 'SE',
                    }}
                    placeholder='Language'
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className='m-0 p-0 bg-gray-50 hidden lg:block'
                  />
                </li>
              </ul>
              <div className='flex px-2 pb-2 lg:pb-0 items-center bg-gray-50'>
                <a
                  href='https://www.linkedin.com/company/ngrc/'
                  className='mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
                  aria-label='Linkden'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg
                    className='w-4 h-4 lg:w-6 lg:h-6 fill-current'
                    viewBox='0 0 512 512'
                  >
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
                  <svg
                    className='w-4 h-4 lg:w-6 lg:h-6 fill-current'
                    viewBox='0 0 512 512'
                  >
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
                  <svg
                    className='w-4 h-4 lg:w-6 lg:h-6 fill-current'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z'
                    ></path>
                  </svg>
                </a>
              </div>

              {/* <li className='flex items-center'>
                <button
                  className='bg-indigo-500 text-white active:bg-red-700 text-sm font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                >
                  <i class='fas fa-info-circle'></i> CALL TO ACTION
                </button>
              </li> */}
            </ul>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <section
              className='news text-gray-600 body-font bg-gray-50 py-5 -100'
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className='container max-w-6xl px-5 mx-auto'>
                <div className='flex flex-col text-center w-full lg:mb-12'>
                  <p className='text-lg xl:text-2xl font-semibold text-gray-900 mt-3'>
                    {t('navbar.subscribe-title')}
                  </p>
                  <p className='text-gray-400 text-md text-gray-500'>
                    {t('navbar.subscribe-text')}
                  </p>
                </div>
              </div>{' '}
              <div className='container px-5 mx-auto'>
                <form onSubmit={handleSubmit}>
                  <div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:px-0 items-end'>
                    <div className='relative flex-grow w-full'>
                      <label
                        htmlFor='name'
                        className='leading-7 text-sm text-gray-600'
                      >
                        {t('news.form-field-1')}
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        onChange={updateInput}
                        value={formData.name || ''}
                      />
                    </div>
                  </div>
                  <div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:px-0 items-end'>
                    <div className='relative flex-grow w-full'>
                      <label
                        htmlFor='email'
                        className='leading-7 text-sm text-gray-600'
                      >
                        {t('news.form-field-2')}
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        onChange={updateInput}
                        value={formData.email || ''}
                      />
                    </div>
                  </div>
                  <div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:px-0 items-end mt-6'>
                    <p className='text-xs text-gray-500 flex lg:w-2/3 w-full mx-auto px-8 sm:space-x-4 sm:px-0 mt-2 text-center invisible'>
                      (By filling in this form you agree to getting our
                      newsletter)
                    </p>
                    <button className='text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded-full text-lg m-2 sm:m-0'>
                      {t('news.form-submit')}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </Modal>
        </div>
      </nav>
    </>
  );
}

const customStyles = {
  overlay: {
    backgroundColor: '#000000CC',
    zIndex: '99',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderTop: 'solid 5px #DA3A41',
    borderRight: 'solid 5px #008FAD',
    borderBottom: 'solid 5px #FFB23C',
    borderLeft: 'solid 5px #17AB60',
    borderRadius: '5px',
    backgroundColor: '#FFFFFF',
    fontFamily: 'montregular',
  },
};
