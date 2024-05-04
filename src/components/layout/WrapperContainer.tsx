import React from 'react'

const WrapperContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='container-3xl mx-auto'>{children}</div>
}

export default WrapperContainer
