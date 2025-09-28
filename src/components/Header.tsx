import { Search, Shield, Award, Clock } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Scheme Finder</h1>
              <p className="text-xs text-muted-foreground">National Scheme Portal</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-success font-medium">Trusted & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium">500+ Schemes</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Always Free</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};