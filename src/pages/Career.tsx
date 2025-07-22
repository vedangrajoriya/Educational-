// import { useState } from 'react';
import { CheckCircle, Calendar, Bookmark, MessageCircle } from 'lucide-react';

function Career() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-purple-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Bridge the Gap Between Academia and Industry
              </h1>
              <p className="text-lg text-gray-600">
                Get industry ready guaranteed, internships, and hands-on training with industry leads.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors">
                  FiCareer
                </button>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Explore Trainings
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Industry Ready Guarantees */}
          <div className="bg-purple-100 rounded-xl p-6 space-y-4">
            <div className="text-purple-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Industry ready Guarantees</h3>
            <p className="text-gray-600">
              Empowering Your Career with Job Guarantees, Internships, and Hands-On Industry Experience
            </p>
          </div>

          {/* Virtual Labs */}
          <div className="bg-purple-100 rounded-xl p-6 space-y-4">
            <div className="text-purple-600">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Virtual Labs</h3>
            <p className="text-gray-600">
              Gain Practical Experience with Interactive Virtual Labs Simulating Real-World Industry Projects
            </p>
          </div>

          {/* Quality Knowledge */}
          <div className="bg-purple-100 rounded-xl p-6 space-y-4">
            <div className="text-purple-600">
              <Bookmark className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Quality Knowledge</h3>
            <p className="text-gray-600">
              Access Industry-Driven, High-Quality Training and Resources to Sharpen Your Skills
            </p>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Our Community
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Whatsapp</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </button>
            </div>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Community" 
                className="rounded-lg shadow-xl mx-auto max-w-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;