"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface SafeImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  priority?: boolean
  loading?: 'lazy' | 'eager'
  fallbackSrc?: string
}

export function SafeImage({ 
  src, 
  alt, 
  fill = false, 
  className = '', 
  onError,
  priority = false,
  loading = 'lazy',
  fallbackSrc,
  ...props 
}: SafeImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState(src)

  // src prop'u deÄŸiÅŸtiÄŸinde currentSrc'yi gÃ¼ncelle
  useEffect(() => {
    setCurrentSrc(src)
    setImageError(false)
    setImageLoading(true)
  }, [src])

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image failed to load:', currentSrc)
    
    // EÄŸer fallback image varsa ve henÃ¼z denemediysek, fallback'i dene
    if (fallbackSrc && currentSrc === src) {
      console.log('Trying fallback image:', fallbackSrc)
      setCurrentSrc(fallbackSrc)
      setImageLoading(true) // Fallback iÃ§in loading state'i resetle
      return
    }
    
    // Fallback de baÅŸarÄ±sÄ±z olduysa veya yoksa, error state'e geÃ§
    console.log('All image sources failed, showing placeholder')
    setImageError(true)
    setImageLoading(false)
    if (onError) {
      onError(e)
    }
  }

  const handleLoad = () => {
    setImageLoading(false)
  }

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-16 h-16 mx-auto mb-2 bg-slate-400 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-slate-600">GÃ¶rsel yÃ¼klenemedi</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {imageLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse ${className}`} />
      )}
      <Image
        src={currentSrc}
        alt={alt}
        fill={fill}
        className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        loading={loading}
        {...props}
      />
    </>
  )
}
