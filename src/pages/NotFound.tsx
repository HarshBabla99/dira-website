import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Leaf, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <Leaf className="h-12 w-12 text-primary mx-auto mb-6" />
        <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn inline-flex items-center gap-2">
          <Home className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
