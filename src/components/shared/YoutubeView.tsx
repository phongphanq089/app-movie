'use client'
import React from 'react'
import YouTube from 'react-youtube'
const YoutubeView = ({ videoUrl }: { videoUrl: string }) => {
  let videoCode
  if (videoUrl) {
    videoCode = videoUrl.split('v=')[1].split('&')[0]
  }

  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div>
      <YouTube videoId={videoCode} opts={opts} />
    </div>
  )
}

export default YoutubeView
