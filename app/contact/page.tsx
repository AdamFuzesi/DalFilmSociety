import { Mail, Instagram, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wider text-center mb-16">Contact Us</h1>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl font-light tracking-wider mb-6">Get in Touch</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 text-white/80" />
                <div>
                  <p className="text-lg font-medium mb-1">Email</p>
                  <a
                    href="mailto:dalhousiefilmsociety@gmail.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    dalhousiefilmsociety@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="h-6 w-6 mt-1 text-white/80" />
                <div>
                  <p className="text-lg font-medium mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/dalhousiefilmsociety/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    @dalhousiefilmsociety
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <h3 className="font-serif text-xl font-light tracking-wider mb-4">Join Our Society</h3>
              <p className="text-white/80 mb-4">
                Interested in filmmaking or want to be part of our community? Fill out our sign-up form to get started!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDYZ8KiPZQvzLES8xofsA3ATQYrDoa-V7CUWti6dnuV-aNvw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-white font-serif tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Sign Up Form
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-light tracking-wider mb-6">Send Us a Message</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-none focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-none focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-none focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-none focus:outline-none focus:ring-1 focus:ring-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 border border-white font-serif tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

