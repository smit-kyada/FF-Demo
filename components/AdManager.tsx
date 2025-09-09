'use client'

import { useEffect, useRef } from 'react'

interface AdManagerProps {
  adUnit: string
  adSize: [number, number]
  adSlot: string
  className?: string
  style?: React.CSSProperties
}

export default function AdManager({ 
  adUnit, 
  adSize, 
  adSlot, 
  className = '', 
  style = {} 
}: AdManagerProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return

    // Load Google Ad Manager script if not already loaded
    if (!window.googletag) {
      const script = document.createElement('script')
      script.src = 'https://www.googletagservices.com/tag/js/gpt.js'
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        initializeAd()
      }
    } else {
      initializeAd()
    }

    function initializeAd() {
      if (!window.googletag) return

      // Initialize googletag
      window.googletag.cmd.push(() => {
        // Define the ad slot
        const slot = window.googletag.defineSlot(adUnit, adSize, adSlot)
        
        if (slot) {
          // Add services
          slot.addService(window.googletag.pubads())
          
          // Enable SRA (Single Request Architecture)
          window.googletag.pubads().enableSingleRequest()
          
          // Enable lazy loading
          window.googletag.pubads().enableLazyLoad({
            fetchMarginPercent: 100,
            renderMarginPercent: 50,
            mobileScaling: 2.0
          })
          
          // Display the ad
          window.googletag.display(adSlot)
          
          // Refresh the ad
          window.googletag.pubads().refresh([slot])
        }
      })
    }

    // Cleanup function
    return () => {
      if (window.googletag && adRef.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([adRef.current])
        })
      }
    }
  }, [adUnit, adSize, adSlot])

  return (
    <div 
      ref={adRef}
      id={adSlot}
      className={`ad-container ${className}`}
      style={{
        minHeight: `${adSize[1]}px`,
        width: `${adSize[0]}px`,
        ...style
      }}
    >
      <div className="ad-label">Advertisement</div>
      <div className="ad-placeholder">
        Loading ad...
      </div>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    googletag: any
  }
}
