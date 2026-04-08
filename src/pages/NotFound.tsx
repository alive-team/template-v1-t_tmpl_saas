import { Link } from "@tanstack/react-router"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link to="/" className="text-foreground hover:underline underline-offset-4">
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
