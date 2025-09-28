import { FileText, Target, ExternalLink } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Fill out the eligibility quiz",
    description: "Answer 5 simple questions about your age, location, income, and profession to help us understand your profile.",
    icon: FileText,
    color: "text-primary"
  },
  {
    number: "2", 
    title: "Get personalized scheme matches",
    description: "Our smart matching algorithm analyzes your profile and finds government schemes you're eligible for.",
    icon: Target,
    color: "text-secondary"
  },
  {
    number: "3",
    title: "Apply directly on official websites", 
    description: "Click through to official government portals to complete your applications with verified, up-to-date information.",
    icon: ExternalLink,
    color: "text-success"
  }
];

const features = [
  "No Registration Required",
  "100% Free Service", 
  "Privacy Protected"
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get matched with eligible government schemes in three simple steps. 
            It's fast, free, and completely secure.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-card border border-border rounded-2xl p-8 card-hover text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted-dark rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 text-primary">
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Why Choose Our Platform?
            </h3>
            <p className="text-muted-foreground">
              Built with trust, transparency, and user privacy in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="text-center p-6 bg-muted/50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-card-foreground text-lg">
                  {feature}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};