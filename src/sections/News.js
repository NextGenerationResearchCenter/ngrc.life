import React, { useState } from 'react';
import bg from '../assets/img/ngrc_sep_grey2.png';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase/firebaseConfig';

export default function Test() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});

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
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section
        className='news text-gray-600 body-font bg-gray-50 py-20'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='container max-w-6xl px-5 py-8 mx-auto'>
          <div className='flex flex-col text-center w-full lg:mb-12'>
            <h2 className='text-2xl lg:text-5xl font-bold tracking-tight sm:text-4xl dark:text-coolGray-50 lg:mb-8 lg:pt-12 text-gray-900'>
              {/* <i className='fas fa-infinity text-gray-600'></i>  */}
              {t('news.h1')}
            </h2>
            <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
              {t('news.p1.part1')}
            </p>
            <p className='text-lg xl:text-2xl font-semibold mt-16 text-gray-900 mt-3'>
              {t('news.h2-1')}
            </p>
            <p className='text-gray-400 text-md text-gray-500'>
              {t('news.h2-1-sub')}
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
              <button className='text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded-full text-lg m-2 sm:m-0'>
                {t('news.form-submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}