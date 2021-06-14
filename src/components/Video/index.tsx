import React from 'react'
import ReactPlayer from 'react-player'

interface Props {
  url: string
  controls: boolean
  width?: string
  height?: string
  playsinline?: boolean
}

const Video: React.FC<Props> = ({
  url,
  controls,
  width,
  height,
  playsinline,
}) => {
  return (
    <ReactPlayer
      url={url}
      controls={controls}
      width={width}
      height={height}
      playsinline={playsinline}
    />
  )
}

export default Video
