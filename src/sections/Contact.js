export default function Contact() {
  return (
    <section className='text-gray-600 body-font relative bg-gray-50 py-5 md:py-32'>
      <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl dark:text-coolGray-50'>
        Contact us
      </h2>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <iframe
            width='100%'
            height='100%'
            className='absolute inset-0'
            frameborder='0'
            title='map'
            marginheight='0'
            marginwidth='0'
            scrolling='no'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5467.691467114686!2d33.904629551939976!3d35.427334796374254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfa9cb9027d7e1%3A0xff2ff556d5a77a40!2sNext%20Generation%20Research%20Center%20HQ!5e0!3m2!1sen!2s!4v1620059575308!5m2!1sen!2s'
            style={{ filter: 'grayscale(1), contrast(1.2), opacity(0.4)' }}
          ></iframe>

          <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                ADDRESS
              </h2>
              <p className='mt-1'>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                EMAIL
              </h2>
              <a className='text-indigo-500 leading-relaxed'>
                example@email.com
              </a>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                PHONE
              </h2>
              <p className='leading-relaxed'>123-456-7890</p>
            </div>
          </div>
        </div>
        <div class='lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
          <h2 class='text-gray-900 text-xl font-medium title-font mb-5 mx-auto'>
            Contact and feedback
          </h2>
          <div class='relative mb-4'>
            <label for='full-name' class='leading-7 text-sm text-gray-600'>
              Full Name
            </label>
            <input
              type='text'
              id='full-name'
              name='full-name'
              class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              control-id='ControlID-83'
            />
          </div>
          <div class='relative mb-4'>
            <label for='email' class='leading-7 text-sm text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
            <div className='relative mb-4'>
              <label for='message' className='leading-7 text-sm text-gray-600'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
              ></textarea>
            </div>
          </div>
          <button class='text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg'>
            Send message
          </button>
          <p class='text-xs text-gray-500 mt-3'>
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
      {/* <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
            Contact and feedback
          </h2>
          <p className='leading-relaxed mb-5 text-gray-600'>
            Please fill in the form below and we will get back to you as soon as
            possible
          </p>

          <div className='relative mb-4'>
            <label for='name' className='leading-7 text-sm text-gray-600'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              control-id='ControlID-84'
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
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
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
            ></textarea>
          </div>

          <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Send message
          </button>
          <p className='text-xs text-gray-500 mt-3'>
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div> */}
    </section>
  );
}
