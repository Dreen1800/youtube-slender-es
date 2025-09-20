"use client"

import React, { useState, useEffect } from "react"
import HomeComponent from "./HomeComponent"
import QuizComponent from "./QuizComponent"
import FinalComponent from "./FinalComponent"

export type FlowStep = "home" | "quiz" | "final"

export default function BlackContentFlow() {
  const [currentStep, setCurrentStep] = useState<FlowStep>("home")
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [balance, setBalance] = useState(9.27)

  // Preserve UTM parameters
  const [searchParams, setSearchParams] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchParams(window.location.search)
    }
  }, [])

  const handleStartQuiz = () => {
    setCurrentStep("quiz")
    setCurrentQuizIndex(0)
    setBalance(9.27)
  }

  const handleNextQuiz = (earnings: number) => {
    const newBalance = balance + earnings
    setBalance(newBalance)
    
    if (currentQuizIndex < 3) {
      setCurrentQuizIndex(currentQuizIndex + 1)
    } else {
      setCurrentStep("final")
    }
  }

  const handleGoToFinal = () => {
    setCurrentStep("final")
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "home":
        return <HomeComponent onStartQuiz={handleStartQuiz} />
      
      case "quiz":
        return (
          <QuizComponent
            currentQuizIndex={currentQuizIndex}
            balance={balance}
            onNextQuiz={handleNextQuiz}
            onGoToFinal={handleGoToFinal}
          />
        )
      
      case "final":
        return <FinalComponent balance={balance} />
      
      default:
        return <HomeComponent onStartQuiz={handleStartQuiz} />
    }
  }

  return <div className="min-h-screen">{renderCurrentStep()}</div>
}
