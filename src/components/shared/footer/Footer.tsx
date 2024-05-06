import React from 'react'
import TopBanner from './TopBanner'

const Footer = () => {
  return (
    <div className='wrapper-footer'>
      <TopBanner />
      <div className='mt-[-100px]'>
        <div className='mt-[70px]'>
          <div className='lightning md:mx-6'>
            <div className='noisy'>
              <span>nov. 1953</span>
              FANTASTIC
            </div>
            <div className='noisy'>
              MOVIES
              <span>magazine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
