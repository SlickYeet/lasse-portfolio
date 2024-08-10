import { Code, Eye } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  imgUrl: string
  repoUrl: string
  previewUrl: string
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repoUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="group relative h-52 rounded-t-xl"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-background/75 backdrop-blur-lg transition-all duration-200 group-hover:flex">
          <Link
            href={repoUrl}
            target={repoUrl && !repoUrl.startsWith("#") ? "_blank" : "_self"}
            className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-border hover:border-foreground">
            <Code className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-muted-foreground group-hover/link:text-foreground" />
          </Link>
          <Link
            href={previewUrl}
            target={
              previewUrl && !previewUrl.startsWith("#") ? "_blank" : "_self"
            }
            className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-border hover:border-foreground">
            <Eye className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-muted-foreground group-hover/link:text-foreground" />
          </Link>
        </div>
      </div>

      <div className="mt-3 rounded-b-xl bg-background px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="prose text-muted-foreground lg:prose-lg">{description}</p>
      </div>
    </div>
  )
}
