import { NextImageResize } from '@/components/ui/ResizeImage'
import React from 'react'

const BannerHome = () => {
  return (
    <div className='overflow-hidden rounded-2xl mb-10'>
      <NextImageResize
        src={'/image/banner-hero-1.jpg'}
        alt='fast movie'
        className='pt-[56%]'
      />
    </div>
  )
}

export default BannerHome
