'use client'
import Lottie from 'lottie-react'

interface propsType {
  animationPath: any
  width?: string
}

const AnimationLottie = ({ animationPath, width }: propsType) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width ? width : '100%',
    },
  }

  return <Lottie {...defaultOptions} />
}

export default AnimationLottie
