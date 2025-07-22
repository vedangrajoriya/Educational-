import { Search } from 'lucide-react';

function SkillAnalysis() {
  const courses = [
    {
      title: "Machine Learning",
      description: "Learn the fundamentals and advanced techniques of machine learning, from data preprocessing to building and deploying predictive models.",
      icon: "/ML.jpg"  // Replaced with ML.jpg
    },
    {
      title: "Data Analyst",
      description: "Master the skills of data analysis, including data cleaning, visualization, and statistical analysis, to make data-driven decisions and insights.",
      icon: "/DS.jpg"  // Replaced with DS.jpg
    },
    {
      title: "Cyber Security",
      description: "Gain essential knowledge and practical skills in protecting systems, networks, and data from cyber threats through techniques in ethical hacking, encryption, and threat analysis.",
      icon: "/CS.png"  // Replaced with CS.jpg
    }
  ];

  return (
    <div className="min-h-screen relative bg-gray-50">
      {/* Background Image with 50% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/SA.jpg)', // Your background image
          opacity: 0.5, // Set 50% transparency
        }}
      ></div>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 py-6 z-10 bg-white bg-opacity-50 rounded-lg shadow-lg">
        {/* User Profile Section */}

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="bg-white bg-opacity-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Preferred Domains</h2>
                <p className="text-gray-600">Skill Analysis</p>
              </div>
              <div className="mt-4 md:mt-0 relative">
                <input
                  type="text"
                  placeholder="Search Domains"
                  className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Course Cards */}
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={course.icon}  // Updated icon path
                      alt={course.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                      <button className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                        Check Progress
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="px-6 py-2 text-gray-700 border rounded-md hover:bg-gray-50 transition-colors">
                Explore More Courses
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SkillAnalysis;
