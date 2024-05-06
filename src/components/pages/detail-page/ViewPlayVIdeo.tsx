/* eslint-disable @next/next/no-img-element */
'use client'
import SvgIcon from '@/components/ui/SvgIcon'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

interface PropsType {
  thumb_url?: string
  name?: string
  videoUrl?: string
}

const ViewPlayVIdeo = ({ thumb_url, name, videoUrl }: PropsType) => {
  const [bgImage, setBgImage] = useState(true)
  const iframeProps = {
    src: videoUrl,
    className: 'video-player-iframe relative z-10',
    allow: 'fullscreen',
    autoPlay: true,
  }

  return (
    <div className='video-player w-full h-[500px] relative overflow-hidden'>
      {bgImage ? (
        <div
          className='w-full h-full absolute top-0 right-0 bg-[#020130] z-20'
          onClick={() => setBgImage(false)}
        >
          <div className='relative w-full h-full'>
            <div className='absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2'>
              <Button className='playBtn'>
                <SvgIcon icon='play' className='w-[30px] h-[30px]' />
              </Button>
            </div>
            <img
              src={thumb_url}
              alt={name}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      ) : (
        <iframe {...iframeProps}></iframe>
      )}
      <iframe {...iframeProps}></iframe>
    </div>
  )
}

export default ViewPlayVIdeo
