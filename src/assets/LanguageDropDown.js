import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropDown = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div class='dropdown inline-block relative'>
      <button class='text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center text-center align-baseline'>
        <div className='flex items-center'>
          <i class='fas fa-globe'></i>
          <span class='mx-2 text-xl'>{i18n.language}</span>
          <svg
            class='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
          </svg>
        </div>
      </button>

      <ul class='dropdown-menu absolute hidden text-gray-700 pt-1'>
        <li
          class='rounded-t hover:bg-gray-200 py-3 px-5 block whitespace-no-wrap cursor-pointer'
          onClick={() => changeLanguage('en')}
        >
          EN
        </li>
        <li
          class='rounded-t hover:bg-gray-200 py-3 px-5 block whitespace-no-wrap cursor-pointer'
          onClick={() => changeLanguage('sv')}
        >
          SV
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropDown;
