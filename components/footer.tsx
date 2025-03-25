import Link from "next/link"
import { Mail, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white border-t border-white/10 py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <h3 className="font-serif text-xl font-light tracking-wider mb-4">Dalhousie Film Society</h3>
            <p className="text-white/70 mb-4">
              A community for students who are passionate about film, bringing people together to collaborate, learn,
              and create.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-xl font-light tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-white transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-white/70 hover:text-white transition-colors">
                  Our Films
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-serif text-xl font-light tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="mailto:dalhousiefilmsociety@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>dalhousiefilmsociety@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/dalhousiefilmsociety/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@dalhousiefilmsociety</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Dalhousie Film Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}