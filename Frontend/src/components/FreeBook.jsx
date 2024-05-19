import React from 'react'
// import list from '../../public/list.json'
// import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import useFetch from '../hooks/useFetch';

function FreeBook() {

  const {book}  = useFetch('http://localhost:4001/book');


  const filterData = book.filter((data) => data.category === 'Free' );
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-10 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2 '>Free Offered Books</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem quod laborum Lorem ipsum dolor sit amet. pariatur saepe nulla natus doloremque cum quaerat nisi.</p>
        </div>
        <div className='slider-container'>
          <Slider {...settings} className=''>
            {
              filterData.map((item)=>(
                <Cards item={item} key={item.id}/>
              ))
            }
          </Slider>
            
        </div>
      </div>
    </>
  )
}

export default FreeBook
