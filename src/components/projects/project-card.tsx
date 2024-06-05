import { Code, Eye } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  repoUrl: string
  previewUrl: string
}

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  repoUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-background/75 backdrop-blur-lg transition-all duration-500 group-hover:flex">
          <Link
            href={repoUrl}
            target={repoUrl && !repoUrl.startsWith("#") ? "_blank" : "_self"}
            className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-border hover:border-text">
            <Code className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-muted-foreground group-hover/link:text-text" />
          </Link>
          <Link
            href={previewUrl}
            target={
              previewUrl && !previewUrl.startsWith("#") ? "_blank" : "_self"
            }
            className="group/link relative h-14 w-14 rounded-full border-2 border-border hover:border-text">
            <Eye className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-muted-foreground group-hover/link:text-text" />
          </Link>
        </div>
      </div>

      <div className="mt-3 rounded-b-xl bg-foreground px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="prose lg:prose-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
