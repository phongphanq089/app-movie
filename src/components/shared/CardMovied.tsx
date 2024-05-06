/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { NextImageResize } from '../ui/ResizeImage'
import envConfig from '@/config'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface propsType {
  trimmedUrl?: string
  dataItem: {
    poster_url: string
    slug: string
    name: string
    lang?: string
    year?: string
    time?: string
  }
}
const CardMovie = ({ dataItem, trimmedUrl }: propsType) => {
  const { poster_url, name, lang, year, time, slug } = dataItem

  return (
    <Link
      href={`/detail-movie/${slug}`}
      title={name}
      className='block h-full bg-[#1e1b4b] rounded-xl hover:border'
    >
      <CardContainer className='inter-var py-2  h-full'>
        <CardBody className='bg-gray-50 relative group/card h-full d bg-transparent rounded-xl '>
          <CardItem translateZ='100' className='w-full relative p-3'>
            {/* <NextImageResize
              src={
                trimmedUrl
                  ? `${envConfig.NEXT_PUBLIC_API_IMAGE}/${trimmedUrl}`
                  : `${envConfig.NEXT_PUBLIC_API_IMAGE}/${poster_url}`
              }
              alt={name}
              className='pt-[130%] rounded-xl overflow-hidden'
            /> */}

            <div className='wrapImgResize imgSquare2'>
              <img
                src={
                  trimmedUrl
                    ? `${envConfig.NEXT_PUBLIC_API_IMAGE}/${trimmedUrl}`
                    : `${envConfig.NEXT_PUBLIC_API_IMAGE}/${poster_url}`
                }
                alt={name}
              />
            </div>
            {lang && (
              <Badge className='h-fit bg-color-2 hover:bg-color-1 absolute top-4 right-4'>
                {lang}
              </Badge>
            )}
          </CardItem>
          <div className='p-2 flex items-center gap-1  justify-between w-full rounded-xl '>
            <h3 className='text-sm md:text-lg font-semibold max-w-[70%] line-clamp-1'>
              {name}
            </h3>
            {time && (
              <Badge className='h-fit whitespace-nowrap'>
                {time ? time : ''}
              </Badge>
            )}
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  )
}

export default CardMovie
