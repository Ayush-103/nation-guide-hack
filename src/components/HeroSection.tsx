import { CheckCircle, Users, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Government Schemes{" "}
                <span className="gradient-text">Made for You</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Discover Benefits Across All States
              </p>
              <p className="text-base text-muted-foreground max-w-2xl">
                From North to South - find government schemes available in your state. 
                Our smart matching system connects you with the right schemes in minutes.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Personalized Matching</h3>
                  <p className="text-sm text-muted-foreground">Get schemes tailored to your profile</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Verified Information</h3>
                  <p className="text-sm text-muted-foreground">All data sourced from official sources</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Save Time</h3>
                  <p className="text-sm text-muted-foreground">No more searching through hundreds of schemes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Direct Application</h3>
                  <p className="text-sm text-muted-foreground">Apply directly on official government websites</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/find-schemes">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all group"
                >
                  Find My Schemes
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Statistics */}
          <div className="space-y-8">
            {/* Statistics Card */}
            <div className="bg-card border border-border rounded-2xl p-8 card-hover shadow-lg">
              <h2 className="text-xl font-semibold text-card-foreground mb-6">Platform Statistics</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">60+</div>
                  <div className="text-sm text-muted-foreground">Government Schemes</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text-secondary">28</div>
                  <div className="text-sm text-muted-foreground">States Covered</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-success">100%</div>
                  <div className="text-sm text-muted-foreground">Free Service</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="flex items-start space-x-3 bg-accent/50 rounded-lg p-4">
              <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="font-medium text-accent-foreground">Your Privacy Matters</h4>
                <p className="text-sm text-accent-foreground/80">
                  We don't store your personal information. All processing happens locally in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};