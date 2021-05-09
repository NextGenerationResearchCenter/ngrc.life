import React, { useState } from 'react';
import bg from '../assets/img/ngrc_sep_grey2.png';

import image from '../assets/img/image.jpeg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase/firebaseConfig';

export default function Test() {
  // const [notification, setNotification] = useState('');
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
        // setNotification('Thank you for your interest!');
      })
      .catch((error) => {
        toast.error('Error: Something went wrong, try again later!');
        // setNotification('Sorry! There was an error handeling your request!');
      });
  };
  return (
    <>
      <section
        className='news text-gray-600 body-font bg-gray-50 lg:py-20 h-100'
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
              Botanical Immune Booster
            </h2>
            <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
              This last year has left us all very challenged in everyday life.
              However, a promising solution is near. NGRC has reached an
              agreement with a highly proficient FDA- approved science team,
              which has been developing a non-invasive Botanical Immune Booster
              for several years. In collaboration with this science team ― NGRC
              will distribute the natural protection to the market! Moreover,
              in-depth discussions are being conducted with the government in a
              large country that is ready to initiate the launch of this natural
              method to its citizens.
            </p>
            <p className='text-lg xl:text-2xl font-semibold mt-16 text-gray-900 mt-3'>
              Are you interested in learning more about this natural anti-viral
              protection?
            </p>
            <p className='text-gray-400 text-md text-gray-500'>
              For more more information, once it is available ― fill in the form
              below and we will get in touch.
            </p>
          </div>
        </div>{' '}
        <div className='container px-5 mx-auto'>
          {/* <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Botanical Immune Booster
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum
              eligendi mollitia voluptates corrupti alias harum dolorem
              cupiditate, reiciendis assumenda labore facere incidunt laboriosam
              laborum rem omnis. Nisi, culpa eos?
            </p>
          </div> */}
          <form onSubmit={handleSubmit}>
            <div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-20'>
              <div className='relative flex-grow w-full'>
                <label
                  htmlFor='name'
                  className='leading-7 text-sm text-gray-600'
                >
                  Full Name
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
                  Email
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
              <button className='text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded-full text-lg'>
                Submit
              </button>
            </div>
            <div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-20'>
              <span className='text-center text-lg md:text-xl w-full font-bold'>
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
                {/* {notification} */}
              </span>
            </div>
          </form>
        </div>
      </section>

      <section className='about dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-50 py-5 md:py-32'>
        <div className='max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl'>
          <div>
            <h2 className='text-2xl wd:text-3xl font-bold tracking-tight sm:text-4xl dark:text-coolGray-50'>
              About Next Generation Research Center
            </h2>
            <p className='max-w-5xl mt-4 text-base md:text-xl dark:text-coolGray-400'>
              Next Generation Research Center (NGRC) is changing the world. We
              are bridging the gap between science and everyday life to support
              a society based upon the values of compassion and cooperation.
            </p>
            <p className='max-w-5xl mt-4 text-base md:text-xl dark:text-coolGray-400'>
              {' '}
              By engaging a global community with health professionals and
              health seekers, we co-create a platform from which everyone can
              thrive through innovative education, leadership, inter-
              professional collaboration, and research. We embrace global
              research-based traditions and will promote the delivery of
              evidence-based, sustainable, affordable person-centered care.
            </p>
          </div>
          <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center w-100'>
            <div>
              <h3 className='text-xl md:text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50'>
                The future is now ― and we are leading the way
              </h3>
              <p className='text-base md:text-lg dark:text-coolGray-400'>
                By supporting science in the fields of Life Science, Education,
                Environment and Energy, and implementing and sharing the
                knowledge in an easy-to-digest manner, we promote a holistic
                health approach and environmental sustainability for us, and
                generations to come.
              </p>
              <div className='mt-12 space-y-12'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='text-indigo-800 flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-7 h-7'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-gray-800 text-xl md:text-lg font-bold leading-6 dark:text-coolGray-50'>
                      Our Vision
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
                      To create a society based upon the values of compassion
                      and cooperation, where evidence-based pro-health and
                      environmentally sustainable solutions are well integrated
                      into the system and in everyday life, and encourages the
                      people to feel empowered to change their lives.
                    </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900 text-indigo-800'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-7 h-7'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-gray-800 text-xl md:text-lg font-bold leading-6 dark:text-coolGray-50'>
                      Our Mission
                    </h4>
                    <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
                      To support, create and promote science targeted to benefit
                      the wellbeing of the people and the planet - and make sure
                      the world hears about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden='true' className='mt-10 lg:mt-0'>
              <img
                src={image}
                alt=''
                className='mx-auto rounded-lg shadow-lg border border-purple-200'
                style={{ madWidth: '360px', maxHeight: '480px' }}
              />
            </div>
          </div>
          <p className='mt-2 dark:text-coolGray-400 text-base md:text-lg'>
            We are operating in multiple fields to serve humanity in the way we
            love – by spreading science-based knowledge and insights to the
            masses. NGRC is the heart of this new community, and we will promote
            the sharing of knowledge and creativity through our{' '}
            <b>Next Generation Business Center (NGBC) and NGRC Talks</b>. NGBC
            is a support function for Startups, Sole Traders and businesses, and
            offers office space, business and marketing training programs and
            much more. NGRC Talks is our platform for public speakers from which
            everyone can benefit by learning from the best experts and speakers
            in the world.
          </p>
        </div>
      </section>
    </>
  );
}
