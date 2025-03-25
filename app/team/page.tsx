import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This is a placeholder for team members
// You'll need to replace this with actual data
const teamMembers = [
  {
    name: "Deniz Mutlu",
    position: "Co-Founder and President",
    year: "Film and Media Studies",
    favoriteFilm: "Banshees of Insherin",
    image: "/deniz.png?height=400&width=400",
  },
  {
    name: "Allie Vahramian",
    position: "Co-Founder and President",
    year: "Commerce",
    favoriteFilm: "Forest Gump",
    image: "/allie.png?height=400&width=400",
  },
  {
    name: "Connor Scida",
    position: "President and Treasurer",
    year: "Commerce-international Business ",
    favoriteFilm: "The Holdovers",
    image: "/connor.png?height=400&width=400",
  },
  {
    name: "Colin Dowd",
    position: "Vice President",
    year: "History",
    favoriteFilm: "Another Round",
    image: "/colin.png?height=400&width=400",
  },
  {
    name: "Rosie MacMillab",
    position: "Head of Marketing",
    year: "Management-Sustainability",
    favoriteFilm: "Rio",
    image: "/rosie.png?height=400&width=400",
  },
  {
    name: "Sam Kelly",
    position: "Head Of Communications",
    year: "Psychology",
    favoriteFilm: "Coach Carter",
    image: "/sam.png?height=400&width=400",
  },
  {
    name: "katharine Ground",
    position: "Co-Planning Executive",
    year: "Film and Media Studies",
    favoriteFilm: "Little Miss Sunshine",
    image: "/katharine.png?height=400&width=400",
  },
  {
    name: "Sophie Bano",
    position: "Marketing Executive",
    year: "Management-Sustainability",
    favoriteFilm: "Ocean's Eleven",
    image: "/sophie.png?height=400&width=400",
  },
  {
    name: "Lexi Durno",
    position: "Co-Planning Executive",
    year: "Film and Media Studies",
    favoriteFilm: "Pitch Perfect",
    image: "/lexi.png?height=400&width=400",
  },
  {
    name: "Taylor Franks",
    position: "Marketing Executive",
    year: "Commerce",
    favoriteFilm: "Fantastic Mr.Fox",
    image: "/taylor.png?height=400&width=400",
  },
  {
    name: "Rory Gould",
    position: "Marketing (Merch)",
    year: "Commerce-Accounting",
    favoriteFilm: "National Treasure",
    image: "/rory.png?height=400&width=400",
  }
]

export default function TeamPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wider text-left mb-16 ml-60">
            Meet the Executive Team.
          </h1>
          <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>

          <div className="bg-black/80 p-6 md:p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative h-64 w-64 rounded-full overflow-hidden mb-6 border-2 border-white/20">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h2 className="font-serif text-2xl font-light tracking-wider mb-2">{member.name}</h2>
                  <p className="text-lg text-white/80 mb-1">{member.position}</p>
                  <p className="text-sm text-white/60 mb-3">{member.year}</p>
                  <p className="text-md italic">Favorite Film: {member.favoriteFilm}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

