"use client"

import { useState, useRef, useEffect, forwardRef } from "react"
import { Play, Pause } from "lucide-react"
import { logVideoPerformance } from "@/utils/videoOptimization"

interface OptimizedVideoProps {
  src: string
  poster?: string
  videoId: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  onPlay?: () => void
  onPause?: () => void
  className?: string
  style?: React.CSSProperties
}

const OptimizedVideo = forwardRef<HTMLVideoElement, OptimizedVideoProps>(
  ({ 
    src, 
    poster, 
    videoId, 
    autoPlay = false, 
    muted = true, 
    loop = true, 
    onPlay, 
    onPause,
    className = "",
    style = {}
  }, ref) => {
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [isLoading, setIsLoading] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    
    // Usar ref externa se fornecida, senão usar ref interna
    const videoElement = ref || videoRef

    useEffect(() => {
      const video = (videoElement as React.RefObject<HTMLVideoElement>).current
      if (!video) return

      // Configurar monitoramento de performance
      const cleanup = logVideoPerformance(video, videoId)
      
      return cleanup
    }, [videoElement, videoId])

    const handlePlay = () => {
      setIsPlaying(true)
      setIsLoading(false)
      onPlay?.()
    }

    const handlePause = () => {
      setIsPlaying(false)
      onPause?.()
    }

    const handleLoadStart = () => {
      setIsLoading(true)
    }

    const handleCanPlay = () => {
      setIsLoading(false)
    }

    const togglePlayPause = () => {
      const video = (videoElement as React.RefObject<HTMLVideoElement>).current
      if (!video) return

      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
    }

    return (
      <div className="relative w-full h-full">
        <video
          ref={videoElement}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          playsInline
          loop={loop}
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          className={className}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            ...style
          }}
        />
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* Custom Play/Pause Controls */}
        <div 
          className="absolute inset-0 bg-transparent cursor-pointer" 
          onClick={togglePlayPause} 
        />
        
        <div className="absolute bottom-4 right-4">
          <button
            onClick={togglePlayPause}
            className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 transition-all duration-200 shadow-lg"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Video quality indicator */}
        <div className="absolute top-4 right-4">
          <div className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            HD
          </div>
        </div>
      </div>
    )
  }
)

OptimizedVideo.displayName = "OptimizedVideo"

export default OptimizedVideo
