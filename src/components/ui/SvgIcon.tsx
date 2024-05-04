'use client'
import React from 'react'

interface SvgIconProps {
  className?: string
  width?: string
  height?: string
  icon: string
}

const Icons: Record<string, JSX.Element> = {
  chevronDown: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'></path>
    </svg>
  ),
  menu: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
    </svg>
  ),
  phone: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path d='M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z'></path>
      <path d='M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z'></path>
    </svg>
  ),
  imageCreate: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7' />
      <line x1='16' x2='22' y1='5' y2='5' />
      <line x1='19' x2='19' y1='2' y2='8' />
      <circle cx='9' cy='9' r='2' />
      <path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
    </svg>
  ),
  people: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 21a8 8 0 0 0-16 0' />
      <circle cx='10' cy='8' r='5' />
      <path d='M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3' />
    </svg>
  ),
  'arrow-right': (
    <svg
      id='arrow-horizontal'
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='10'
      viewBox='0 0 46 16'
    >
      <path
        id='Path_10'
        data-name='Path 10'
        d='M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z'
        transform='translate(30)'
      ></path>
    </svg>
  ),
}

const SvgIcon = ({
  icon,
  className = '',
  width = '30px',
  height = '30px',
}: SvgIconProps) => {
  const selectedIcon = Icons[icon]

  if (selectedIcon) {
    return (
      <div className={className}>
        {React.cloneElement(selectedIcon, { width, height, className })}
      </div>
    )
  } else {
    return null
  }
}

export default SvgIcon
