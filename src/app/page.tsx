import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background text-text">
      <Navbar />
      <div className="container mx-auto mt-24 px-4 py-4 xl:px-16">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default Home
