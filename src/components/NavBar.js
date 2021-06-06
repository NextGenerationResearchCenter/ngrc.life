import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import bg from '../assets/img/ngrc_sep_grey2.png';
import exitIntent from 'exit-intent';
import Modal from 'react-modal';
import { useLocalStorage } from '../localStorage';
import { db } from '../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import PictureLogo from '../assets/img/ngrc_logo.png';
import LanguageDropDown from './LanguageDropDown';
import areas from '../assets/img/areas.png';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  const { pathname } = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Navbar scroll hooks
  const [navbarVersion, setNavbarVersion] = useState('bg-transparent');
  const [logoShow, setLogoShow] = useState('hidden');
  const [areasWidth, setAreasWidth] = useState('max-w-xl');
  const [fourAreasSmall, setFourAreasSmall] = useState('');
  const [fourAreasSmallMenu, setFourAreasSmallMenu] = useState('');
  const [areasShow, setAreasShow] = useState('');

  const { t } = useTranslation();

  //Exit intent hook usage
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({});

  // Similar to useState but first arg is key to the value in local storage.
  const [subscriptionStatus, setSubscriptionStatus] = useLocalStorage(
    'subscription',
    'not-subscribed'
  );

  useEffect(() => {
    const updateNavbar = () => {
      if (
        document.documentElement.scrollTop > 150 ||
        document.body.scrollTop > 150
      ) {
        setNavbarVersion('nav-scrolled');
        setAreasWidth('max-w-lg');
        setFourAreasSmall('hidden');
        setFourAreasSmallMenu('block');
        if (pathname === '/research-center') {
          setLogoShow('block');
        } else {
          setLogoShow('');
        }
      } else if (
        document.documentElement.scrollTop < 151 ||
        document.body.scrollTop < 151
      ) {
        setNavbarVersion('bg-transparent');
        setAreasWidth('max-w-xl');
        setFourAreasSmall('block');
        setFourAreasSmallMenu('hidden');
        if (pathname === '/research-center') {
          setLogoShow('pl-10');
          setAreasShow('hidden');
        } else {
          setLogoShow('hidden');
          setAreasShow('block');
        }
      }
    };

    Modal.setAppElement('body');

    // Destroy exit-intent
    removeExitIntent();

    updateNavbar();

    window.addEventListener('scroll', updateNavbar);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbar);
    };
  });

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
      <nav
        className={`${navbarVersion} top-0 fixed z-50 w-full flex flex-wrap items-center justify-between navbar-expand-sm bg-transparent py-1 lg:py-8 transition duration-500 ease-in-out`}
      >
        <div className='container lg:px-10 mx-auto flex flex-wrap items-center justify-between'>
          <div className='items-center w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <HashLink smooth to='/#hero'>
              <div className='pl-2 flex items-center'>
                <div className='flex'>
                  <div>
                    <div className='flex items-center'>
                      <span className={`${logoShow} mr-8 my-2 lg:mt-0`}>
                        <img
                          src={PictureLogo}
                          style={{ width: '60px', height: '60px' }}
                          alt='Logo'
                        />
                      </span>

                      <span
                        className={`xl:${areasWidth} hidden sm:${areasShow} max-w-sm lg:max-w-sm`}
                      >
                        <img src={areas} alt='The four areas' />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </HashLink>

            <div className='flex items-center'>
              <span className='lg:hidden'>
                <LanguageDropDown />
              </span>

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
          {/*Four areas compact view*/}
          <div className={`${fourAreasSmall} sm:hidden w-full px-12 py-1`}>
            <img src={areas} alt='Four areas' />
          </div>

          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <ul className='flex flex-col pt-3 lg:pt-0 lg:mt-0 lg:flex-row list-none lg:ml-auto'>
                <li className='flex items-center flex-col lg:flex-row text-center'>
                  {/* <Link
                    className='py-2 px-3 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='hero'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      className='text-graydark text-sm xl:text-lg hover:text-black leading-relaxed whitespace-nowrap cursor-pointer font-montregular'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink1')}
                    </span>
                  </Link> */}
                  <HashLink
                    smooth
                    to='/#about'
                    className='py-2 px-2 xl:px-3 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    spy={true}
                    duration={1000}
                  >
                    <span
                      className='text-graydark text-md xl:text-lg hover:text-black leading-relaxed whitespace-nowrap cursor-pointer font-montregular'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink2')}
                    </span>
                  </HashLink>

                  <HashLink
                    smooth
                    to='/#news'
                    className='py-2 px-2 xl:px-3 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    spy={true}
                    duration={1000}
                  >
                    <span
                      className='text-graydark text-md xl:text-lg hover:text-black leading-relaxed whitespace-nowrap cursor-pointer font-montregular'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink3')}
                    </span>
                  </HashLink>
                  <HashLink
                    smooth
                    to='/#contact'
                    className='py-2 px-2 xl:px-3 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    spy={true}
                    duration={1000}
                  >
                    <span
                      className='text-graydark text-md xl:text-lg hover:text-black leading-relaxed whitespace-nowrap cursor-pointer font-montregular'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink4')}
                    </span>
                  </HashLink>
                  <Link
                    className='py-2 px-4 xl:px-5 block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='/research-center'
                  >
                    <span
                      className='text-ngrcdarkred text-md xl:text-lg hover:text-red-400 leading-relaxed whitespace-nowrap cursor-pointer font-montregular'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t('navbar.navlink5')}
                    </span>
                  </Link>
                  <div
                    className={`${fourAreasSmallMenu} sm:hidden w-full px-3 py-4`}
                  >
                    <img src={areas} alt='Four areas' />
                  </div>
                </li>
                <li className='px-0 xl:px-3 py-3 lg:py-0 hidden lg:block'>
                  <LanguageDropDown />
                </li>
              </ul>
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
                  <p className='text-md text-gray-500'>
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
