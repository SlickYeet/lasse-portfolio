import { NavItem } from "./nav-item"

interface MenuOverlayProps {
  routes: {
    href: string
    label: string
  }[]
}

export const MenuOverlay = ({ routes }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {routes.map((route, i) => (
        <NavItem key={i} href={route.href} label={route.label} />
      ))}
    </ul>
  )
}
