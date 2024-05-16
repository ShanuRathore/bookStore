import React from 'react'

function About() {
  const list=[
    {
      heading:"Imagination",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-4.jpg"
    },
    {
      heading:"Education",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-14.jpg"
    },
    {
      heading:"Adventure",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-5.jpg"
    },
    {
      heading:"Inovation",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-2.jpg"
    },
    {
      heading:"Findings",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-9.jpg"
    },
    {
      heading:"Frendship",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
    },
    {
      heading:"Explore",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-16.jpg"
    },
    {
      heading:"Trend",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-6.jpg"
    },
    {
      heading:"Together",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      img:"https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-1.jpg"
    }
  ]


  return (
    <>
      {/* Top Image*/}
      <div className=" w-full mx-0 ">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="Friends"
          className="hero-image w-full mx-0 h-72  md:h-80 object-cover" />
      </div>

      {/* Main Container */}
      <div className='max-w-screen-2xl  mx-auto md:px-10 px-4 dark:bg-slate-900 dark:text-white  '>

        {/* Section like in the image attached */}
        <div className='flex flex-col md:flex-row my-10'>

          {/* Right*/}
          <div className='w-full  md:w-1/3 mt-5 whitespace-normal tracking-wide '>
            <h1 className="text-6xl font-semibold leading-snug"> We’re changing the way people <span className="text-teal-700 "> Study!!!</span></h1>
          </div>

          {/* Left*/}
          <div className=' w-full md:w-2/3 mt-12 md:mt-10'>
            <div className="flex md:flex-row flex-col justify-center md:gap-0 gap-4 ">
                <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Security" className="md:w-40 md:h-72 w-52 h-72  object-cover rounded-xl hover:scale-105" />
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="Innovation" className="md:w-40 md:h-72 w-52 h-72 mx-auto object-cover rounded-xl md:mt-20 hover:scale-105" />
                <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Community" className="md:w-40 md:h-72 w-52 h-72   object-cover rounded-xl hover:scale-105" />
                <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="Community" className="md:w-40 md:h-72 w-52 h-72  mx-auto object-cover rounded-xl md:mt-20 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className=" mt-12">
          <h2 className="text-6xl font-semibold mb-8 text-center">Our Values</h2>
          <ul className=" list-inside grid grid-cols-1 gap-8 p-5 md:grid-cols-3">
            {
              list.map((item)=>(
                <div className=' bg-slate-300 hover:scale-105 shadow-lg cursor-pointer duration-300 rounded-2xl dark:bg-slate-800 h-96'>
                  <img className='rounded-t-2xl h-48 w-full fill object-cover' src={item.img} alt="" />
                  <div className=' flex flex-col justify-center items-center mt-10'>
                    <h1 className='text-2xl underline hover:scale-105 font-semibold'>{item.heading}</h1>
                    <p className='text-center mt-5 space-y-3'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </ul>
        </div>

        {/* Our Team */}
        <div className=" mt-12 mb-10">
          <h2 className="text-6xl text-center font-semibold mb-10">Our Team</h2>
          <div className='flex justify-center items-center flex-wrap space-y-10'>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="Team Member 1" className="team-image w-40 h-40 rounded-full mx-auto mt-10" />
              <h3 className="text-xl mt-4 ">John Doe</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="Team Member 2" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Jane Doe</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="Team Member 3" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Bob Smith</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Bob Smith</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Bob Smith</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Bob Smith</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Bob Smith</h3>
            </div>
            <div className="team-member w-64 text-center">
              <img src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="team-image w-40 h-40 rounded-full mx-auto" />
              <h3 className="text-xl mt-4">Bob Smith</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
