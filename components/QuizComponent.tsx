"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Play, Pause, ThumbsUp, ThumbsDown, Globe, Lock } from "lucide-react"
import Image from "next/image"

interface Video {
  id: string
  title: string
  channel: string
  views: string
  timeAgo: string
  thumbnail: string
  channelAvatar: string
  videoUrl?: string
}

const mockVideos: Video[] = [
  {
    id: "1",
    title: "Burgerville Big Sassy Cheeseburger",
    channel: "Burgerville",
    views: "251K views",
    timeAgo: "4 days ago",
    thumbnail: "/colorful-burger-sunglasses.png",
    channelAvatar: "/burgerville-logo.webp",
    videoUrl: "https://pub-08a9238104e14ed09c537e3069e470dd.r2.dev/Step_1_YouTube_Official_Site.mp4",
  },
  {
    id: "2",
    title: "Always Ultra Thin – Fear No Gush",
    channel: "Always",
    views: "1.1M views",
    timeAgo: "15 days ago",
    thumbnail: "/blue-ultra-thin-packaging.png",
    channelAvatar: "/always-logo.jpeg",
    videoUrl: "https://pub-08a9238104e14ed09c537e3069e470dd.r2.dev/Step_2_YouTube_Official_Site.mp4",
  },
  {
    id: "3",
    title: "Losing is Hard",
    channel: "Xumo",
    views: "45K views",
    timeAgo: "2 days ago",
    thumbnail: "/dark-tech-blue-wave.png",
    channelAvatar: "/xumo-logo.jpeg",
    videoUrl: "https://pub-08a9238104e14ed09c537e3069e470dd.r2.dev/Step_3_YouTube_Official_Site.mp4",
  },
  {
    id: "4",
    title: "Secret Microtasks: Earned money by watching videos?",
    channel: "MicroEarnings",
    views: "892K views",
    timeAgo: "1 day ago",
    thumbnail: "/person-dollar-overlay.png",
    channelAvatar: "/microearnings-avatar.png",
  },
]

interface QuizComponentProps {
  currentQuizIndex: number
  balance: number
  onNextQuiz: (earnings: number) => void
  onGoToFinal: () => void
}

export default function QuizComponent({ currentQuizIndex, balance, onNextQuiz, onGoToFinal }: QuizComponentProps) {
  const [showThankYou, setShowThankYou] = useState(false)
  const [showCongratulations, setShowCongratulations] = useState(false)
  const [animatedBalance, setAnimatedBalance] = useState(balance)
  const [previousBalance, setPreviousBalance] = useState(balance)
  const [currentEarnings, setCurrentEarnings] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentVideo = mockVideos[currentQuizIndex]

  // Preload do próximo vídeo para melhor performance
  useEffect(() => {
    const nextVideoIndex = currentQuizIndex + 1
    if (nextVideoIndex < mockVideos.length && mockVideos[nextVideoIndex].videoUrl) {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = mockVideos[nextVideoIndex].videoUrl!
      link.as = 'video'
      document.head.appendChild(link)
      
      return () => {
        document.head.removeChild(link)
      }
    }
  }, [currentQuizIndex])

  // Update animated balance when balance prop changes
  useEffect(() => {
    setAnimatedBalance(balance)
    setPreviousBalance(balance)
  }, [balance])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleReview = (relevant: boolean) => {
    let earnings: number
    if (currentQuizIndex === 0) {
      earnings = 67.73
    } else if (currentQuizIndex === 1) {
      earnings = 68.0
    } else if (currentQuizIndex === 2) {
      earnings = 68.0
    } else {
      earnings = Math.random() * 15 + 5
    }

    setPreviousBalance(balance)
    setCurrentEarnings(earnings)
    setShowThankYou(true)
  }

  useEffect(() => {
    if (showThankYou && currentEarnings > 0) {
      setAnimatedBalance(previousBalance)
      const newBalance = previousBalance + currentEarnings
      const duration = 2000
      const steps = 60
      const increment = currentEarnings / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setAnimatedBalance((prev) => {
          const newValue = previousBalance + increment * currentStep
          if (currentStep >= steps) {
            clearInterval(timer)
            return newBalance
          }
          return newValue
        })
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [showThankYou, currentEarnings, previousBalance])

  const handleContinue = () => {
    setShowThankYou(false)
    const earningsToAdd = currentEarnings
    setCurrentEarnings(0)
    onNextQuiz(earningsToAdd)
  }

  const handleWithdraw = () => {
    if (currentQuizIndex >= 2) {
      // Primeiro adiciona os earnings do quiz atual ao balance
      const earningsToAdd = currentEarnings
      onNextQuiz(earningsToAdd)
      
      setShowThankYou(false)
      setShowCongratulations(true)
    }
  }

  const handleContinueToFinal = () => {
    setShowCongratulations(false)
    onGoToFinal()
  }

  if (!currentVideo) {
    return <div>Video not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-3 sm:px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/youtube.webp" 
            alt="YouTube Logo" 
            width={80} 
            height={24}
            className="object-contain"
          />
        </div>
        <div className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-lg font-semibold text-sm sm:text-base">
          $ {balance.toFixed(2)}
        </div>
      </div>

      {/* Video Content */}
      <div className="max-w-2xl mx-auto p-3 sm:p-4">
        <Card className="overflow-hidden">
          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden">
            {currentVideo.videoUrl ? (
              <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
                <video
                  ref={videoRef}
                  src={currentVideo.videoUrl}
                  autoPlay
                  playsInline
                  loop
                  preload="metadata" // Carrega apenas metadados inicialmente
                  poster={currentVideo.thumbnail} // Mostra thumbnail até carregar
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onLoadStart={() => console.log('Video loading started')}
                  onCanPlay={() => console.log('Video can start playing')}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                {/* Custom Play/Pause Controls */}
                <div className="absolute inset-0 bg-transparent cursor-pointer" onClick={togglePlayPause} />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={togglePlayPause}
                    className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 transition-all duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={currentVideo.thumbnail || "/placeholder.svg"}
                  alt={currentVideo.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
                  <Play className="w-12 h-12 text-white opacity-80" />
                </div>
              </>
            )}
          </div>

          {/* Video Info */}
          <div className="p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{currentVideo.title}</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {currentVideo.views} • {currentVideo.timeAgo}
            </p>

            {/* Channel Info */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={currentVideo.channelAvatar || "/placeholder.svg"}
                  alt={currentVideo.channel}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <span className="font-medium text-gray-900 text-sm sm:text-base">{currentVideo.channel}</span>
              </div>
              <div className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <span className="hidden sm:inline">Partner verified</span>
                <span className="sm:hidden">Verified</span>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-gray-600 mb-3 text-sm sm:text-base">Answer the question:</p>
              <p className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">Is this video relevant to you?</p>

              <div className="flex flex-row gap-3 w-full">
                <Button
                  onClick={() => handleReview(false)}
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-7 text-base font-medium"
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span className="hidden sm:inline">Not relevant</span>
                  <span className="sm:hidden">Not relevant</span>
                </Button>
                <Button
                  onClick={() => handleReview(true)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 px-4 py-7 text-base font-medium"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Relevant</span>
                  <span className="sm:hidden">Relevant</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blocked Content Preview */}
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
          {mockVideos.map((video, index) => {
            if (index <= currentQuizIndex) return null

            return (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-32 object-cover filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Lock className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold text-lg">Blocked content</p>
                      <p className="text-sm opacity-90">Rate the videos selected first.</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">{video.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <img
                      src={video.channelAvatar || "/placeholder.svg"}
                      alt={video.channel}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">{video.channel}</span>
                    <span className="text-xs sm:text-sm text-gray-500">• {video.views}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Thank You Modal */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="max-w-sm sm:max-w-md mx-auto my-8 p-6 sm:p-8 w-[90vw] sm:w-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Image 
                src="/youtube.webp" 
                alt="YouTube Logo" 
                width={100} 
                height={32}
                className="object-contain"
              />
            </div>

            <DialogTitle className="text-xl sm:text-2xl font-semibold">Thank you for your review.</DialogTitle>

            <div className="border-t border-b py-4 sm:py-6">
              <p className="text-gray-600 mb-3 text-base sm:text-lg">Available balance</p>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600">
                ${animatedBalance.toFixed(2)}
                {currentEarnings > 0 && (
                  <span className="text-xl text-green-600 ml-2">+${currentEarnings.toFixed(2)}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <Button
                variant={currentQuizIndex >= 2 ? "default" : "outline"}
                className={`w-full text-base sm:text-lg py-7 sm:py-7 ${
                  currentQuizIndex >= 2
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                onClick={handleWithdraw}
                disabled={currentQuizIndex < 2}
              >
                {currentQuizIndex >= 2 ? null : <Lock className="w-4 h-4 mr-2" />}
                Withdraw $
              </Button>
              <Button
                className={`w-full text-base sm:text-lg py-7 sm:py-7 ${
                  currentQuizIndex >= 2
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={currentQuizIndex >= 2 ? undefined : handleContinue}
                disabled={currentQuizIndex >= 2}
              >
                {currentQuizIndex >= 2 ? <Lock className="w-4 h-4 mr-2" /> : <Globe className="w-4 h-4 mr-2" />}
                Watch more...
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Congratulations Modal */}
      <Dialog open={showCongratulations} onOpenChange={setShowCongratulations}>
        <DialogContent className="max-w-sm sm:max-w-md mx-auto my-8 p-6 sm:p-8 w-[90vw] sm:w-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Image 
                src="/youtube.webp" 
                alt="YouTube Logo" 
                width={100} 
                height={32}
                className="object-contain"
              />
            </div>

            <DialogTitle className="text-xl sm:text-2xl font-semibold">Congratulations!</DialogTitle>

            <p className="text-gray-600 text-base sm:text-lg px-2">
              Watch this quick 4-minute tutorial to redeem your reward!
            </p>

            <div className="text-4xl sm:text-5xl font-bold text-blue-600">$ 213.00</div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 text-base sm:text-lg"
              onClick={handleContinueToFinal}
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Continue | 4 min
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
