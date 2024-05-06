import React from 'react'

const TitleBlock = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <h2 className='title-block_style mb-2 md:mb-5'>
      <span className={`line-clamp-1 ${className}`}>{text}</span>
    </h2>
  )
}

export default TitleBlock
