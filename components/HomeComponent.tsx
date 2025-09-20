"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HomeComponentProps {
  onStartQuiz: () => void
}

export default function HomeComponent({ onStartQuiz }: HomeComponentProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-4 sm:space-y-6">
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <Image 
            src="/youtube.webp" 
            alt="YouTube Logo" 
            width={120} 
            height={40}
            className="object-contain"
          />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Earn money by rating videos</h1>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-2">
          Congratulations! You've just won a free license to evaluate ads in our app.
        </p>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-2">
          Click the button below to start watching videos and claim your bonus!
        </p>

        <Button
          onClick={onStartQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-7 text-base sm:text-lg font-medium w-full sm:w-auto"
        >
          Start now ▶
        </Button>
      </div>
    </div>
  )
}
