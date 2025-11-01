declare global {
  interface Window {
    vturbScriptsLoaded?: Set<string>
    vturbLoadingPromises?: Map<string, Promise<void>>
  }
}

export function loadVturbPlayer(playerId: string, accountId: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  
  if (!window.vturbScriptsLoaded) window.vturbScriptsLoaded = new Set()
  if (!window.vturbLoadingPromises) window.vturbLoadingPromises = new Map()
  
  if (window.vturbScriptsLoaded.has(playerId)) return Promise.resolve()
  
  if (window.vturbLoadingPromises.has(playerId)) {
    return window.vturbLoadingPromises.get(playerId)!
  }
  
  const loadingPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = `https://scripts.converteai.net/${accountId}/players/${playerId}/v4/player.js`
    script.async = true
    script.setAttribute('data-vturb-player', playerId)
    
    script.onload = () => {
      window.vturbScriptsLoaded!.add(playerId)
      window.vturbLoadingPromises!.delete(playerId)
      resolve()
    }
    
    script.onerror = reject
    document.head.appendChild(script)
  })
  
  window.vturbLoadingPromises.set(playerId, loadingPromise)
  return loadingPromise
}

