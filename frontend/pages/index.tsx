import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
// import FileUploader from "./FileUpload";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={roboto.className}>
      <div>
        <Navbar />
        <div>
          <section className='relative'>
            <div className='overflow-hidden pt-16 pb-48'>
              <div className='container relative mx-auto px-4'>
                <div className='-m-8 flex flex-col lg:flex-row'>
                  <div className='w-full p-8 lg:w-6/12'>
                    <h1 className='lg:text-13xl font-heading mb-9 text-6xl font-bold leading-none md:max-w-2xl md:text-8xl'>
                      Store You Data On Decentralized Cloud
                    </h1>
                    <div>
                      <p className='dark:text-gray-300ss mb-9 text-xl font-medium text-gray-900 dark:text-gray-300 md:max-w-sm'>
                        We Provide you a secure and decentralized cloud storage
                        to store your data.
                      </p>
                      <div className='mb-12 md:inline-block'>
                        <Link href='./auth/signup'>
                          <button className='w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300'>
                            Sign up Now!
                          </button>
                        </Link>
                      </div>
                      <h3 className='mb-3 font-semibold text-gray-900 dark:text-gray-300'>
                        IPFS is Trusted by 1M+ customers
                      </h3>
                    </div>
                  </div>
                  <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                    <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                      <div className='relative'>
                        <img
                          src='https://img.freepik.com/free-vector/biometric-security-concept_53876-91629.jpg?w=1380&t=st=1683110705~exp=1683111305~hmac=d63d7159e6c5b10e85237dbbc674621885dbaf30494b3a45574c168f2f0c1d62'
                          alt=''
                          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        />
                        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10'></div>
                      </div>
                    </div>
                    <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                      <div className='relative'>
                        <img
                          src='https://img.freepik.com/free-vector/businessman-cloud_23-2147513519.jpg?w=826&t=st=1683110753~exp=1683111353~hmac=bd8f73b974c6655c69b4514be105a3ea9d7fb5af8ae407776aaeb3d57af9f97c'
                          alt=''
                          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        />
                        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10'></div>
                      </div>
                      <div className='relative'>
                        <img
                          src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80'
                          alt=''
                          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        />
                        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10'></div>
                      </div>
                    </div>
                    <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                      <div className='relative'>
                        <img
                          src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80'
                          alt=''
                          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        />
                        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10'></div>
                      </div>
                      <div className='relative'>
                        <img
                          src='https://img.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg?w=1380&t=st=1683110844~exp=1683111444~hmac=3c838a423432154941f00ab8d157ec2bfb94ed8b200affd594a1e147b091ae6e '
                          alt=''
                          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        />
                        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='overflow-hidden bg-gray-100 py-12 pb-24 dark:bg-gray-900'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center gap-8 '>
                <div className='flex items-center justify-center '>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png'
                    alt='Logo'
                    className='h-40'
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png'
                    alt='Logo'
                    className='h-40'
                  />
                </div>
              </div>
              <h2 className='font-heading tracking-px-n mx-auto mt-12 mb-4 text-center text-4xl font-bold leading-none md:max-w-2xl md:text-4xl xl:text-5xl'>
                Loved by the incredible community
              </h2>
              <p className='mx-auto text-center text-base font-medium leading-normal text-gray-600 dark:text-gray-400 md:max-w-lg'>
                We are very grateful to the community for contributing to the
                project.
              </p>
            </div>
          </section>
          <section className='overflow-hidden py-12'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-10'>
                <div className='w-full md:w-1/2 xl:w-auto'>
                  <a className='block overflow-hidden rounded-3xl' href='#'>
                    <img
                      className='w-full'
                      src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                      alt=''
                    />
                  </a>
                </div>
                <div className='w-full'>
                  <div className='md:max-w-xl'>
                    <div className='mb-11 border-b pb-12 dark:border-gray-700 lg:pb-32'>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-300 md:max-w-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illo vero rerum ea! Distinctio blanditiis sapiente
                        reiciendis dicta officiis in aperiam?
                      </h3>
                    </div>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                      <div>
                        <div className='md:max-w-xs'>
                          <h3 className='mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400'>
                            Unlimited Access
                          </h3>
                          <p className='font-medium text-gray-900 dark:text-gray-300'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores, ullam.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className='md:max-w-xs'>
                          <h3 className='mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400'>
                            No Commitment
                          </h3>
                          <p className='font-medium text-gray-900 dark:text-gray-300'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Reprehenderit, eaque?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='overflow-hidden px-8 py-16 md:px-0'>
            <div className='container mx-auto'>
              <h2 className='my-8 text-left text-3xl font-bold text-black dark:text-white md:text-5xl'>
                Testimonials
              </h2>
              <p className='mb-8 w-full font-medium leading-snug text-gray-700 dark:text-gray-300 md:w-2/3 lg:w-1/2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                deleniti illo eos voluptates accusantium! Consectetur ullam
                tempore corporis! Id dicta ipsam mollitia alias in dolor,
                adipisci facilis aliquam vel blanditiis?
              </p>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex justify-center'>
                  <div className='relative overflow-hidden rounded-3xl'>
                    <img
                      className=''
                      src='https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                      alt=''
                    />
                    <div className='absolute left-0 top-0 h-full overflow-y-auto bg-white bg-opacity-60 px-4 py-4 backdrop-blur-sm'>
                      <svg
                        className='mb-4'
                        width='47'
                        height='36'
                        viewBox='0 0 47 36'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z'
                          fill='#4F46E5'
                        ></path>
                      </svg>
                      <h3 className='text-md mb-4 font-bold leading-snug text-black'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque reprehenderit aperiam, voluptatum commodi fuga
                        sit ratione! Mollitia maiores quas sit cumque animi cum
                        labore est iste, facere iusto? Inventore, corrupti.
                      </h3>
                      <div className='mb-1 font-bold text-black'>
                        Jenny Wilson
                      </div>
                      <div className='font-medium text-gray-600'>
                        Senior UX Designer
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <div className='relative overflow-hidden rounded-3xl'>
                    <img
                      className=''
                      src='https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                      alt=''
                    />
                    <div className='absolute left-0 top-0 h-full overflow-y-auto bg-white bg-opacity-60 px-4 py-4 backdrop-blur-sm'>
                      <svg
                        className='mb-4'
                        width='47'
                        height='36'
                        viewBox='0 0 47 36'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z'
                          fill='#4F46E5'
                        ></path>
                      </svg>
                      <h3 className='text-md mb-4 font-bold leading-snug text-black'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque reprehenderit aperiam, voluptatum commodi fuga
                        sit ratione! Mollitia maiores quas sit cumque animi cum
                        labore est iste, facere iusto? Inventore, corrupti.
                      </h3>
                      <div className='mb-1 font-bold text-black'>
                        Jenny Wilson
                      </div>
                      <div className='font-medium text-gray-600'>
                        Senior UX Designer
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <div className='relative overflow-hidden rounded-3xl'>
                    <img
                      className=''
                      src='https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                      alt=''
                    />
                    <div className='absolute left-0 top-0 h-full overflow-y-auto bg-white bg-opacity-60 px-4 py-4 backdrop-blur-sm'>
                      <svg
                        className='mb-4'
                        width='47'
                        height='36'
                        viewBox='0 0 47 36'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z'
                          fill='#4F46E5'
                        ></path>
                      </svg>
                      <h3 className='text-md mb-4 font-bold leading-snug text-black'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque reprehenderit aperiam, voluptatum commodi fuga
                        sit ratione! Mollitia maiores quas sit cumque animi cum
                        labore est iste, facere iusto? Inventore, corrupti.
                      </h3>
                      <div className='mb-1 font-bold text-black'>
                        Jenny Wilson
                      </div>
                      <div className='font-medium text-gray-600'>
                        Senior UX Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='relative overflow-hidden pt-24 pb-28'>
            <div className='container relative z-10 mx-auto px-4'>
              <div className='-m-8 flex flex-wrap'>
                <div className='w-full p-8 md:w-auto'>
                  <a href='#'>
                    <img
                      className='mx-auto h-fit w-[300px] transform transition duration-1000 ease-in-out hover:translate-y-4'
                      src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                      alt=''
                    />
                  </a>
                </div>
                <div className='w-full p-8 md:flex-1'>
                  <div className='mx-auto text-center md:max-w-2xl'>
                    <h2 className='font-heading tracking-px-n mb-10 text-center text-3xl font-bold leading-tight md:text-5xl'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <div className='mb-12 md:inline-block'>
                      <Link href='./auth/signup'>
                        <button className='shadow-4xl w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300'>
                          Get Started
                        </button>
                      </Link>
                    </div>
                    <div className='mx-auto md:max-w-sm'>
                      <div className='-m-2 flex flex-wrap'>
                        <div className='w-auto p-2'>
                          <svg
                            className='mt-1'
                            width='26'
                            height='20'
                            viewBox='0 0 26 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M0 20V14.2777C0 12.6321 0.306867 10.921 0.920601 9.14446C1.55293 7.34923 2.40844 5.65685 3.48712 4.06732C4.58441 2.45909 5.81187 1.10332 7.16953 0L11.8562 3.0575C10.7589 4.72183 9.83834 6.46096 9.09442 8.2749C8.3691 10.0701 8.01574 12.0524 8.03433 14.2216V20H0ZM14.1438 20V14.2777C14.1438 12.6321 14.4506 10.921 15.0644 9.14446C15.6967 7.34923 16.5522 5.65685 17.6309 4.06732C18.7282 2.45909 19.9557 1.10332 21.3133 0L26 3.0575C24.9027 4.72183 23.9821 6.46096 23.2382 8.2749C22.5129 10.0701 22.1595 12.0524 22.1781 14.2216V20H14.1438Z'
                              fill='#E0E7FF'
                            ></path>
                          </svg>
                        </div>
                        <div className='flex-1 p-2'>
                          <p className='mb-4 text-left text-lg font-medium leading-normal'>
                            Ease of use and efficiency of design tools. The
                            ability for the team to see all of a project.
                          </p>
                          <h3 className='text-left font-bold'>
                            - Jenny Wilson
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='hidden w-full self-end p-8 md:w-auto xl:block'>
                  <img
                    className='mx-auto h-fit w-[300px] transform transition duration-1000 ease-in-out hover:-translate-y-4'
                    src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </section>
          <center className='justify-items-center flex-1 center pt-14 text-slate-400'>
            Made With ❤️ by MD Suweb Reza And Team
          </center>
        </div>
      </div>
    </div>
  )
}
