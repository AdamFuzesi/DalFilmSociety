import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wider text-center mb-16">Events</h1>

        {/* Premiere Event */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/eventCover.png?height=600&width=1200"
              alt="Film Premiere Event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider mb-2">
                End-of-Semester Premiere
              </h2>
              <p className="text-lg text-white/80">A celebration of student filmmaking</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-white/60" />
              <div>
                <p className="text-sm text-white/60">Date</p>
                <p className="text-lg">March 28th</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-white/60" />
              <div>
                <p className="text-sm text-white/60">Location</p>
                <p className="text-lg">Dalhousie University</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-white/60" />
              <div>
                <p className="text-sm text-white/60">Dress Code</p>
                <p className="text-lg">Formal</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <h3 className="font-serif text-2xl font-light tracking-wider mb-4">About the Premiere</h3>
            <p>
              Join us for our End-of-Semester Premiere, where we'll showcase the incredible short films created by our
              student teams throughout the semester. This formal event brings together filmmakers, actors, friends,
              family, and film enthusiasts for a night of celebration and appreciation of student creativity.
            </p>
            <p>
              The evening will include a screening of all student films, awards presentation, photo opportunities, and a
              reception following the screenings. This is the culmination of a semester's worth of hard work and
              collaboration, and we can't wait to share it with you!
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://www.eventbrite.com/e/the-dalhousie-film-society-short-film-premiere-tickets-1284820435509?aff=oddtdtcreator"
              className="inline-block px-8 py-3 border border-white font-serif text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Get Tickets
            </a>
          </div>
        </section>

        {/* Previous Events Gallery */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-light tracking-wider text-center mb-8">Previous Events</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Event+${index + 1}`}
                  alt={`Previous event ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

