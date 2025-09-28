import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Briefcase, Users, Target } from "lucide-react";

const employmentSchemes = [
  {
    name: "MGNREGA",
    description: "Guaranteed 100 days of wage employment in rural areas",
    eligibility: "Adult members of rural households",
    benefits: "Guaranteed employment, minimum wage, social security",
    status: "Active"
  },
  {
    name: "Pradhan Mantri Rojgar Protsahan Yojana",
    description: "Employment promotion scheme for formal sector jobs",
    eligibility: "New employees with salary up to ₹15,000",
    benefits: "Government contribution to EPF, job creation incentives",
    status: "Active"
  },
  {
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    description: "Skill development and placement program for rural youth",
    eligibility: "Rural poor youth aged 15-35 years",
    benefits: "Free skill training, placement assistance, post-placement support",
    status: "Active"
  },
  {
    name: "Atmanirbhar Bharat Rozgar Yojana",
    description: "Employment incentive scheme for formal sector",
    eligibility: "New employees and establishments registered with EPFO",
    benefits: "Government subsidy on provident fund contributions",
    status: "Active"
  }
];

const Employment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-50 dark:bg-orange-950/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="w-8 h-8 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Employment Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Job guarantee programs, skill training, unemployment benefits, 
              and employment generation initiatives for all citizens.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Active Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">15Cr+</div>
              <div className="text-sm text-muted-foreground">Jobs Created</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Target className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">100</div>
              <div className="text-sm text-muted-foreground">Days Guaranteed</div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {employmentSchemes.map((scheme, index) => (
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

export default Employment;