import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { NextImageResize } from '../ui/ResizeImage'
import envConfig from '@/config'
import Link from 'next/link'

interface propsType {
  poster_url: string
  name: string
}

const CardMovie = (props: propsType) => {
  const { poster_url, name } = props
  return (
    <Link href={'#'} title={name}>
      <CardContainer className='inter-var py-2 md:py-5'>
        <CardBody className='bg-gray-50 relative group/card h-full  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1]  rounded-xl border'>
          <CardItem translateZ='100' className='w-full relative'>
            <NextImageResize
              src={`${envConfig.NEXT_PUBLIC_API_IMAGE}/${poster_url}`}
              alt=''
              className='pt-[130%] rounded-xl overflow-hidden'
            />
            <div className='absolute left-0 bottom-0 px-2 min-h-[100px] flex items-center  w-full bg-color-rgba-1 rounded-xl '>
              <h3 className='text-sm md:text-md font-semibold text-color-1 '>
                {name}
              </h3>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  )
}

export default CardMovie
