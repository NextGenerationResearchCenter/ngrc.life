import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import ReactFlagsSelect from 'react-flags-select';
import bg from "../assets/img/ngrc_sep_grey2.png";
import exitIntent from 'exit-intent';
import Modal from 'react-modal';
import {useLocalStorage} from "../localStorage";
import {db} from "../firebase/firebaseConfig";
import {toast} from "react-toastify";
import PictureLogo from '../assets/img/ngrc_logo.png';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [selected, setSelected] = useState('GB');
  const [lan, setLan] = useState('');
  const { t, i18n } = useTranslation();
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({});

  // Similar to useState but first arg is key to the value in local storage.
  const [subscriptionStatus, setSubscriptionStatus] = useLocalStorage("subscription", "not-subscribed");

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
      if (subscriptionStatus==="not-subscribed") {
        openModal();
        setSubscriptionStatus("subscribed");
      }
    }
  })

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
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
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='header'
              spy={true}
              smooth={true}
              duration={1000}
              className='inline-block whitespace-nowrap cursor-pointer'
            >
              <img
                src={PictureLogo}
                width={40}
                alt='Logo'
                className='p-0 m-0'
              />
            </Link>
            <div className='flex center-items'>
              <button
                className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className='fas fa-bars'></i>
              </button>
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
              <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                <li className='flex items-center flex-col lg:flex-row bg-gray-50'>
                  <Link
                    className='text-md py-2 px-4 block font-medium w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='header'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span className='text-gray-800 text-sm hover:text-black font-medium leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
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
                    <span className='text-gray-800 text-sm hover:text-black font-medium leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
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
                    <span className='text-gray-800 text-sm hover:text-black font-medium leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
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
                    <span className='text-gray-700 text-sm font-medium hover:text-black leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
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
                    className='m-0 p-0 bg-gray-50'
                  />
                </li>
              </ul>
              <div className='flex bg-gray-50 items-center bg-gray-100 rounded'>
                <li className='flex items-center'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.facebook.com/ngrc.life'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-facebook-f text-xl leading-lg ' />
                  </a>
                </li>
                <li className='flex items-center bg-gray-100'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.instagram.com/ngrc.life/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-instagram text-2xl leading-lg' />
                  </a>
                </li>
                <li className='flex items-center bg-gray-100'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.linkedin.com/company/ngrc/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-linkedin-in text-xl leading-lg' />
                  </a>
                </li>
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
              contentLabel="Example Modal"
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
                      (By filling in this form you agree to getting our newsletter)
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
  overlay:{
    backgroundColor       : '#000000CC',
    zIndex                : '99',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderTop             : 'solid 5px #DA3A41',
    borderRight           : 'solid 5px #008FAD',
    borderBottom          : 'solid 5px #FFB23C',
    borderLeft            : 'solid 5px #17AB60',
    borderRadius          : '5px',
    backgroundColor       : '#FFFFFF'
  }
};