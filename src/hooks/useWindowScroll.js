import { useState, useEffect } from 'react'

export function useWindowScroll() {
  const isClientSide = (typeof window === 'object' && typeof  document === 'object')

  function getScroll() {
    return {
      scrollY: isClientSide ? window.scrollY : 0,
      scrollX: isClientSide ? window.scrollX : 0,
    }
  }

  const [windowScroll, setWindowScroll] = useState(getScroll())

  useEffect(() => {
    if (!isClientSide)
      return false;

    function handleScroll() {
      setWindowScroll(getScroll())
    }

    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return windowScroll;
}
