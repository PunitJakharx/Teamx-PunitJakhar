export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="p-6 border-b shadow-md">
        <h1 className="text-3xl font-bold text-center">TeamX | PunitJakhar</h1>
        <nav className="flex justify-center gap-6 mt-4 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Mentorship</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Join Telegram
          </a>
          <a href="#" className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition">
            Start Learning
          </a>
        </div>

        {/* Mentor Image */}
        <img 
          src="/punit.jpg.jpeg" 
          alt="Punit Jakhar" 
          className="rounded-full w-28 h-28 mx-auto mb-4 border-2 border-indigo-500 object-cover shadow-md" 
        />

        {/* Mentor Intro */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Meet Your Mentor</h3>
          <p className="max-w-xl mx-auto text-gray-700">
            I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset, structure, and clarity — not just strategies.
          </p>
        </div>
      </section>

      {/* Learning Content */}
      <section className="px-6 py-10 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-8">What You’ll Learn</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Beginner */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Beginner</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Candlestick Basics</li>
              <li>Chart Types</li>
              <li>Trade Types</li>
              <li>Risk Management</li>
            </ul>
          </div>

          {/* Intermediate */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Intermediate</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Technical Indicators</li>
              <li>Entry/Exit Rules</li>
              <li>Chart Patterns</li>
              <li>Risk-Reward Concepts</li>
            </ul>
          </div>

          {/* Advanced */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Advanced</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Time & Trade Management</li>
              <li>Money Management</li>
              <li>Trading Psychology</li>
              <li>Live Trading Strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t mt-10">
        © 2025 TeamX | PunitJakhar. All rights reserved.
      </footer>
    </main>
  );
}
