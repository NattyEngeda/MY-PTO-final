import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import footerWave from '../assets/images/footersvg/footer-wave2.svg';
import { Button } from '@mantine/core';
export default function Footer(props) {
  const setTalkOpened = props.setTalkOpened;
  return (
    <footer className='absolute bottom-0 left-0 w-full bg-white flex flex-col z-10 '>
         <img
            className='w-full'
            src={footerWave} alt="" />
          <div className='bg-[#5A1D9A] h-auto md:pb-20'>
              <div className='flex flex-col gap-5 md:gap-10 p-20 items-center justify-center'>
                <h1 className='text-white text-3xl md:text-5xl md:font-bold font-Playfair text-center'>Interested in Working with me? </h1>
                <Button 
                onClick={()=> setTalkOpened(true)}
                className='text-upperCase px-16 py-2 h-12 rounded-full bg-[#EF4B6C] text-white text-lg hover:shadow-lg hover:border-white hover:bg-white hover:text-[#EF4B6C]'>Let's talk</Button>
              </div>
              <div className='h-20 flex flex-row items-cetner justify-center gap-4 md:gap-10 px-20'>
                <a href='https://www.github.com/nattyengeda' target="_blank" className='h-10 w-10 md:h-10 md:w-10 2xl:h-12 2xl:w-12 rounded-full bg-white normShad flex items-center justify-center hover:border-white hover:bg-[#5A1D9A] hover:text-white'>
                  <AiFillGithub className='w-6 h-6 md:w-6 md:h-6 2xl:w-8 2xl:h-8 text-[#5A1D9A] hover:text-white'/>
                </a>
                <a href='https://t.me/z_nat0' target="_blank" className='h-10 w-10 md:h-10 md:w-10 2xl:h-12 2xl:w-12 rounded-full bg-white normShad flex items-center justify-center hover:border-white hover:bg-[#5A1D9A] hover:text-white'>
                  <FaTelegramPlane className='w-6 h-6 md:w-6 md:h-6 2xl:w-8 2xl:h-8 text-[#5A1D9A] hover:text-white'/>
                </a>
                <a href='https://www.linkedin.com/in/natty-engeda-9202a51b7/' target="_blank" className='h-10 w-10 md:h-10 md:w-10 2xl:h-12 2xl:w-12 rounded-full bg-white normShad flex items-center justify-center hover:border-white hover:bg-[#5A1D9A] hover:text-white'>
                  <RiLinkedinFill className='w-6 h-6 md:w-6 md:h-6 2xl:w-8 2xl:h-8 text-[#5A1D9A] hover:text-white'/>
                </a>
              </div>
          </div>
    </footer>
  )
}
