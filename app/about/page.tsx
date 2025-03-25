import Image from "next/image"
import { Mail, Instagram } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background image */}
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

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wider text-left mb-16 ml-60">About Us.</h1>
          <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>

          {/* First section */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 bg-black/80 p-6 md:p-8 rounded-lg">
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-serif text-3xl font-light tracking-wider mb-4">What is DFS</h2>
              <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>
              <p className="text-lg leading-relaxed">
                The Dalhousie Film Society is a community for students who are passionate about film, whether you're an
                experienced filmmaker or just getting started. We bring students together to collaborate, learn, and
                create original student-made short films.
              </p>
              <p className="text-lg leading-relaxed">
                No experience? No problem! Our society is open to anyone with an interest in filmmaking, storytelling,
                or film appreciation. Choose your interest, and we'll find the team for you.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/updateGroup.png?height=600&width=800"
                alt="Film Society Members"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Second section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 mb-24 bg-black/80 p-6 md:p-8 rounded-lg">
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-serif text-3xl font-light tracking-wider mb-4">What We Do</h2>
              <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>
              <p className="text-lg leading-relaxed">
                Each semester, the Dalhousie Film Society brings students together to create short films. We form groups
                of 5–10 students based on genre interests and preferred roles, ensuring everyone has a chance to
                contribute in a way that excites them.
              </p>
              <p className="text-lg leading-relaxed">
                Our filmmaking journey kicks off in the second or third week of the semester, with weekly meetings where
                teams share progress, plan next steps, and receive guidance from our Presidents and Executive Team.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image src="/perchance.png?height=600&width=800" alt="Film Production" fill className="object-cover" />
            </div>
          </section>

          {/* Third section */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 bg-black/80 p-6 md:p-8 rounded-lg">
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-serif text-3xl font-light tracking-wider mb-4">Our Premiere</h2>
              <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>
              <p className="text-lg leading-relaxed">
                The highlight of our semester is the End-of-Semester Premiere, a celebration of student filmmaking where
                we showcase our finished films on the big screen in front of a live audience of peers, friends, family,
                and film enthusiasts.
              </p>
              <p className="text-lg leading-relaxed">
                At the Dalhousie Film Society, we strive for a welcoming and inclusive space where creativity thrives.
                Whether you're interested in writing, directing, cinematography, acting, editing, or simply curious
                about filmmaking, we invite you to join us and bring your ideas to life!
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image src="/event.jpeg?height=600&width=800" alt="Film Premiere" fill className="object-cover" />
            </div>
          </section>

          {/* Join us section */}
          <section className="max-w-3xl mx-auto mb-16 py-8 border-t border-b border-white/20 bg-black/80 p-6 md:p-8 rounded-lg">
            <h2 className="font-serif text-3xl font-light tracking-wider mb-6">Join Us</h2>
            <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>
            <p className="text-lg mb-8">Ready to start your filmmaking journey? Sign up today!</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeDYZ8KiPZQvzLES8xofsA3ATQYrDoa-V7CUWti6dnuV-aNvw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-white font-serif text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Sign Up Form
            </a>
          </section>

          {/* Social links */}
          <section className="flex flex-col items-center justify-center gap-4 mb-16 bg-black/80 p-6 md:p-8 rounded-lg">
            <h2 className="font-serif text-2xl font-light tracking-wider mb-2">Connect With Us</h2>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/dalhousiefilmsociety/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:dalhousiefilmsociety@gmail.com"
                className="flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span>Email</span>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

