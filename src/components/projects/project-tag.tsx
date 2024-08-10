interface ProjectTagProps {
  name: string
  onClick: (name: string) => void
  isSelected: boolean
}

export const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-foreground border-primary hover:border-primary/75"
    : "text-muted-foreground border-border hover:border-foreground/75"

  return (
    <button
      onClick={() => onClick(name)}
      className={`cursor-pointer rounded-full border-2 px-6 py-2 text-xl ${buttonStyles}`}>
      {name}
    </button>
  )
}
