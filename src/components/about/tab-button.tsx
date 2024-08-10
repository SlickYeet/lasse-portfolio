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
  const buttonStyles = active ? "text-foreground" : "text-muted-foreground"

  return (
    <motion.button disabled={disabled} onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-foreground ${buttonStyles}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-px bg-primary"
      />
    </motion.button>
  )
}
