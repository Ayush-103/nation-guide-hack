import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Search, Shield, RotateCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizData {
  age: string;
  gender: string;
  state: string;
  annualIncome: string;
  profession: string;
}

interface Scheme {
  id: string;
  name: string;
  type: string;
  description: string;
  apply_link: string;
  state: string;
  area: string;
  age_group: string;
  income_bracket: string;
  occupation: string;
  gender: string;
  social_category: string;
}

export const EligibilityQuiz = () => {
  const { toast } = useToast();
  const [quizData, setQuizData] = useState<QuizData>({
    age: "",
    gender: "",
    state: "",
    annualIncome: "",
    profession: "",
  });
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [results, setResults] = useState<Scheme[]>([]);
  const [availableOptions, setAvailableOptions] = useState({
    gender: [] as string[],
    state: [] as string[],
    income_bracket: [] as string[],
    occupation: [] as string[],
  });

  const [allOptions, setAllOptions] = useState<typeof availableOptions>({
    gender: [],
    state: [],
    income_bracket: [],
    occupation: [],
  });

  useEffect(() => {
    fetch("/indian_schemes_comprehensive.csv")
      .then(res => res.text())
      .then(text => {
        const parsed = Papa.parse<Scheme>(text, { header: true, skipEmptyLines: true });
        const data = parsed.data;
        setSchemes(data);

        const initialOptions = {
          gender: Array.from(new Set(data.map(d => d.gender).filter(Boolean))),
          state: Array.from(new Set(data.map(d => d.state).filter(Boolean))),
          income_bracket: Array.from(new Set(data.map(d => d.income_bracket).filter(Boolean))),
          occupation: Array.from(new Set(data.map(d => d.occupation).filter(Boolean))),
        };

        setAvailableOptions(initialOptions);
        setAllOptions(initialOptions);
      });
  }, []);

  const updateQuizData = (field: keyof QuizData, value: string) => {
    // Age validation: no negative
    if (field === "age" && value && parseInt(value, 10) < 0) return;

    setQuizData(prev => ({ ...prev, [field]: value }));

    // Cascade filtering
    setTimeout(() => {
      const age = parseInt(field === "age" ? value : quizData.age, 10);
      const filtered = schemes.filter(s => {
        const normalize = (v: string) => (v || "").toLowerCase().trim();

        // age match
        let ageMatch = true;
        if (!isNaN(age) && s.age_group && normalize(s.age_group) !== "any") {
          const parts = s.age_group.split("-");
          if (parts.length === 2) {
            const [min, max] = parts.map(Number);
            if (!isNaN(min) && !isNaN(max)) ageMatch = age >= min && age <= max;
          }
        }

        const genderMatch = !quizData.gender || normalize(s.gender) === normalize(quizData.gender) || normalize(s.gender) === "any";
        const stateMatch = !quizData.state || normalize(s.state) === normalize(quizData.state) || normalize(s.state) === "all";
        const incomeMatch = !quizData.annualIncome || normalize(s.income_bracket) === normalize(quizData.annualIncome) || normalize(s.income_bracket) === "any";
        const professionMatch = !quizData.profession || normalize(s.occupation) === normalize(quizData.profession) || normalize(s.occupation) === "any";

        return ageMatch && genderMatch && stateMatch && incomeMatch && professionMatch;
      });

      setAvailableOptions({
        gender: Array.from(new Set(filtered.map(s => s.gender).filter(Boolean))),
        state: Array.from(new Set(filtered.map(s => s.state).filter(Boolean))),
        income_bracket: Array.from(new Set(filtered.map(s => s.income_bracket).filter(Boolean))),
        occupation: Array.from(new Set(filtered.map(s => s.occupation).filter(Boolean))),
      });
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(quizData.age, 10);

    const matched = schemes.filter(s => {
      const normalize = (val: string) => val?.toLowerCase().trim() || "";

      let ageMatch = true;
      if (!isNaN(age) && s.age_group && normalize(s.age_group) !== "any") {
        const parts = s.age_group.split("-");
        if (parts.length === 2) {
          const [min, max] = parts.map(Number);
          if (!isNaN(min) && !isNaN(max)) ageMatch = age >= min && age <= max;
        }
      }

      const genderMatch = !quizData.gender || normalize(s.gender) === normalize(quizData.gender) || normalize(s.gender) === "any";
      const stateMatch = !quizData.state || normalize(s.state) === normalize(quizData.state) || normalize(s.state) === "all";
      const incomeMatch = !quizData.annualIncome || normalize(s.income_bracket) === normalize(quizData.annualIncome) || normalize(s.income_bracket) === "any";
      const professionMatch = !quizData.profession || normalize(s.occupation) === normalize(quizData.profession) || normalize(s.occupation) === "any";

      return ageMatch && genderMatch && stateMatch && incomeMatch && professionMatch;
    });

    setResults(matched);
    toast({ title: "Schemes Found!", description: `We found ${matched.length} matching schemes.` });
  };

  const resetFilters = () => {
    setQuizData({ age: "", gender: "", state: "", annualIncome: "", profession: "" });
    setAvailableOptions(allOptions);
    setResults([]);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Find Your Schemes</h2>
            <p className="text-lg text-muted-foreground">Provide your details to get personalized scheme recommendations</p>
          </div>

          <Card className="shadow-xl border-0 bg-card">
            <CardHeader className="text-center bg-gradient-primary rounded-t-lg">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary-foreground">Find Your Schemes</CardTitle>
              <CardDescription className="text-primary-foreground/80">Provide your details</CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Age */}
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={quizData.age}
                    onChange={e => {
                      const val = e.target.value;
                      if (!val || parseInt(val, 10) >= 0) {
                        updateQuizData("age", val);
                      }
                    }}
                    className="h-12"
                  />
                </div>

                {/* Gender */}
                {quizData.age && (
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Select value={quizData.gender} onValueChange={v => updateQuizData("gender", v)}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent>
                        {availableOptions.gender.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* State */}
                {quizData.gender && (
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Select value={quizData.state} onValueChange={v => updateQuizData("state", v)}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select state" /></SelectTrigger>
                      <SelectContent>
                        {availableOptions.state.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Income */}
                {quizData.state && (
                  <div className="space-y-2">
                    <Label>Annual Income</Label>
                    <Select value={quizData.annualIncome} onValueChange={v => updateQuizData("annualIncome", v)}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select annual income" /></SelectTrigger>
                      <SelectContent>
                        {availableOptions.income_bracket.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Profession */}
                {quizData.annualIncome && (
                  <div className="space-y-2">
                    <Label>Profession</Label>
                    <Select value={quizData.profession} onValueChange={v => updateQuizData("profession", v)}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select profession" /></SelectTrigger>
                      <SelectContent>
                        {availableOptions.occupation.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button type="submit" className="flex-1 h-12 bg-gradient-primary text-primary-foreground font-semibold text-lg">
                    Find Schemes <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button type="button" variant="outline" onClick={resetFilters} className="flex-1 h-12 flex items-center justify-center space-x-2">
                    <RotateCw className="w-5 h-5" /> <span>Reset Filters</span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {results.length > 0 && (
            <div className="mt-10 space-y-4">
              {results.map(s => (
                <Card key={s.id} className="p-4">
                  <CardTitle>{s.name}</CardTitle>
                  <CardDescription>{s.type}</CardDescription>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                  <a href={s.apply_link} target="_blank" rel="noopener noreferrer" className="text-primary underline mt-2 inline-block">Apply Here</a>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
