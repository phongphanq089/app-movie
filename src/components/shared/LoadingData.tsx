'use client'
import React from 'react'
import AnimationLottie from './AnimationLottie'
import { loadingJson } from '@/assets'

const LoadingData = () => {
  return (
    <div className='max-w-[600px]'>
      <AnimationLottie animationPath={loadingJson} />
    </div>
  )
}

export default LoadingData
