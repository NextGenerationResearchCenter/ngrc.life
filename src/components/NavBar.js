import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
// import IndexDropdown from '../components/IndexDropdown';
import ReactFlagsSelect from 'react-flags-select';

// import exitIntent from 'exit-intent';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [selected, setSelected] = useState('GB');
  const [lan, setLan] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (selected === 'GB') {
      setLan('en');
    } else if (selected === 'SE') {
      setLan('sv');
    }
    i18n.changeLanguage(lan);
  }, [i18n, lan, selected]);

  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-gray-50 shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between py-2'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='header'
              spy={true}
              smooth={true}
              duration={1000}
              className='text-emerald-500 text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase cursor-pointer'
            >
              Next Generation Research Center
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
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='header'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span className='text-gray-800 text-sm font-medium hover:text-black leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
                      {t('navbar.navlink1')}
                    </span>
                  </Link>
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='news'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span className='text-gray-800 text-sm font-medium hover:text-black  leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
                      {t('navbar.navlink2')}
                    </span>
                  </Link>
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span className='text-gray-800 text-sm font-medium hover:text-black  leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
                      {t('navbar.navlink3')}
                    </span>
                  </Link>
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <span className='text-gray-800 text-sm font-medium hover:text-black  leading-relaxed whitespace-nowrap uppercase cursor-pointer'>
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
              <div className='flex bg-gray-50 items-center bg-gray-100 rounded-full'>
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
                <li className='flex items-center bg-gray-100 rounded-full'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.instagram.com/ngrc.life/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-instagram text-2xl leading-lg' />
                  </a>
                </li>
                <li className='flex items-center bg-gray-100 rounded-full'>
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
        </div>
      </nav>
    </>
  );
}
