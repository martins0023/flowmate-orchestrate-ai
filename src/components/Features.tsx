
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Smart Task Aggregator",
    description: "Ingests tasks from email, chat (Slack, Teams), and project management tools into a unified to-do list",
    color: "bg-blue-500",
    delay: "delay-100"
  },
  {
    title: "Dynamic Time Blocking", 
    description: "AI schedules work blocks based on task urgency, user energy patterns, and meeting calendars",
    color: "bg-amber-500",
    delay: "delay-200"
  },
  {
    title: "Context-Switch Automations",
    description: "Automatically opens relevant documents/apps, mutes notifications, and adjusts system settings",
    color: "bg-blue-600",
    delay: "delay-300"
  },
  {
    title: "Routine Automator",
    description: "Scripts repetitive actions with a no-code recorder and scheduler for maximum efficiency",
    color: "bg-amber-600",
    delay: "delay-400"
  },
  {
    title: "Productivity Insights",
    description: "Visualizes time spent per project, context-switch frequency, and flow state durations",
    color: "bg-blue-700",
    delay: "delay-500"
  },
  {
    title: "AI-Powered Optimization",
    description: "Machine learning models predict optimal work intervals and suggest productivity improvements",
    color: "bg-amber-700",
    delay: "delay-600"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Key Features & Functionality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize focus and efficiency with AI-powered workflow orchestration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-500 border-0 shadow-lg animate-fade-in ${feature.delay} group hover:scale-105`}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${feature.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
