
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with basic workflow optimization",
      features: [
        "Core task aggregation",
        "Basic scheduling",
        "Up to 3 tool integrations",
        "Standard productivity insights",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "border-gray-300"
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Advanced features for serious productivity optimization",
      features: [
        "Unlimited integrations",
        "AI-powered automation scripts",
        "Advanced productivity analytics",
        "Custom workflow templates",
        "Priority support",
        "Team sharing features"
      ],
      cta: "Start Pro Trial",
      popular: true,
      color: "border-blue-500 ring-2 ring-blue-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete solution for teams and organizations",
      features: [
        "Everything in Pro",
        "Single sign-on (SSO)",
        "Admin dashboards",
        "Onboarding services",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as your productivity optimization needs grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'transform scale-105' : ''} hover:shadow-xl transition-all duration-300 animate-fade-in delay-${(index + 1) * 200}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <CardDescription className="mt-3 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
