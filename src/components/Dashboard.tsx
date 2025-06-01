
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Dashboard() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Productivity Insights Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize your productivity patterns and optimize your workflow with AI-driven insights
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Time Tracking Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-700">Today's Focus Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">5h 32m</div>
                <div className="text-sm text-gray-500">+23% from yesterday</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </CardContent>
            </Card>

            {/* Tasks Completed */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-700">Tasks Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600 mb-2">12/15</div>
                <div className="text-sm text-gray-500">3 remaining</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div className="bg-amber-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </CardContent>
            </Card>

            {/* Flow State */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-700">Flow State Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-700 mb-2">2h 18m</div>
                <div className="text-sm text-gray-500">Peak: 10:30-12:48</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div className="bg-blue-700 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Chart Mockup */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-700">Weekly Productivity Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg flex items-end justify-between p-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="flex flex-col items-center">
                    <div 
                      className={`w-8 rounded-t ${index % 2 === 0 ? 'bg-blue-500' : 'bg-amber-500'} mb-2`}
                      style={{height: `${Math.random() * 120 + 40}px`}}
                    ></div>
                    <span className="text-sm text-gray-600">{day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
