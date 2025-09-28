import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizData {
  age: string;
  gender: string;
  state: string;
  annualIncome: string;
  profession: string;
}

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi"
];

const professions = [
  "Student", "Farmer", "Business Owner", "Self-Employed", "Employee", "Unemployed",
  "Healthcare Worker", "Teacher", "Technology Professional", "Other"
];

export const EligibilityQuiz = () => {
  const { toast } = useToast();
  const [quizData, setQuizData] = useState<QuizData>({
    age: "",
    gender: "",
    state: "",
    annualIncome: "",
    profession: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!quizData.age || !quizData.gender || !quizData.state || !quizData.annualIncome || !quizData.profession) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields to find your matching schemes.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Schemes Found!",
      description: `We found 12 matching schemes for ${quizData.profession.toLowerCase()} in ${quizData.state}. Check your results below.`,
    });
    
    setIsLoading(false);
  };

  const updateQuizData = (field: keyof QuizData, value: string) => {
    setQuizData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Schemes
            </h2>
            <p className="text-lg text-muted-foreground">
              Answer 5 quick questions to get personalized scheme recommendations
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-card">
            <CardHeader className="text-center bg-gradient-primary rounded-t-lg">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary-foreground">Find Your Schemes</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Answer 5 quick questions
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Age */}
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium text-card-foreground">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={quizData.age}
                    onChange={(e) => updateQuizData("age", e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-card-foreground">Gender *</Label>
                  <Select value={quizData.gender} onValueChange={(value) => updateQuizData("gender", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* State */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-card-foreground">State *</Label>
                  <Select value={quizData.state} onValueChange={(value) => updateQuizData("state", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Annual Income */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-card-foreground">Annual Income *</Label>
                  <Select value={quizData.annualIncome} onValueChange={(value) => updateQuizData("annualIncome", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select annual income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-1-lakh">Below ₹1 Lakh</SelectItem>
                      <SelectItem value="below-2.5-lakh">Below ₹2.5 Lakh</SelectItem>
                      <SelectItem value="below-5-lakh">Below ₹5 Lakh</SelectItem>
                      <SelectItem value="above-5-lakh">Above ₹5 Lakh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Profession */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-card-foreground">Profession *</Label>
                  <Select value={quizData.profession} onValueChange={(value) => updateQuizData("profession", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your profession" />
                    </SelectTrigger>
                    <SelectContent>
                      {professions.map((profession) => (
                        <SelectItem key={profession} value={profession.toLowerCase().replace(/\s+/g, '-')}>
                          {profession}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Finding Your Schemes...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Find My Schemes</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Privacy Notice */}
              <div className="mt-6 flex items-start space-x-3 bg-accent/50 rounded-lg p-4">
                <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-medium text-accent-foreground">Your Privacy Matters</h4>
                  <p className="text-sm text-accent-foreground/80">
                    We don't store your personal information. All processing happens locally in your browser.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};