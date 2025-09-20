"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Declaração de tipos para elementos customizados
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string
        style?: React.CSSProperties
      }
    }
  }
}

interface GrayFinalComponentProps {
  balance: number
}

export default function GrayFinalComponent({ balance }: GrayFinalComponentProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Proteção contra execução no servidor
    if (typeof window === "undefined") return
    
    setIsClient(true)

    // Captura os parâmetros UTM da URL atual
    const currentSearchParams = window.location.search
    
    // Log dos UTMs capturados para debug
    if (currentSearchParams) {
      console.log("UTM Parameters captured on gray final page:", currentSearchParams)
    }

    // Delay para garantir que scripts externos sejam carregados primeiro
    const timer = setTimeout(() => {
      // Dispara evento de conversão com Facebook Pixel (Gray Content)
      try {
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'YouTube Video Quiz Completion - Gray',
            value: 150.00, // Valor diferente para Gray Content
            currency: 'USD'
          })
          console.log("Facebook Pixel Lead event triggered (Gray Content)")
        }
      } catch (error) {
        console.warn("Facebook Pixel not available:", error)
      }

      // Integração com Utmify para conversão
      try {
        if (typeof window !== "undefined" && (window as any).utmify) {
          (window as any).utmify.conversion('gray-final-page-reached')
          console.log("Utmify conversion event triggered (Gray)")
        }
      } catch (error) {
        console.warn("Utmify not available:", error)
      }
    }, 2000) // Delay de 2 segundos

    // Carregamento do script do player ConvertEai específico para Gray Content
    const loadPlayerScript = () => {
      try {
        const existingScript = document.querySelector('script[src*="68ac5c2e6b5c074f453c56cd"]')
        if (!existingScript) {
          const s = document.createElement("script")
          s.type = "text/javascript"
          s.src = "https://scripts.converteai.net/ff9f6de5-a5a0-4221-9188-aae68066cbeb/players/68ac5c2e6b5c074f453c56cd/v4/player.js"
          s.async = true
          s.onload = () => console.log("ConvertEai Gray player script loaded successfully")
          s.onerror = () => console.error("Failed to load ConvertEai Gray player script")
          document.head.appendChild(s)
        }
      } catch (error) {
        console.error("Error loading ConvertEai Gray player script:", error)
      }
    }

    loadPlayerScript()

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const comments = [
    {
      username: "Sarahwilliams",
      time: "20 min ago",
      text: "Glad I watched until the end! 🙏 🙏",
      likes: 13,
      avatar: "/profile-1.png",
    },
    {
      username: "Margaretjones",
      time: "1 min ago",
      text: "@Sarahwilliams: Me too, but thankfully I didn't close it beforehand.",
      likes: 1,
      avatar: "/profile-2.png",
    },
    {
      username: "Susansmith",
      time: "2 days ago",
      text: "Has anyone who has tried it before can tell me if it works?",
      likes: 3,
      avatar: "/profile-3.png",
    },
    {
      username: "mariaevans",
      time: "2 days ago",
      text: "@Susansmith: Yes, it does work. I tested it, and it worked!",
      likes: 1,
      avatar: "/profile-4.png",
    },
    {
      username: "Susansmith",
      time: "2 days ago",
      text: "@mariaevans: Thank you, I'll give it a try then.",
      likes: 3,
      avatar: "/profile-3.png",
    },
    {
      username: "Beneditagreen",
      time: "20 min ago",
      text: "Awesome, I've been doing it for 3 hours, and the balance is already going up. Thanks a lot! 💖",
      likes: 0,
      avatar: "/profile-5.png",
    },
    {
      username: "thomaslewis",
      time: "48 min ago",
      text: "AHH. I loved this. I never imagined making money by doing these simple reviews.",
      likes: 35,
      avatar: "/profile-2.png",
    },
    {
      username: "lidiabernardino",
      time: "1 day ago",
      text: "I'm making $200 a day, VERY EASY to review these ads! Yay!",
      likes: 0,
      avatar: "/profile-1.png",
    },
    {
      username: "nayaraazevedo",
      time: "11 min ago",
      text: "Watch this video until the end. It's really worth it.",
      likes: 0,
      avatar: "/profile-5.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/youtube.webp" 
              alt="YouTube Logo" 
              width={120} 
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-lg sm:text-xl shadow-lg">
            $ {balance.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8">
          <div className="aspect-video relative bg-gradient-to-br from-gray-900 to-gray-800">
            {isClient ? (
              <div 
                dangerouslySetInnerHTML={{
                  __html: '<vturb-smartplayer id="vid-68ac5c2e6b5c074f453c56cd" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>'
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-white text-lg">Loading player...</div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            <span className="text-amber-600">Premium Microtasks:</span> Earned money by watching videos? To cash out and
            complete more microtasks, watch this 4-minute tutorial.
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 text-sm sm:text-base">
            <span className="font-medium">987,654 views</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">Dec 23, 2024</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-green-600">95% liked this</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Comments</h2>
            <span className="text-base sm:text-lg font-semibold text-gray-600">35.421</span>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <img
                    src={comment.avatar || "/placeholder.svg"}
                    alt={`${comment.username} avatar`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">@{comment.username}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{comment.time}</span>
                  </div>
                  <p className="text-gray-800 mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base">{comment.text}</p>
                  <div className="flex items-center gap-4 sm:gap-6 text-gray-500">
                    <button className="flex items-center gap-1 sm:gap-2 hover:text-blue-600 transition-colors group text-xs sm:text-sm">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L17 11v9m7-10h-2M7 20H5a2 2 0 00-2-2v-6a2 2 0 002-2h2.5"
                        />
                      </svg>
                      <span className="font-medium">{comment.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 sm:gap-2 hover:text-red-600 transition-colors group text-xs sm:text-sm">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h-2m5-10H5a2 2 0 00-2 2v6a2 2 0 002 2h2.5"
                        />
                      </svg>
                    </button>
                    <button className="font-medium hover:text-gray-700 transition-colors text-xs sm:text-sm">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors text-sm sm:text-base">
              Load more comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
