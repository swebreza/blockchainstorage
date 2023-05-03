import Navbar from './Navbar'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className=' p-12'>
        <span className='text-2xl font-extrabold'>Dashboard</span>
        <hr />
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5 justify-items-center'>
          <div className='space-y-2 rounded overflow-hidden shadow-lg dark:shadow-gray-800 p-10'>
            <Link href='../../FileUpload'>
              <h2>
                File Upload <span>-&gt;</span>
              </h2>
            </Link>
          </div>
          <div className='space-y-2 rounded overflow-hidden shadow-lg dark:shadow-gray-800 p-10'>
            <Link href='../components/allFiles'>
              <h2>
                Files Access <span>-&gt;</span>
              </h2>
            </Link>
          </div>
          <div className='space-y-2 rounded overflow-hidden shadow-lg dark:shadow-gray-800 p-10'>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
