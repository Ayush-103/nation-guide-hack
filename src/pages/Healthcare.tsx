import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, Calendar } from "lucide-react";

const healthcareSchemes = [
  {
    name: "Ayushman Bharat",
    description: "Health insurance coverage up to ₹5 lakh per family per year",
    eligibility: "BPL families, SECC database beneficiaries",
    benefits: "Free treatment, cashless facility, pre-existing disease coverage",
    status: "Active"
  },
  {
    name: "Pradhan Mantri Suraksha Bima Yojana",
    description: "Accident insurance scheme providing ₹2 lakh coverage",
    eligibility: "Age 18-70 years, bank account holders",
    benefits: "Accidental death/disability coverage, low premium ₹12/year",
    status: "Active"
  },
  {
    name: "Janani Suraksha Yojana",
    description: "Safe motherhood intervention scheme",
    eligibility: "Pregnant women from BPL families",
    benefits: "Cash assistance for institutional delivery, healthcare support",
    status: "Active"
  },
  {
    name: "Rashtriya Swasthya Bima Yojana",
    description: "Health insurance for unorganized sector workers",
    eligibility: "BPL families, unorganized workers",
    benefits: "₹30,000 insurance cover, pre-existing disease coverage",
    status: "Active"
  }
];

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-50 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Healthcare Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare schemes providing medical insurance, health checkups, 
              maternal care, and wellness programs for all citizens.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Active Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">50Cr+</div>
              <div className="text-sm text-muted-foreground">Beneficiaries</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Calendar className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {healthcareSchemes.map((scheme, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-card-foreground">{scheme.name}</CardTitle>
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      {scheme.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {scheme.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Eligibility:</h4>
                      <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Benefits:</h4>
                      <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;