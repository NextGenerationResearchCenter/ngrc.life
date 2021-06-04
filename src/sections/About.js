import React from 'react';
import image from '../assets/img/image.jpeg';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      className='dark:bg-coolGray-800 dark:text-coolGray-100 bg-gray-50 py-14 md:py-32'
      id='about'
    >
      <div className='max-w-xl p-6 mx-auto space-y-16 lg:px-8 lg:max-w-7xl'>
        <div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
            {t('about.h1-1')}
          </h2>
          <hr className='mb-8 mt-3 border bg-gray-900' />
          <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
            {t('about.p1.part1')}
          </p>
          <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
            {t('about.p1.part2')}
          </p>
        </div>
        <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center w-100'>
          <div>
            <h3 className='text-xl md:text-2xl lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
              {t('about.h2-1')}
            </h3>
            <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
              {t('about.p2')}
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
                  <h4 className='text-md md:text-lg lg:text-xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                    Our Vision
                  </h4>
                  <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                    {t('about.p-vision')}
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
                  <h4 className='text-md md:text-lg lg:text-xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                    Our Mission
                  </h4>
                  <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                    {t('about.p-mission')}
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
      </div>
      <div className='max-w-xl mx-auto lg:max-w-7xl  p-6'>
        <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
          {t('about.p3.part1')}
        </p>
        <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
          {t('about.p3.part2')}
        </p>
        <p className='mt-4 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
          {t('about.p3.part3')}
        </p>
      </div>
    </section>
  );
}

{
  /* <div className='max-w-xl p-6 mx-auto space-y-16 lg:px-8 lg:max-w-7xl mt-32'>
        <div>
          <div className='mt-16'>
            <h3 className='text-xl md:text-2xl lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
              Life Science
            </h3>
            <p className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
              Case studies have shown that when a person sustain their heart
              coherence in deep meditation, it conditions the body into the
              perfect state to heal (Rollin McCraty, PhD and Carla Stanton, MD).
              <br />
              It wasn’t until just about 20 years ago when the collective
              “truth” that we are the sum of our genes, was questioned. That our
              inherited DNA is the only determinator of who we are,
              biologically. But around 1990 the epigenetic science gained speed,
              and scientists started to get interested in the cellular
              mechanisms that can regulate our genes in different ways. Our
              ambition is to highlight the holistic connection between mind and
              body, and how they impact one another. How can epigenetics and
              quantum physics help us understand that if we change the way we
              think and feel, we can influence our internal and external
              environment?{' '}
            </p>
            <p className='mt-5 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
              Researchers such Joe Dispenza, Gregg Braden and Bruce Lipton all
              have in common that they’ve started to pave the ground for the use
              of evidence-based healing and joy promoting techniques. And our
              ambition is to take it even further.
            </p>
            <div className='mt-10'>
              <h4 className='text-md md:text-lg lg:text-xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                The general purpose of NGRC in the field of science and
                medicine:
              </h4>
              <ul className='list-disc mt-3'>
                <li className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  Provide patients from all over the world with the highest
                  level of excellence, experience, quality and care in Northern
                  Cyprus
                </li>
                <li className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  Provide a safe and supportive environment for the development
                  of both primary and clinical research activities for advanced
                  treatments, strategies and diagnostic techniques for
                  researchers and clinical physicians from around the world
                </li>
                <li className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  Offer patients the best quality of care and prevention
                  strategies;
                </li>
                <li className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  To support scientific and medical research that can lead to
                  significant reductions in healthcare costs
                </li>
                <li className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  Being a frontier when bringing science-based self-healing
                  modalities to the public
                </li>
              </ul>
            </div>
            <div>
              <div className='mt-16'>
                <h3 className='text-xl md:text-2xl lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                  Education and teaching for the 21st century
                </h3>
                <p className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  NGRC will promote the development of a next generation
                  education system with research-based teaching methods and
                  IT-integrated support. The teaching methods haven&#39;t
                  changed for decades, but our environment and context have
                  changed dramatically.
                </p>
                <p className='mt-5 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  NGRC has an ongoing discussion with representatives from the
                  computer gaming industry, which have voiced a desire to
                  collaborate. Our joint mission is to promote a learning
                  environment where the computer gaming industry&#39;s
                  attractiveness, stimulation, and benefits merge with teaching
                  and education. This, instead of continuing with the
                  conventional education system where the students are tired
                  before the lesson ends.
                </p>
                <p className='mt-5 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  To revolutionize the education system we invite teachers,
                  behavioral scientists and education experts to be part of the
                  process. We promote a system that supports the
                  individual&#39;s learning process and encourage the student to
                  learn at the peak of his or her ability. Finding new
                  evaluation systems of an individual&#39;s status and moving
                  from misleading and discouraging tests to well-integrated,
                  real-time feedback loops to support the teacher.
                </p>
                <p className='mt-5 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  A learning system that enables global real-time student
                  collaborations, regardless of language, heritage or wherever
                  they are situated in the world. Learning and preparing for the
                  future should be an inspiring and empowering journey, not a
                  checklist to complete.
                </p>
                <p className='mt-5 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  Most importantly, a system that inspires and empowers students
                  to feel like they control their own evolvement. What if the
                  school system taught our children how easily they could shift
                  mental, emotional and physical states in a matter of seconds.
                  Quantum physics built into the education system - how does
                  that sound?
                </p>
              </div>

              <div className='mt-16'>
                <h3 className='text-xl md:text-2xl lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                  Energy
                </h3>
                <p className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  A balanced and healthy society requires sustainable energy
                  solutions. NGRC supports finding innovative solutions for
                  renewable energy and energy-saving systems, such as solar
                  panels, wind-, hydro- and biomass energy sources, home
                  energy-saving systems and equipments.
                </p>
                <p className='mt-5 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  We support the refining of existing solutions and contribute
                  to the development of modern next- generation innovations.
                  Finding new fuel for today’s vehicles, ships and aircraft and
                  using technology and cultivation technology to take carbon
                  dioxide out of the air, new technology becomes our most
                  important asset. This in contrast to its previous function as
                  a problem-generator.
                </p>
              </div>

              <div className='mt-16'>
                <h3 className='text-xl md:text-2xl lg:text-2xl font-montheavy tracking-tight dark:text-coolGray-50 text-graydark'>
                  Environment
                </h3>
                <p className='mt-2 dark:text-coolGray-400 text-graylight text-base md:text-md lg:text-lg font-montregular'>
                  We are dedicated to contributing to limiting our environmental
                  footprint. Sustainability and eco- friendly solutions have
                  been on top of companies&#39; marketing buzzword lists for
                  quite some time now. We are no different in that we want to
                  establish healthy living conditions that will benefit us and
                  future generations. However, the differences between other
                  companies and us are that we can partake and ensure execution
                  in the whole chain. We will take the insights and findings
                  from the researchers&#39; lab and implement them in our
                  corporation, help turn them into business ideas and educate
                  people about the results. We have in-depth discussions with
                  researchers interested in supporting this mission and are at
                  the initial stage of developing such innovation and research
                  areas within NGRC and the Business Center. We trust that a
                  combination of research progress and industrial and technical
                  systems can leverage the next generation society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */
}
