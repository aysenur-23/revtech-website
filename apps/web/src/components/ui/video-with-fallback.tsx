"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface VideoWithFallbackProps {
  videoSrc: string
  webmSrc: string
  posterSrc?: string
  fallbackGradient?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  onVideoLoad?: () => void
  onVideoError?: () => void
}

export function VideoWithFallback({
  videoSrc,
  webmSrc,
  posterSrc,
  fallbackGradient = "from-blue-200 via-blue-100 to-blue-50",
  className = "w-full h-full object-cover",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  onVideoLoad,
  onVideoError
}: VideoWithFallbackProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Video yÃ¼kleme timeout'u (15 saniye - daha uzun sÃ¼re bekle)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded && isLoading) {
        console.log('Video loading timeout, showing fallback')
        setShowFallback(true)
        setIsLoading(false)
      }
    }, 15000) // 15 saniye timeout

    return () => clearTimeout(timer)
  }, [videoLoaded, isLoading])

  // Video event handlers
  const handleLoadStart = () => {
    console.log('ğŸ¥ Video load started')
    setIsLoading(true)
    setShowFallback(false)
  }

  const handleCanPlay = () => {
    console.log('ğŸ¥ Video can play - SUCCESS!')
    setVideoLoaded(true)
    setShowFallback(false)
    setIsLoading(false)
    onVideoLoad?.()
  }

  const handleCanPlayThrough = () => {
    console.log('ğŸ¥ Video can play through - SUCCESS!')
    setVideoLoaded(true)
    setShowFallback(false)
    setIsLoading(false)
    onVideoLoad?.()
  }

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('âŒ Video error:', e)
    setVideoError(true)
    setShowFallback(true)
    setIsLoading(false)
    onVideoError?.()
  }

  const handleLoadedData = () => {
    console.log('ğŸ¥ Video loaded successfully - SUCCESS!')
    setVideoLoaded(true)
    setShowFallback(false)
    setIsLoading(false)
    onVideoLoad?.()
  }

  // Manuel fallback geÃ§iÅŸi
  const switchToFallback = () => {
    console.log('Manual fallback triggered')
    setShowFallback(true)
    setIsLoading(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  // Video yÃ¼kleme durumunda - sadece gradient gÃ¶ster, loading gÃ¶sterme
  if (isLoading && !showFallback) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />
    )
  }

  // Video hatasÄ± veya fallback durumunda
  if (videoError || showFallback) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />
    )
  }

  // Video yÃ¼klendiÄŸinde
  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="auto"
      className={className}
      poster={posterSrc}
      onLoadStart={handleLoadStart}
      onCanPlay={handleCanPlay}
      onCanPlayThrough={handleCanPlayThrough}
      onError={handleError}
      onLoadedData={handleLoadedData}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={videoSrc} type="video/mp4" />
    </video>
  )
}
