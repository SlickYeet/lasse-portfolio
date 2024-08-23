import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="container mx-auto mt-8 px-4 py-4 xl:mt-24 xl:px-16">
          <Hero />
          <Achievements />
          <About />
        </div>
        <Projects />

        <div className="container mx-auto mt-8 px-4 py-4 xl:mt-24 xl:px-16">
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Home
