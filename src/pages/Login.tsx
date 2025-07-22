import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sample credentials check (you can replace this with your actual authentication logic)
    if (username === 'admin' && password === 'password123') {
      // If credentials are correct, navigate to the home page
      navigate('/home');
    } else {
      // You can add error handling here (like displaying an error message)
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Login Section */}
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-8 text-center md:text-left">Log in</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="w-full md:w-1/2 bg-emerald-600 text-white p-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-4xl font-bold mb-4">NEW HERE?</h2>
          <p className="mb-8 text-lg">
            Sign up and discover a great amount of new opportunities!
          </p>
          <button
            className="bg-transparent border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-emerald-600 transition-colors duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
