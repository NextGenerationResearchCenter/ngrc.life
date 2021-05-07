import React from 'react';
import { Link } from 'react-router-dom';
import { createPopper } from '@popperjs/core';
import { useTranslation } from 'react-i18next';

const IndexDropdown = () => {
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  // const getLanguage = () => {
  //   const currentLanguage = i18n.language;
  //   return currentLanguage;
  // };

  const { i18n } = useTranslation();
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <button className='relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none w-16 mx-5 flex items-center border'>
          <span className='m-1 text-md font-bold'>{i18n.language}</span>
          <svg
            className='w-5 h-5 text-gray-800 dark:text-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link
          to='/admin/dashboard'
          className='text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-blueGray-700'
        >
          <span
            onClick={() => changeLanguage('sv')}
            className='font-bold text-sm m-2'
          >
            SV
          </span>
          <span
            onClick={() => changeLanguage('en')}
            className='font-bold text-sm m-2'
          >
            EN
          </span>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
