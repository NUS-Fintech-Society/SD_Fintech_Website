import { useRouter } from 'next/router'
import React from 'react'

const setSmoothScroll = (isSmooth) => {
  document.documentElement.style.scrollBehavior = isSmooth ? 'smooth' : 'auto'
}

export function useSmoothScroll() {
  const router = useRouter()

  React.useEffect(() => {
    setSmoothScroll(true)
    const handleStart = () => setSmoothScroll(false)
    const handleStop = () => setSmoothScroll(true)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
}
