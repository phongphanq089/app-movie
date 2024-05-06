'use client'
import { NextImageResize } from '@/components/ui/ResizeImage'
import { CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import React from 'react'

const listsLiderImage = [
  '/image/banner-hero/slide-1.png',
  '/image/banner-hero/slide-2.png',
  '/image/banner-hero/slide-3.png',
  '/image/banner-hero/slide-4.png',
  '/image/banner-hero/slide-5.png',
  '/image/banner-hero/slide-6.png',
  '/image/banner-hero/slide-7.png',
]

const BannerHero_v1 = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className='mb-10'>
      <div className='rounded-2xl overflow-hidden'>
        <NextImageResize
          src={'/image/banner-hero-1.jpg'}
          alt='app-movie-2024'
          className='pt-[56%] md:pt-[35%]'
        />
      </div>
      <div className='mt-[-50px] md:mt-[-100px] xl:mt-[-200px]'>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full'
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {listsLiderImage.map((item, index) => (
              <CarouselItem key={index} className='basis-1/3 md:basis-1/4'>
                <div className='p-1'>
                  <CardContent className='bg-transparent '>
                    <NextImageResize src={item} alt='app-movie-2024' />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  )
}

export default BannerHero_v1
