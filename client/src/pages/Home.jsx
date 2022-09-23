import React,{ useState } from 'react'
import { Modal, Button,TextInput,Textarea } from '@mantine/core';

// Images
import img1 from '../assets/images/img1.png'
import footerWave from '../assets/images/footersvg/footer-wave.svg'
// Styles 
import '../assets/styles/bottomWave.css'
// Data
import works from '../assets/data/works'
import latestWorks from '../assets/data/latestWorks'

export default function Home(props) {
  var screenWidth = window.innerWidth;
  const talkopened = props.talkopened
  const setTalkOpened = props.setTalkOpened;

  return (
    <>
    <Modal
    opened={talkopened}
    onClose={()=> setTalkOpened(false)}
    title="Message"
    >
      <div className='flex flex-col gap-5 py-5'>
        <TextInput
        label='Name'
        placeholder='Natnael Engeda'
        size='md'
        />
        <TextInput
        label='Phone Number / Email / Telegram'
        placeholder='nattynengeda@gmail.com'
        size='md'
        />
        <Textarea
        label="Message"
        placeholder='I would like to ....'
        minRows={4}
        size='md'
        />
        <div>
        <button className='px-7 py-3 text-white bg-[#667AE1] hover:shadow-lg text-lg rounded-sm'>
          Send
        </button>
        </div>
      </div>
    </Modal>
      <div className='flex flex-col'>
        <section>
          <div className='bg-[#667AE1] h-auto font-Singlet'>
            <div className='relative'>
              <div className='w-full h-[40rem] grid grid-cols-1 md:grid-cols-2 px-5 md:px-1 lg:px-10 xl:px-20'>
                <div className='flex flex-col items-center justify-between gap-10 text-white py-32'>
                  <div className='flex flex-col items-center gap-10'>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                      <h1 className='text-5xl'>Natty Engeda</h1>
                      <hr className='md:w-full w-1/3 ' />
                    </div>
                    <div className='space-x-4  text-center'>
                      <span className='text-xl md:text-2xl'>Web Developer</span>
                      <span>-</span>
                      <span className='text-xl md:text-2xl'>Mobile App Developer</span>
                      <span>-</span>
                      <span className='text-xl md:text-2xl'>Graphics Designer</span>
                    </div>
                  </div>
                  <div className='pb-10'>
                    <Button 
                    onClick={()=> setTalkOpened(true)}
                    className='px-10 py-3 h-14 rounded-full shadow-md bg-white text-[#667AE1] text-2xl hover:text-white hover:bg-[#667AE1] border border-white'>Let's Talks</Button>
                  </div>
                </div>
                <div className='hidden md:flex items-center px-10'>
                  <img 
                  className='w-full h-auto '
                  src={img1} 
                  alt="Programming Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Bottom Wave */}
        <div className='relative'>
          <div className="bottomWave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        {/* Section */}
        <section className='min-h-screen flex flex-col gap-16 py-28'>
          <div className='w-full flex flex-col items-center gap-3 md:gap-8'>
            <h1 className='text-3xl md:text-5xl'>What I Do</h1>
            <hr className='w-10 md:w-20 border-1 md:border-2 border-red-600 bg-red-600 ' />
          </div>
          {/* What we do */}
          <div className='w-full  h-auto flex justify-center items-center px-5 md:px-20 py-5'>
            <div className=' xl:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-20 md:gap-10'>
              {
                works.map((items) => (
                  <div 
                  key={items.id}
                  className='flex flex-col items-center gap-5'>
                    <div className='border border-gray-200 shadow-sm rounded-full overflow-hidden'>
                      <img
                        className='w-24'
                        src={items.icon}
                        alt={items.label} />
                    </div>
                    <div className='flex flex-col items-center'>
                      <h1 className='font-light md:font-semibold text-lg md:text-xl text-center'>
                        {items.label}
                      </h1>
                      <p className=' hidden md:block font-light text-center text-gray-600 px-10'>
                        {items.list}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* Section = Clients */}
        <section className='h-aut0'>
          <div className='w-full flex flex-col items-center gap-3 md:gap-8'>
            <h1 className='text-3xl md:text-5xl'>Clients</h1>
            <hr className='w-10 md:w-20 border-1 md:border-2 border-red-600 bg-red-600 ' />
          </div>
          <div className='flex flex-col items-center justify-center h-auto py-20 gap-10 '>
            <div className='w-auto h-auto border border-gray rounded-xl shadow-lg flex items-center justify-center p-5'>
              <img 
              className='w-40 md:w-52'
              src="https://www.fitsumpp.com/assets/F%20Only%20Colored%20Logo.b1d14e0d.png" 
              alt="Fitsum Advert & Printing" />
            </div>
            <div className='w-auto h-auto border border-gray rounded-xl shadow-lg flex items-center justify-center p-5'>
              <img 
              className='w-40 md:w-52'
              src="data:image/jpeg;base64,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" 
              alt="Federal Housing Corps" />
            </div>
          </div>
        </section>
        {/* Section - Latest Work */}
        <section className='w-full z-20 min-h-screen flex flex-col gap-10 md:pb-44 '>
          <div className='w-full flex flex-col items-center gap-3 md:gap-8'>
            <h1 className='text-3xl md:text-5xl'>Latest Works</h1>
            <hr className='w-10 md:w-20 border-1 md:border-2 border-red-600 bg-red-600 ' />
          </div>
          <div className='h-auto flex flex-col items-center py-10 gap-10 px-5 lg:px-20 xl:px-32 2xl:px-0'>
            {/* Project Cards */}
            {
              latestWorks.map((items) => (
                <div 
                key={items.id}
                className='transition-all w-full 2xl:w-3/5 h-auto md:h-96 normShad rounded-3xl shadow-lg flex flex-col md:grid grid-cols-2 overflow-hidden hover:shadow-2xl divide-x-2 '>
                  <div 
                  style={{
                    order: screenWidth > 768 ? items.order[0] : 2
                  }}
                  className='flex flex-col  gap-10 md:gap-20 md:px-20 py-8 md:py-20 bg-white'
                  >
                    <div className='space-y-5 text-center'>
                      <h1 className='font-Playfair  text-4xl font-bold'>{items.name}</h1>
                      <p className='text-base font-light text-gray-400'>{items.type}</p>
                    </div>
                    <div className='text-center'>
                      <a href={items.link} target="_blank" 
                      style={{
                        background: items.themeColor
                      }}
                      className='transition px-12 py-4 text-white rounded-full hover:shadow-lg'
                      >View Project</a> 
                    </div>
              
                  </div>
                  
                  <div
                  style={{
                    background: 'white',
                    order: screenWidth > 768 ? items.order[1] : 1
                  }}
                  className="w-full h-80 md:h-96 flex items-center justify-center border-b border-gray-200"
                  >
                    {
                      items.image &&
                      <img
                        src={items.image}
                      />
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        {/* Footer Wave */}
        <div className='h-[40rem]'>
        </div>
      </div>
    </>
  )
}
