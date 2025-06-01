
export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect Your Tools",
      description: "Link your email, Slack, Teams, Asana, Trello, and calendar to aggregate all tasks in one place",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "AI Analyzes Patterns",
      description: "Machine learning models study your work habits, energy levels, and productivity patterns",
      color: "from-amber-500 to-amber-600"
    },
    {
      step: "03",
      title: "Smart Scheduling",
      description: "Dynamic time blocking optimizes your day based on task urgency and personal productivity cycles",
      color: "from-blue-600 to-blue-700"
    },
    {
      step: "04",
      title: "Automated Execution",
      description: "Context switching automations and routine scripts execute seamlessly in the background",
      color: "from-amber-600 to-amber-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your fragmented workflows into optimized, AI-driven productivity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 animate-fade-in delay-${(index + 1) * 200}`}>
              {/* Step Number */}
              <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 md:mb-0 md:mr-8 shadow-lg`}>
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 mt-24 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
