import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const educationSchemes = [
  {
    name: "PM-YASASVI Scholarship",
    description: "Pre-matric and post-matric scholarship for OBC students",
    eligibility: "OBC, EBC, DNT students, family income < ₹2.5 lakh",
    benefits: "₹75,000 to ₹1,25,000 per year, book allowance",
    status: "Active"
  },
  {
    name: "National Scholarship Portal",
    description: "Centralized platform for various scholarship schemes",
    eligibility: "Merit-based, need-based criteria vary by scheme",
    benefits: "Multiple scholarships, digital application process",
    status: "Active"
  },
  {
    name: "Skill India Digital Hub",
    description: "Free online courses and skill development programs",
    eligibility: "All citizens, especially youth and job seekers",
    benefits: "Free courses, certification, placement assistance",
    status: "Active"
  },
  {
    name: "Pradhan Mantri Kaushal Vikas Yojana",
    description: "Skill development and entrepreneurship training",
    eligibility: "Age 15-45 years, school/college dropouts",
    benefits: "Free training, ₹8,000 monetary reward, placement support",
    status: "Active"
  }
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Education Schemes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational scholarships, skill development programs, vocational training, 
              and learning opportunities for students and professionals.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Active Schemes</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">2Cr+</div>
              <div className="text-sm text-muted-foreground">Students Benefited</div>
            </div>
            <div className="text-center bg-card border border-border rounded-lg p-6">
              <Award className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Skill Courses</div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {educationSchemes.map((scheme, index) => (
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

export default Education;