import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, Tractor, CloudRain, Sprout } from "lucide-react";

const agricultureSchemes = [
  {
    name: "PM-KISAN",
    description: "Direct income support to farmers with ₹6,000 per year",
    eligibility: "Small and marginal farmers with landholding up to 2 hectares",
    benefits: "₹2,000 per installment, 3 times a year, direct bank transfer",
    status: "Active"
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance scheme protecting farmers from crop loss",
    eligibility: "All farmers including sharecroppers and tenant farmers",
    benefits: "Insurance cover, premium subsidy, quick claim settlement",
    status: "Active"
  },
  {
    name: "Kisan Credit Card",
    description: "Easy access to credit facilities for farmers",
    eligibility: "Farmers with ownership/cultivation rights",
    benefits: "Low interest rates, flexible repayment, insurance coverage",
    status: "Active"
  },
  {
    name: "PM Kisan Maan-Dhan Yojana",
    description: "Pension scheme providing social security to farmers",
    eligibility: "Small and marginal farmers aged 18-40 years",
    benefits: "₹3,000 monthly pension after 60 years, life insurance",
    status: "Active"
  }
];

const Agriculture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-50 dark:bg-green-950/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wheat className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Agriculture Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for farmers including crop insurance, subsidies, 
              farming equipment, and income support programs.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Tractor className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">14+</div>
              <div className="text-sm text-muted-foreground">Active Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Sprout className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">12Cr+</div>
              <div className="text-sm text-muted-foreground">Farmers Benefited</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <CloudRain className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">₹2L Cr</div>
              <div className="text-sm text-muted-foreground">Total Investment</div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {agricultureSchemes.map((scheme, index) => (
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

export default Agriculture;