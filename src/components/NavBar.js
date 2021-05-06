import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function NavBar(props) {
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const getLanguage = () => {
    const currentLanguage = i18n.language;
    return currentLanguage;
  };

  const { t, i18n } = useTranslation();

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-100 shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
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
              <li className='flex items-center flex-col lg:flex-row bg-gray-100'>
                {/* <IndexDropdown /> */}
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
                <span
                  onClick={() => changeLanguage('sv')}
                  className='font-bold text-sm m-2'
                >
                  SWE
                </span>

                <span
                  onClick={() => changeLanguage('en')}
                  className='font-bold text-sm m-2'
                >
                  ENG
                </span>
              </li>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='text-blueGray-400 fab fa-facebook text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Share</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='text-blueGray-400 fab fa-twitter text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Tweet</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='text-blueGray-400 fab fa-github text-lg leading-lg' />
                  <span className='lg:hidden inline-block ml-2'>Star</span>
                </a>
              </li>

              <li className='flex items-center'>
                <button
                  className='bg-gray-700 text-white active:bg-red-700 text-sm font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                >
                  <i class='fas fa-info-circle'></i> CALL TO ACTION
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
