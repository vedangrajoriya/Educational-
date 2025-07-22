import { BarChart3, TrendingUp, LineChart, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[rgba(211,211,211,1)] min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Skills Dashboard</h1>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {/* Skill Progress Card */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold">Skill Progress</h2>
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm sm:text-base">
                  <span>Data Analysis</span>
                  <span>60%</span>
                </div>
                <div className="h-1.5 sm:h-2 bg-gray-200 rounded">
                  <div className="h-full w-3/5 bg-blue-500 rounded"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm sm:text-base">
                  <span>Machine Learning</span>
                  <span>40%</span>
                </div>
                <div className="h-1.5 sm:h-2 bg-gray-200 rounded">
                  <div className="h-full w-2/5 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Market Match Card */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold">Job Market Match</h2>
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-green-700 mb-1 sm:mb-2">0%</div>
              <p className="text-sm sm:text-base text-blue-500">Match with current market demands</p>
            </div>
          </div>

          {/* Learning Path Card */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold">Learning Path</h2>
              <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
            </div>
          </div>
        </div>

        {/* Skill Gap Analysis */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm mb-4 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Skill Gap Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">Current Skills</h3>
              <div className="space-y-2">
                {['Python Programming', 'Machine Learning', 'Databases'].map((skill) => (
                  <div key={skill} className="bg-gray-100 p-2 sm:p-3 rounded text-sm sm:text-base">{skill}</div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4">Recommended</h3>
              <div className="space-y-2">
                {['DevOps', 'Java/Advanced Java', 'Data Structures'].map((skill) => (
                  <div key={skill} className="bg-gray-100 p-2 sm:p-3 rounded text-sm sm:text-base">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="bg-white rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {/* Job Market Insights */}
            <div className="bg-[rgba(190,190,190,0.41)] rounded-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg font-semibold">Job Market Insights</h2>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-green-600">
                <li>Machine Learning</li>
                <li>Cloud Security Expert</li>
                <li>Cloud Computing</li>
                <li>Data Engineering</li>
              </ul>
            </div>

            {/* Trending */}
            <div className="bg-[rgba(190,190,190,0.41)] rounded-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg font-semibold">Trending</h2>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-green-600">
                <li>Cloud Security Engineer</li>
                <li>AI Solution Insights</li>
              </ul>
            </div>

            {/* Salary Insights */}
            <div className="bg-[rgba(190,190,190,0.41)] rounded-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Salary Insights</h2>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-green-600">
                <li>AI-ML (70K - 5L akhs)</li>
                <li>Cloud (20K - 1.L akhs)</li>
                <li>Data Analyst (1 - 5 L akhs)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
