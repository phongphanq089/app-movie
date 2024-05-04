/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { bannerTopFooter, bannerTopFooterLeft } from '@/assets'
import SvgIcon from '@/components/ui/SvgIcon'
import Link from 'next/link'
const TopBanner = () => {
  return (
    <div className='top-banner__footer h-[250px] relative bg-color-3 flex items-center justify-center'>
      <div
        className='banner-bg absolute w-full h-full bg-center top-0 left-0 '
        style={{
          background: `url(${bannerTopFooter.src})`,
        }}
      ></div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img
          src={bannerTopFooterLeft.src}
          alt='app movies'
          className='h-full object-cover'
        />
      </div>
      <div className='container-xl relative z-20'>
        <div className='flex items-center flex-col md:flex-grow gap-3'>
          <div className='bg-color-1 w-8 h-8 flex items-center justify-center rounded-full '>
            <SvgIcon icon='phone' className='w-[35px] h-auto fill-white' />
          </div>
          <Link
            href={'tel:+1234-56789'}
            className='text-3xl font-semibold text-white'
          >
            Get a Consultation Call Us +1234-56789
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBanner
