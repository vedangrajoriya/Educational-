import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function LearningPath() {
  return (
    <div className="min-h-screen relative bg-gray-50">
      {/* Background Image with 50% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/LPT.jpeg)', // Your background image
          opacity: 0.5, // Set 50% transparency
        }}
      ></div>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10 ">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learning Paths for Future<br />Professionals
          </h1>
        </div>

        {/* Learning Path Cards */}
        <div className="space-y-8">
          {/* Machine Learning Card */}
          <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 md:p-8 transition-transform hover:scale-[1.02]">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                Master Machine Learning Step by Step
              </h2>
              <p className="text-gray-600 mb-6">
                A comprehensive roadmap to guide you from basics to advanced ML concepts. Track your progress,
                build projects, and join a community of learners.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                <Link to={"/learning-path/roadmap"}>Learning Path</Link>
              </button>
            </div>
          </div>

          {/* Data Analyst Card */}
          <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 md:p-8 transition-transform hover:scale-[1.02]">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                Become a Data Analyst Expert Through a Structured Learning Path
              </h2>
              <p className="text-gray-600 mb-6">
                The Ultimate Stepwise Approach to Data Analyst Mastery
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                <Link to={"/learning-path/roadmap"}>Learning Path</Link>
              </button>
            </div>
          </div>

          {/* Cyber Security Card */}
          <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 md:p-8 transition-transform hover:scale-[1.02]">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                Master Cyber Security in Simple, Progressive Steps
              </h2>
              <p className="text-gray-600 mb-6">
                "Master Cyber Security in Simple, Progressive Steps" helps you build essential skills, from basics to
                advanced, to confidently tackle real-world security challenges.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                <Link to={"/learning-path/roadmap"}>Learning Path</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Upgrade Skills Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium">
            <ChevronUp className="w-5 h-5 mr-2" />
            Upgrade Your Skills
          </button>
        </div>
      </main>
    </div>
  );
}

export default LearningPath;
