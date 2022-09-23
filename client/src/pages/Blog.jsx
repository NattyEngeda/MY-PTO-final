import React from 'react'

// Images
import empty from '../assets/images/blog/empty.webp'

export default function Blog() {
  return (
    <section className='relative min-h-screen h-[100rem] w-full py-20  pb-44 z-20'>
        <div className=''>
            <h1 className='text-center text-[#667AE1] text-5xl'>No Blogs for the Moment</h1>
        </div>      
        <div className='flex items-center justify-center py-10'>
            <img
            className='h-auto' 
            src={empty} 
            alt="Empty Illustration" />
        </div>
    </section>
  )
}
