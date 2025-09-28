import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Briefcase, Shield } from "lucide-react";

const womenSchemes = [
  {
    name: "Beti Bachao Beti Padhao",
    description: "Campaign to address declining child sex ratio and empower girls",
    eligibility: "Girls from all socio-economic backgrounds",
    benefits: "Education support, awareness campaigns, skill development",
    status: "Active"
  },
  {
    name: "Pradhan Mantri Matru Vandana Yojana",
    description: "Maternity benefit scheme for pregnant and lactating mothers",
    eligibility: "Pregnant and lactating mothers (19+ years)",
    benefits: "₹5,000 cash benefit, nutrition support, healthcare",
    status: "Active"
  },
  {
    name: "Stand Up India",
    description: "Bank loans for women entrepreneurs",
    eligibility: "Women entrepreneurs, SC/ST entrepreneurs",
    benefits: "₹10 lakh to ₹1 crore loans, mentorship support",
    status: "Active"
  },
  {
    name: "UJJWALA Scheme",
    description: "Scheme for prevention of trafficking and rescue of women",
    eligibility: "Trafficked women and girls",
    benefits: "Rehabilitation, skill training, legal support",
    status: "Active"
  }
];

const Women = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-pink-50 dark:bg-pink-950/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-pink-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Women Empowerment Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs for women empowerment, safety, entrepreneurship, 
              maternal care, and skill development initiatives.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">18+</div>
              <div className="text-sm text-muted-foreground">Active Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">8Cr+</div>
              <div className="text-sm text-muted-foreground">Women Benefited</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">2L+</div>
              <div className="text-sm text-muted-foreground">Women Entrepreneurs</div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {womenSchemes.map((scheme, index) => (
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

export default Women;