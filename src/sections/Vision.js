export default function Vision() {
  return (
    <section className='bg-white dark:bg-gray-800 py-32'>
      <div className='container mx-auto lg:w-2/3'></div>

      <div className='container px-6 py-8 mx-auto'>
        <div className='items-center lg:flex'>
          {/* Image */}
          <div className='mt-8 lg:mt-0 lg:w-1/2'>
            <div className='flex items-center justify-center lg:justify-start'>
              <div className='max-w-lg'>
                <img
                  className='object-cover object-center w-full h-64 rounded-md shadow'
                  src='https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                  alt=''
                />
              </div>
            </div>
          </div>
          {/* Text Section */}
          <div className='lg:w-1/2 justify-end'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl dark:text-coolGray-50'>
              About us
            </h2>
            <p className='mt-4 text-gray-500 dark:text-gray-400 lg:max-w-lg'>
              By supporting science in the fields of Life Science, Education,
              Environment and Energy, and implementing and sharing the knowledge
              in an easy-to-digest manner, we promote a holistic health approach
              and environmental sustainability for us, and generations to come.
            </p>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-100 mt-3'>
              Our mission
            </h2>
            <p className='mt-2 text-gray-500 dark:text-gray-400 lg:max-w-lg'>
              To create a society based upon the values of compassion and
              cooperation, where evidence-based pro-health and environmentally
              sustainable solutions are well integrated in the system and in
              everyday life and encourages the people to feel empowered to
              change their lives..
            </p>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-100 mt-3'>
              Mission
            </h2>
            <p className='mt-2 text-gray-500 dark:text-gray-400 lg:max-w-lg'>
              To support, create and promote science targeted to benefit the
              wellbeing of the people and the planet, and make sure the world
              hears about it.
            </p>
            <p className='mt-2 text-gray-500 dark:text-gray-400 lg:max-w-lg'>
              We are operating in multiple fields to be able to serve humanity
              in the way we love – by spreading science-based knowledge and
              insights to the masses. NGRC is the heart of this new community,
              and we will promote the sharing of knowledge and creativity
              through our Next Generation Business Center (NGBC) and NGRC Talks.
              NGBC is a support function for Start ups, Sole Traders and
              businesses, and offers office space, business and marketing
              training programs and much more. NGRC Talks is our platform for
              public speakers from which everyone can benefit from, by learning
              from the best experts and speakers in the world. To support,
              create and promote science targeted to benefit the wellbeing of
              the people and the planet, and make sure the world hears about it.
            </p>{' '}
          </div>
        </div>
      </div>
    </section>
  );
}
