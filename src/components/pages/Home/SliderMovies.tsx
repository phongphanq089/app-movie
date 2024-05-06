'use client'
import TitleBlock from '@/components/design-ui/TitleBlock'
import CardMovie from '@/components/shared/CardMovied'
import { movieSingleResType } from '@/lib/schemaType'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface propsType {
  dat_list: movieSingleResType
}

const SliderMovies = ({ dat_list }: propsType) => {
  return (
    <div className='slider-container mb-10'>
      <TitleBlock
        text={dat_list.data.titlePage}
        className='text-[12px] lg:text-lg'
      />
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='pb-[80px]'
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
              <CardMovie dataItem={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SliderMovies
