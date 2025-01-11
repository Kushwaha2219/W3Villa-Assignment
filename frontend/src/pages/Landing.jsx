import React from "react";
import { Link } from "react-router-dom";

const PagingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 py-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to TodoEase!</h1>
        <p className="text-lg text-gray-200">
          Simplify your daily tasks and boost productivity.
        </p>
        <Link
          to="/signup"
          className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Get Started for Free
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 lg:px-32 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose TodoEase?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Intuitive Interface</h3>
            <p className="text-gray-300">
              Our simple and clean design makes managing tasks effortless and enjoyable.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Real-Time Updates</h3>
            <p className="text-gray-300">
              Stay on top of your tasks with real-time updates across devices.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Customizable Todo Lists</h3>
            <p className="text-gray-300">
              Organize your work, personal goals, and projects with custom lists.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Task Prioritization</h3>
            <p className="text-gray-300">
              Assign priorities to tasks to focus on what matters most.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Progress Tracking</h3>
            <p className="text-gray-300">
              Track task completion and stay motivated with visual progress indicators.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Collaborative Features</h3>
            <p className="text-gray-300">
              Share your todo lists with teammates and work together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Productivity Journey Today!</h2>
        <p className="text-lg text-gray-200 mb-6">
          Join thousands of users who trust TodoEase to stay organized and productive.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Create Your Free Account
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} TodoEase. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PagingPage;
