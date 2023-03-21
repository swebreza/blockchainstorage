import Navbar from './components/navbar'
import React from 'react'
import Main from './components/main'

export default function Home() {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Main className='h-screen' />
    </div>
  )
}
