"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

import { ProjectCard } from "@/components/projects/project-card"
import { ProjectTag } from "@/components/projects/project-tag"
import { PROJECTS_DATA } from "@/constants"

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
    <section className="min-h-screen" id="projects">
      <h2 className="mb-8 mt-4 text-center text-4xl font-bold md:mb-12">
        My Projects
      </h2>

      <div className="flex flex-row items-center justify-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("all")}
          name="All"
          isSelected={tag === "all"}
        />
        <ProjectTag
          onClick={() => handleTagChange("homelab")}
          name="Homelab"
          isSelected={tag === "homelab"}
        />
        <ProjectTag
          onClick={() => handleTagChange("networking")}
          name="Networking"
          isSelected={tag === "networking"}
        />
        <ProjectTag
          onClick={() => handleTagChange("hosting")}
          name="Hosting"
          isSelected={tag === "hosting"}
        />
        <ProjectTag
          onClick={() => handleTagChange("web")}
          name="Web"
          isSelected={tag === "web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("learning")}
          name="Learning"
          isSelected={tag === "learning"}
        />
      </div>

      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, i) => (
          <motion.li
            key={i}
            variants={cardVariants}
            initial="default"
            animate={isInView ? "animate" : "default"}
            transition={{ duration: 0.3, delay: i * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              repoUrl={project.repoUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
