import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Users, CreditCard } from "lucide-react";

const businessSchemes = [
  {
    name: "Startup India",
    description: "Initiative to promote startup culture and build innovation ecosystem",
    eligibility: "Innovative startups incorporated as private limited company",
    benefits: "Tax exemptions, patent fast-track, funding support, mentorship",
    status: "Active"
  },
  {
    name: "MUDRA Yojana",
    description: "Micro finance scheme for small businesses and entrepreneurs",
    eligibility: "Non-corporate, non-farm small/micro enterprises",
    benefits: "Loans up to ₹10 lakh, no collateral, flexible repayment",
    status: "Active"
  },
  {
    name: "Credit Guarantee Scheme",
    description: "Collateral-free credit to micro and small enterprises",
    eligibility: "Micro and small enterprises, service enterprises",
    benefits: "Credit guarantee cover, reduced interest rates",
    status: "Active"
  },
  {
    name: "Stand Up India",
    description: "Bank loans between ₹10 lakh to ₹1 crore",
    eligibility: "Women entrepreneurs, SC/ST entrepreneurs",
    benefits: "Greenfield enterprise financing, handholding support",
    status: "Active"
  }
];

const Business = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-50 dark:bg-purple-950/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-purple-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Business & Startup Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Support for entrepreneurs, startups, and small businesses including 
              funding opportunities, MSME support, and business loans.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Active Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">50L+</div>
              <div className="text-sm text-muted-foreground">Entrepreneurs Supported</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <CreditCard className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">₹5L Cr</div>
              <div className="text-sm text-muted-foreground">Credit Disbursed</div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {businessSchemes.map((scheme, index) => (
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

export default Business;