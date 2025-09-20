import React from "react"
import WhiteContent from "./WhiteContent"
import GrayContent from "./GrayContent"
import BlackContentFlow from "./BlackContentFlow"
import { getUserLayer } from "@/utils/getUserLayer"

// Re-export the type for compatibility
export type { FlowStep } from "./BlackContentFlow"

export default async function MainFlow() {
  // Get user layer on server side
  let userLayer: number
  
  try {
    userLayer = await getUserLayer()
    console.log(`User layer determined: ${userLayer}`)
  } catch (error) {
    console.error('Error getting user layer:', error)
    userLayer = 1 // Fallback to white content
  }

  // Render content based on user layer
  switch (userLayer) {
    case 1: // WHITE CONTENT - Basic/Safe
      return <WhiteContent />
    
    case 2: // GRAY CONTENT - Intermediate
      return <GrayContent />
    
    case 3: // BLACK CONTENT - Premium/Full Experience
      return <BlackContentFlow />
    
    default:
      return <WhiteContent />
  }
}