import { useState } from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-light silver px-3 sm:px-6 py-3 sm:py-4 shadow-sm relative">
      <div className=" max-w-7xl mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-4 md:space-x-8">
          <Link
            to={"/"}
            className={`text-sm md:text-base font-medium ${
              location.pathname === "/"
                ? "text-blue-500"
                : "hover:bg-black hover:text-white rounded"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/skill-analysis"}
            className={`text-sm md:text-base font-medium ${
              location.pathname === "/skill-analysis"
                ? "text-blue-500"
                : "hover:bg-black hover:text-white rounded"
            }`}
          >
            Skills Analysis
          </Link>
          <Link
            to={"/learning-path"}
            className={`text-sm md:text-base font-medium ${
              location.pathname === "/learning-path"
                ? "text-blue-500"
                : "hover:bg-black hover:text-white rounded"
            }`}
          >
            Learning Paths
          </Link>
          <Link
            to={"/career"}
            className={`text-sm md:text-base font-medium ${
              location.pathname === "/career"
                ? "text-blue-500"
                : "hover:bg-black hover:text-white rounded"
            }`}
          >
            Career
          </Link>
          <Link
            to={"/jobs"}
            className={`text-sm md:text-base font-medium ${
              location.pathname === "/jobs"
                ? "text-blue-500"
                : "hover:bg-black hover:text-white  rounded"
            }`}
          >
            Job Market
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden text-lg font-semibold">SkillMap</div>
        <button
          className="sm:hidden p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <div className="w-5 h-0.5 bg-black mb-1"></div>
              <div className="w-5 h-0.5 bg-black mb-1"></div>
              <div className="w-5 h-0.5 bg-black"></div>
            </>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="absolute right-0 top-0 h-screen w-64 bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col pt-16 px-4">
                <Link
                  to="/"
                  className="py-3 text-lg font-medium border-b border-gray-200 hover:bg-black hover:text-white px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/skill-analysis"
                  className="py-3 text-lg font-medium border-b border-gray-200 hover:bg-black hover:text-white px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills Analysis
                </Link>
                <Link
                  to="/learning-path"
                  className="py-3 text-lg font-medium border-b border-gray-200 hover:bg-black hover:text-white px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learning Paths
                </Link>
                <Link
                  to="/career"
                  className="py-3 text-lg font-medium border-b border-gray-200 hover:bg-black hover:text-white px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Career
                </Link>
                <Link
                  to="/jobs"
                  className="py-3 text-lg font-medium border-b border-gray-200 hover:bg-black hover:text-white px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Job Market
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
