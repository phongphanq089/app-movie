'use client'
import TitleBlock from '@/components/design-ui/TitleBlock'
import CardMovie from '@/components/shared/CardMovied'
import { movieSingleResType } from '@/lib/schemaType'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface propsType {
  dat_list: movieSingleResType
}

const SliderMovies = ({ dat_list }: propsType) => {
  return (
    <div className='slider-container mb-10'>
      <TitleBlock text={dat_list.data.titlePage} />
      <Swiper
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={20}
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1436: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {dat_list.data?.items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CardMovie poster_url={item.poster_url} name={item.name} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SliderMovies
