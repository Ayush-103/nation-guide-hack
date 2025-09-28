import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EligibilityQuiz } from "@/components/EligibilityQuiz";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp } from "lucide-react";

const FindSchemes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Perfect Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer a few quick questions to get personalized government scheme recommendations 
              tailored to your profile and needs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Filter className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">5</div>
              <div className="text-sm text-muted-foreground">Quick Questions</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Available Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Search className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">2min</div>
              <div className="text-sm text-muted-foreground">Average Time</div>
            </div>
          </div>

          {/* Eligibility Quiz */}
          <EligibilityQuiz />

          {/* Popular Searches */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Popular Scheme Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Healthcare", count: 15, color: "bg-red-100 text-red-700 dark:bg-red-950/20 dark:text-red-400" },
                { name: "Education", count: 12, color: "bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400" },
                { name: "Agriculture", count: 14, color: "bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400" },
                { name: "Women Empowerment", count: 18, color: "bg-pink-100 text-pink-700 dark:bg-pink-950/20 dark:text-pink-400" },
                { name: "Business & Startup", count: 8, color: "bg-purple-100 text-purple-700 dark:bg-purple-950/20 dark:text-purple-400" },
                { name: "Employment", count: 10, color: "bg-orange-100 text-orange-700 dark:bg-orange-950/20 dark:text-orange-400" }
              ].map((category, index) => (
                <Card key={index} className="bg-card border border-border hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                      <Badge className={category.color}>
                        {category.count} schemes
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindSchemes;