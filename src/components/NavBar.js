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
              to='/'
              className='text-emerald-500 text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            >
              Next Generation Research Center
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id='example-navbar-warning'
          >
            {/* <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar'
                >
                  <i className='text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2' />{' '}
                  Docs
                </a>
              </li>
            </ul> */}

            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                <li className='flex items-center flex-col lg:flex-row bg-gray-50'>
                  {/* <HeroDropdown /> */}
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='header'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    {t('ni1')}
                  </Link>
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='news'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    {t('ni2')}
                  </Link>
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    {t('ni3')}
                  </Link>
                  <Link
                    className='text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 ease-linear transition-all duration-150'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    {t('ni4')}
                  </Link>
                  {/* <IndexDropdown /> */}
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
              <div className='flex bg-gray-50 items-center'>
                <li className='flex items-center'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.facebook.com/ngrc.life'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-facebook text-lg leading-lg ' />
                  </a>
                </li>
                <li className='flex items-center'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.instagram.com/ngrc.life/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-instagram-square text-lg leading-lg' />
                  </a>
                </li>
                <li className='flex items-center'>
                  <a
                    className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    href='https://www.linkedin.com/company/ngrc/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='text-blueGray-400 fab fa-linkedin text-lg leading-lg' />
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
