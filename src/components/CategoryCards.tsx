import { 
  Heart, 
  GraduationCap, 
  Wheat, 
  Users, 
  Briefcase, 
  UserCheck,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Healthcare",
    count: "15+ schemes",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    description: "Medical insurance, health checkups, maternal care"
  },
  {
    title: "Education",
    count: "12+ schemes", 
    icon: GraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    description: "Scholarships, skill development, vocational training"
  },
  {
    title: "Agriculture",
    count: "14+ schemes",
    icon: Wheat,
    color: "text-green-500", 
    bgColor: "bg-green-50 dark:bg-green-950/20",
    description: "Crop insurance, subsidies, farming equipment"
  },
  {
    title: "Women",
    count: "18+ schemes",
    icon: Users,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20", 
    description: "Empowerment programs, safety, entrepreneurship"
  },
  {
    title: "Business",
    count: "8+ schemes",
    icon: Briefcase,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    description: "Startup funding, MSME support, business loans"
  },
  {
    title: "Employment",
    count: "10+ schemes",
    icon: UserCheck,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    description: "Job guarantee, skill training, unemployment benefits"
  }
];

export const CategoryCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore schemes organized by category. Each category contains verified government schemes 
            tailored to specific needs and demographics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-card border border-border rounded-2xl p-6 card-hover cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${category.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{category.count}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Explore schemes</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};