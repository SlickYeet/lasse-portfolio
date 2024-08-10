"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

import GridPattern from "@/components/magicui/grid-pattern"
import { PROJECTS_DATA } from "@/constants"
import { cn } from "@/lib/utils"

import { ProjectCard } from "./project-card"
import { ProjectTag } from "./project-tag"

type Tags = "all" | "homelab" | "web" | "networking" | "learning" | "hosting"

export const Projects = () => {
  const [tag, setTag] = useState<Tags>("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (tag: Tags) => {
    setTag(tag)
  }

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag),
  )

  const cardVariants = {
    default: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section
      id="projects"
      className="relative min-h-[200vh] overflow-hidden bg-gray-300 pb-32 dark:bg-black">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] mt-32 h-[150%] skew-y-12",
        )}
      />

      <h4 className="mb-8 pt-16 text-center text-4xl font-semibold md:pt-32 md:text-6xl md:font-bold">
        My Projects
      </h4>

      <div className="flex flex-row items-center justify-start gap-2 overflow-x-auto py-6 lg:justify-center">
        <ProjectTag
          name="All"
          onClick={() => handleTagChange("all")}
          isSelected={tag === "all"}
        />
        <ProjectTag
          name="Homelab"
          onClick={() => handleTagChange("homelab")}
          isSelected={tag === "homelab"}
        />
        <ProjectTag
          name="Networking"
          onClick={() => handleTagChange("networking")}
          isSelected={tag === "networking"}
        />
        <ProjectTag
          name="Hosting"
          onClick={() => handleTagChange("hosting")}
          isSelected={tag === "hosting"}
        />
        <ProjectTag
          name="Web"
          onClick={() => handleTagChange("web")}
          isSelected={tag === "web"}
        />
        <ProjectTag
          name="Learning"
          onClick={() => handleTagChange("learning")}
          isSelected={tag === "learning"}
        />
      </div>

      <div className="container mx-auto mt-8 px-4 py-4 xl:px-16">
        <ul
          ref={ref}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <motion.li
              key={i}
              variants={cardVariants}
              initial="default"
              animate={isInView ? "animate" : "default"}
              transition={{ duration: 0.3, delay: i * 0.4 }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                repoUrl={project.repoUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background" />
    </section>
  )
}
