import Link from "next/link"

interface NavItemProps {
  href: string
  label: string
}

export const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="block rounded py-2 pl-3 pr-4 text-muted-foreground hover:text-text sm:text-xl md:p-0">
        {label}
      </Link>
    </li>
  )
}
