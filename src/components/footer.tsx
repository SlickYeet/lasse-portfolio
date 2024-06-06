import Link from "next/link"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer z-10 border-t border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-12 xl:px-16">
        <p className="text-2xl">
          LA<span className="text-primary">SSE</span>
        </p>
        <p className="text-muted-foreground">
          &copy; {year}{" "}
          <Link
            href="https://www.famlam.ca"
            className="text-primary underline-offset-2 hover:underline">
            HHN
          </Link>
          , All rights reserved.
        </p>
      </div>
    </footer>
  )
}
