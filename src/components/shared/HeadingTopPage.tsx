'use client'
import React from 'react'
import { SparklesCore } from '../ui/sparkles'

const HeadingTopPage = ({ heading }: { heading: string }) => {
  return (
    <div className='w-full bg-transparent flex flex-col items-center mb-6'>
      <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white relative  uppercase'>
        {heading}
      </h1>
      <div className='w-full lg:w-[40rem] h-auto relative'>
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className='absolute inset-0 w-full h-full  bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </div>
    </div>
  )
}

export default HeadingTopPage