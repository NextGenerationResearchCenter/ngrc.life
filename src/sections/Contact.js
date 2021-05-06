import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-ngrc-webapp.cloudfunctions.net/submit',
      formData
    )
      .then((res) => {
        db.collection('contact_emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className='text-gray-600 body-font relative contact'>
      <div className='absolute inset-0 bg-gray-300'>
        <iframe
          width='100%'
          height='100%'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          title='map'
          scrolling='no'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994791.2354672542!2d32.89810621268192!3d35.01566267476171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfa9cb9027d7e1%3A0xff2ff556d5a77a40!2sNext%20Generation%20Research%20Center%20HQ!5e0!3m2!1sen!2s!4v1620249532211!5m2!1sen!2s'
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className='container px-5 py-24 mx-auto flex'>
        <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
          <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
            Feedback and contact
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            Get in touch with us by filling in the form below
          </p>
          <form onSubmit={handleSubmit}>
            <div className='relative mb-4'>
              <label for='email' className='leading-7 text-sm text-gray-600'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                control-id='ControlID-83'
                onChange={updateInput}
                value={formData.name || ''}
              />
            </div>
            <div className='relative mb-4'>
              <label for='email' className='leading-7 text-sm text-gray-600'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                onChange={updateInput}
                value={formData.email || ''}
              />
            </div>
            <div className='relative mb-4'>
              <label for='message' className='leading-7 text-sm text-gray-600'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                onChange={updateInput}
                value={formData.message || ''}
              ></textarea>
            </div>
            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
          </form>
          <p className='text-xs text-gray-500 mt-3'>
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}
