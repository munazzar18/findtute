'use client'
import React, { useRef, useEffect } from 'react'

interface VideoFeedProps {
  stream: MediaStream | null
  isMuted?: boolean
}

export const VideoFeed: React.FC<VideoFeedProps> = ({ stream, isMuted }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  return <video ref={videoRef} muted={isMuted} autoPlay playsInline />
}
