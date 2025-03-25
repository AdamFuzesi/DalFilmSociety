import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// You can replace this with your actual movie data

// bg-black/80 p-6 md:p-8 rounded-lg add this in div containing posters to adjust if needed


const movies = [
  {
    id: 1,
    title: "In Too Deep",
    director: "DFS",
    year: "2024",
    poster: "/mov-intoodeep.png?height=600&width=400&text=Movie+1",
    youtubeUrl: "https://youtu.be/ELLwujoNYts?si=cm2J8_c3z5V-ICBD",
  },
  {
    id: 2,
    title: "Bottled Up",
    director: "DFS",
    year: "2023",
    poster: "/mov-bottledup.png?height=600&width=400&text=Movie+2",
    youtubeUrl: "https://youtu.be/STrt4hvmHvc?si=3_FbDVe2o-iPttRd",
  },
  {
    id: 3,
    title: "Squash",
    director: "DFS",
    year: "2022",
    poster: "/mov-squash.png?height=600&width=400&text=Movie+3",
    youtubeUrl: "https://youtu.be/QG_Ylh-PXmQ?si=DkGNxCxpnktfYMbe",
  },
  {
    id: 4,
    title: "Names In Red",
    director: "DFS",
    year: "2024",
    poster: "/mov-namesinred.png?height=600&width=400&text=Movie+4",
    youtubeUrl: "https://youtu.be/6z2dVeFvZL0?si=1Fls2943m7D_UFNs",
  },
  {
    id: 5,
    title: "In My Dreams",
    director: "DFS",
    year: "2024",
    poster: "/mov-inmydreams.png?height=600&width=400&text=Movie+5",
    youtubeUrl: "https://youtu.be/BiZExdSBsdw?si=40s_W1jVp7z_7Yfb",
  },
  {
    id: 6,
    title: "Act Of Provocation",
    director: "DFS",
    year: "2023",
    poster: "/mov-actofprovocation.png?height=600&width=400&text=Movie+6",
    youtubeUrl: "https://youtu.be/IPZF5hGQDjs?si=FRb6GSmJ9j82UnE_",
  },
  {
    id: 7,
    title: "Stop Fighting",
    director: "DFS",
    year: "2024",
    poster: "/mov-stopfighting.png?height=600&width=400&text=Movie+7",
    youtubeUrl: "https://youtu.be/mv-EFZbQ9Ko?si=lmyOeTJS2qyI_SYw",
  },
  {
    id: 8,
    title: "Between Floors",
    director: "DFS",
    year: "2023",
    poster: "/mov-betweenfloors.png?height=600&width=400&text=Movie+8",
    youtubeUrl: "https://youtu.be/H5JwjVJuz_s?si=ZhmltW9sXH-pQw2W",
  },
]

export default function MoviesPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wider text-left mb-16 ml-64">
            Our Films.
          </h1>
          <div className="max-w-4xl mx-auto h-px bg-white/40 mb-16"></div>

          <div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {movies.map((movie) => (
                <Link 
                  key={movie.id} 
                  href={movie.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg transition-all duration-300 
                    group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)]">
                    <Image
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h2 className="font-serif text-xl font-light tracking-wider mb-1">{movie.title}</h2>
                      <p className="text-sm text-white/80">{movie.director} • {movie.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}