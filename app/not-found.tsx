"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function NotFound() {
  // Any client-side only code can go in useEffect
  useEffect(() => {
    // Client-side code here
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wider mb-6">Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="px-6 py-3 border border-white font-serif text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}