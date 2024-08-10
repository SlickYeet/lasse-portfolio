import Link from "next/link"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer z-10 border-t border-border">
      <div className="container mx-auto px-4 py-12 xl:px-16">
        <p className="text-muted-foreground">
          &copy; {year}{" "}
          <Link
            href="https://www.famlam.ca"
            target="_blank"
            className="text-foreground underline-offset-2 hover:underline">
            HHN
          </Link>
          , All rights reserved.
        </p>
      </div>
    </footer>
  )
}
