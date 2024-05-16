import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

function AboutUs() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar />
        <div className='min-h-screen'>
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
