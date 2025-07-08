// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-10">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-700">TeamX | PunitJakhar</h1>
        <nav className="mt-4 flex justify-center space-x-4 text-sm md:text-base text-blue-600 font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#courses" className="hover:underline">Courses</a>
          <a href="#community" className="hover:underline">Community</a>
          <a href="#mentorship" className="hover:underline">Mentorship</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p className="text-gray-700 mb-6">
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://t.me/teamxcommunity" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Join Telegram</a>
          <a href="#courses" className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition">Start Learning</a>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center my-6">
          <img
            src="/punit.jpg.jpeg"
            alt="Punit Jakhar"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </section>

      {/* Mentor Intro */}
      <section className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Meet Your Mentor</h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset, structure, and clarity — not just strategies.
        </p>
      </section>

      {/* Course Structure */}
      <section id="courses" className="max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-4">What You’ll Learn</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-indigo-700">Beginner</h4>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Candlestick Basics</li>
            <li>Chart Types</li>
            <li>Trade Types</li>
            <li>Risk Management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-indigo-700">Intermediate</h4>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Technical Indicators</li>
            <li>Entry/Exit Rules</li>
            <li>Chart Patterns</li>
            <li>Risk-Reward Concepts</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-indigo-700">Advanced</h4>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Trade Psychology</li>
            <li>Time Management</li>
            <li>Money Management</li>
            <li>Live Trading Strategies</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TeamX | Punit Jakhar. All rights reserved.
      </footer>
    </div>
  );
}
