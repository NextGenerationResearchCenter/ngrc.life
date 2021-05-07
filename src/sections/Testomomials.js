import bg2 from '../assets/img/ngrc_footer.png';

export default function Testomomials() {
  return (
    <section
      className='dark:bg-coolGray-800 dark:text-coolGray-100'
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container px-6 py-12 mx-auto'>
        <div className='grid items-center gap-4 xl:grid-cols-5'>
          <div className='max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left'>
            <h2 className='text-2xl lg:text-4xl font-bold'>
              What people say about us
            </h2>
            <p className='dark:text-coolGray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum inventore nam molestias temporibus minus reiciendis
              necessitatibus nostrum, quas mollitia eaque quae illo
              exercitationem officia harum eligendi repudiandae natus provident.
            </p>
          </div>
          <div className='p-6 xl:col-span-3'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='grid content-center gap-4'>
                <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                  <p>
                    An audire commodo habemus cum. Ne sed corrumpit repudiandae.
                    Tota aliquip democritum pro in, nec democritum intellegam
                    ne. Propriae volutpat dissentiet ea sit, nec at lorem inani
                    tritani, an ius populo perfecto vituperatoribus. Eu cum case
                    modus salutandi, ut eum vocent sensibus reprehendunt.
                  </p>
                  <div className='flex items-center mt-4 space-x-4'>
                    <img
                      src='https://source.unsplash.com/51x51/?portrait'
                      alt=''
                      className='w-12 h-12 bg-center bg-cover rounded-full'
                    />
                    <div>
                      <p className='text-lg font-semibold'>Eckhart Tolle</p>
                      <p className='text-sm dark:text-coolGray-400'>
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                  <p>
                    Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                    et, ius cu hinc fabulas. Nam meliore minimum et, regione
                    convenire cum id. Ex pro eros mucius consectetuer, pro magna
                    nulla nonumy ne, eam putent iudicabit consulatu cu.
                  </p>
                  <div className='flex items-center mt-4 space-x-4'>
                    <img
                      src='https://source.unsplash.com/52x52/?portrait'
                      alt=''
                      className='w-12 h-12 bg-center bg-cover rounded-full'
                    />
                    <div>
                      <p className='text-lg font-semibold'>Eckhart Tolle</p>
                      <p className='text-sm dark:text-coolGray-400'>
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid content-center gap-4'>
                <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                  <p>
                    Putant omnium elaboraret per ut. Id dicta tritani nominavi
                    quo, mea id justo errem elaboraret. Agam mollis scripserit
                    ea his, ut nec postea verear persecuti. Ea noster senserit
                    eam, ferri omittantur ei nec. Id mel solet libris
                    efficiantur, commune explicari et eos. Case movet ad est,
                    sed tota vocent appetere ea.
                  </p>
                  <div className='flex items-center mt-4 space-x-4'>
                    <img
                      src='https://source.unsplash.com/53x53/?portrait'
                      alt=''
                      className='w-12 h-12 bg-center bg-cover rounded-full'
                    />
                    <div>
                      <p className='text-lg font-semibold'>Eckhart Tolle</p>
                      <p className='text-sm dark:text-coolGray-400'>
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                  <p>
                    Te omnes virtute volutpat sed. Ei esse eros interesset vel,
                    ei populo denique ocurreret vix, eu cum pertinax mandamus
                    vituperatoribus. Solum nihil luptatum per ex, ei amet
                    viderer eos. Ea illum labitur mnesarchum pro. Eius meis
                    salutandi ei nam, alterum expetenda et nec. Expetenda
                    intellegat at eum, per mazim sanctus honestatis ad. Ei
                    noluisse invenire vix. Te ancillae patrioque qui, probo
                    bonorum vivendum ex vim.
                  </p>
                  <div className='flex items-center mt-4 space-x-4'>
                    <img
                      src='https://source.unsplash.com/54x54/?portrait'
                      alt=''
                      className='w-12 h-12 bg-center bg-cover rounded-full'
                    />
                    <div>
                      <p className='text-lg font-semibold'>Eckhart Tolle</p>
                      <p className='text-sm dark:text-coolGray-400'>
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
