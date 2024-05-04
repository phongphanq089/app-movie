'use client'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

const LoaderTop = () => {
  return (
    <NextTopLoader
      color='#f4e205'
      initialPosition={0.08}
      crawlSpeed={500}
      height={10}
      crawl={true}
      showSpinner={true}
      easing='ease'
      speed={500}
      shadow='0 0 10px #f4e205,0 0 5px #f4e205'
      template='<div class="bar" role="bar"><div class="peg"></div></div> <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      zIndex={1600}
      showAtBottom={false}
    />
  )
}

export default LoaderTop
