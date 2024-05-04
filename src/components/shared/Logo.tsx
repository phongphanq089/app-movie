import { Logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoMovie = () => {
  return (
    <Link
      href={'/'}
      className='flex items-center gap-2 max-w-[45px] 2xl:max-w-[70px] h-auto'
    >
      <Image
        src={Logo?.src}
        alt='app Movie'
        width={200}
        height={200}
        className='w-full h-auto object-cover'
      />
      <h1 className='hidden md:block md:text-[25px] 2xl:text-[40px] font-semibold whitespace-nowrap'>
        FAST MOVIE
      </h1>
    </Link>
  )
}

export default LogoMovie
