interface ProjectTagProps {
  name: string
  onClick: (name: string) => void
  isSelected: boolean
}

export const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-text border-primary"
    : "text-muted-foreground border-border hover:border-text"

  return (
    <button
      onClick={() => onClick(name)}
      className={`cursor-pointer rounded-full border-2 px-6 py-3 text-xl ${buttonStyles}`}>
      {name}
    </button>
  )
}
