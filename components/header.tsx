"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10">
      <div className="flex items-center justify-between p-6 md:p-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image src="/dfs-circle-logo.png?height=100&width=100" alt="DFS Logo" fill className="object-contain" />
          </div>
          <span className="font-serif text-lg md:text-xl font-light tracking-wider">DFS</span>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

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
              <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image src="/placeholder.svg?height=100&width=100" alt="DFS Logo" fill className="object-contain" />
                </div>
                <span className="font-serif text-lg md:text-xl font-light tracking-wider">DFS</span>
              </Link>
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
    </header>
  )
}

