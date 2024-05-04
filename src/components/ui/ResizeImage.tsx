/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface NextImageResize {
  src: string | any
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
}

export const NextImageResize = ({
  src,
  alt,
  priority,
  className,
}: NextImageResize) => {
  return (
    <div className={`${className ? className : 'pt-[100%]'} relative `}>
      <Image
        src={src}
        alt={alt ? alt : 'image-default'}
        fill
        priority={priority}
        className={`h-auto object-cover`}
        sizes='(min-width: 1200px) 200vw, (max-width: 1200px) 60vw, 40vw'
      />
    </div>
  )
}

export const ImageSvg = ({
  src,
  className,
}: {
  src: string
  className?: string
}) => {
  return (
    <div
      className={cn('max-w-[40px] xs:max-w-[60px] sm:max-w-[60px]', className)}
    >
      <img
        src={src}
        alt='Next generation developer'
        className={cn('object-cover w-full h-auto', className)}
      />
    </div>
  )
}
