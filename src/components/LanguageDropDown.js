import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropDown = () => {
  const { i18n } = useTranslation();

  return (
    <div className='dropdown inline-block relative'>
      <button className='text-gray-700 font-semibold py-2 pl-2 lg:px-4 rounded inline-flex items-center text-center align-baseline'>
        <div className='flex items-center text-md sm:text-xl'>
          <i className='fas fa-globe mr-2 lg:mr-1' />
          <span className='h-full mx-2 text-sm sm:text-xl pb-1'>
            {i18n.language}
          </span>
          <svg
            className='fill-current h-4 w-4 md:h-5 md:w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
          </svg>
        </div>
      </button>

      <ul className='dropdown-menu absolute hidden text-gray-700 pt-1'>
        <li
          className='rounded-t hover:bg-gray-200 bg-white py-3 px-5 block whitespace-no-wrap cursor-pointer'
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </li>
        <li
          className='rounded-t hover:bg-gray-200 bg-white py-3 px-5 block whitespace-no-wrap cursor-pointer'
          onClick={() => i18n.changeLanguage('sv')}
        >
          SV
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropDown;
