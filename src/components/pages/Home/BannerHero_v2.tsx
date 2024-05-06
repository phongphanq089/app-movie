'use client'
import React from 'react'
import { NextImageResize } from '@/components/ui/ResizeImage'
import AnimationLottie from '@/components/shared/AnimationLottie'
import { moviejson_1, moviejson_2 } from '@/assets'

const BannerHero_v2 = () => {
  return (
    <div className='mb-10 overflow-hidden relative h-[500px]'>
      <div className='rounded-2xl overflow-hidden '>
        <NextImageResize
          src={'/image/banner-hero-1.jpg'}
          alt='app-movie-2024'
          className='pt-[56%] md:pt-[35%]'
        />
      </div>
      <div className='max-w-[400px] absolute bottom-0 right-0'>
        <AnimationLottie animationPath={moviejson_1} />
      </div>
      <div className='hidden lg:block  w-[400px] absolute top-0 left-0'>
        <NextImageResize
          src={'/image/banner-hero/slide-6.png'}
          alt='app-movie-2024'
        />
      </div>
    </div>
  )
}

export default BannerHero_v2
