import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

interface TabButtonProps {
  disabled: boolean
  active: boolean
  selectTab: () => void
  children: React.ReactNode
}

export const TabButton = ({
  disabled,
  active,
  selectTab,
  children,
}: TabButtonProps) => {
  const buttonStyles = active ? "text-text" : "text-muted-foreground"

  return (
    <button disabled={disabled} onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-text ${buttonStyles}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="mr-3 mt-2 h-1 bg-primary"
      />
    </button>
  )
}
