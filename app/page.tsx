"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Full page background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/coverPage.jpg?height=1080&width=1920"
          alt="Film background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <div className="flex-1" />
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-start justify-center px-6 md:px-16">
        <div className="flex items-center gap-8 md:gap-12">
          <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center">
            <Image
              src="/dfs-circle-logo.png?height=200&width=200"
              alt="DFS Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-normal text-left">
            Dalhousie Film
            <br />
            Society
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 md:p-6 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} Dalhousie Film Society. All rights reserved.</p>
      </footer>

      {/* Full page menu */}
      <AnimatePresence>
          {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black"
          >
            <div className="flex items-center justify-between p-6 md:p-10">
              <div className="flex-1" />
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center gap-8"
              >
                <Link
                  href="/about"
                  className="font-serif text-3xl md:text-5xl font-light tracking-wider hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="font-serif text-3xl md:text-5xl font-light tracking-wider hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Meet the Team
                </Link>
                <Link
                  href="/events"
                  className="font-serif text-3xl md:text-5xl font-light tracking-wider hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className="font-serif text-3xl md:text-5xl font-light tracking-wider hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
