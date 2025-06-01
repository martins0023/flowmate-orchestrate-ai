
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-600/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 bg-clip-text text-transparent leading-tight">
              FlowMate
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Intelligent Personal Workflow Orchestrator
            </p>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Seamlessly transform tasks and routines into optimized, context-aware workflows
            </p>
          </div>

          {/* Task Flow Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto my-12 animate-fade-in delay-300">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded animate-pulse"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Aggregate Tasks</h3>
              <p className="text-sm text-gray-600">From email, Slack, Asana, Trello</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 md:transform md:translate-y-4">
              <div className="w-12 h-12 bg-amber-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded animate-pulse delay-200"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">AI Scheduling</h3>
              <p className="text-sm text-gray-600">Dynamic time blocking & optimization</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded animate-pulse delay-400"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Automate Flow</h3>
              <p className="text-sm text-gray-600">Context switching & routine automation</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg">
              Watch Demo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
