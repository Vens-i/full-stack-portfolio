export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kervens Auguste. All rights reserved.
        </p>
        {/* <p className="text-center text-sm text-muted-foreground">
          Designed and built with ❤️ using Next.js and Tailwind CSS
        </p> */}
      </div>
    </footer>
  )
}
