import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, User, LogIn } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const categories = [
    { name: "Healthcare", path: "/healthcare" },
    { name: "Education", path: "/education" },
    { name: "Agriculture", path: "/agriculture" },
    { name: "Women", path: "/women" },
    { name: "Business", path: "/business" },
    { name: "Employment", path: "/employment" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Scheme Finder</h1>
              <p className="text-xs text-muted-foreground">National Portal</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {categories.map((category) => (
                        <NavigationMenuLink key={category.path} asChild>
                          <Link
                            to={category.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore {category.name.toLowerCase()} schemes and benefits
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/find-schemes" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/find-schemes' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Find Schemes
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:bg-gradient-primary/90">
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};