import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
// import axios from 'axios'

function Course() {

  const {book}  = useFetch('http://localhost:4001/book');


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 dark:bg-slate-900'>
        <div className='max-w-screen-2xl h-28'></div>
        <div className=' items-center justify-center text-center '>
          <h1 className='text-2xl font-semibold md:text-4xl'>We’re thrilled to welcome you{" "}<span className='text-teal-400'>Here !</span>! 🌟</h1>
          <p className='mt-12'>1{") "}One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.</p>
          <p>2{") "}Whether you’re an avid reader seeking affirmation or someone looking to cultivate a reading habit, these quotes are sure to resonate with you and perhaps inspire you to open that book you’ve been meaning to read. </p>
          <Link to='/'>
            <button className='mt-6 bg-teal-400 border-none text-black hover:text-white text-lg hover:bg-teal-600 duration-300 rounded-lg px-4 py-2'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
          {
            book.map((item)=>(
              <Cards item={item} key={item.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
