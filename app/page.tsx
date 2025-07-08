import React from "react";

export default function HomePage() { return ( <main className="min-h-screen bg-gray-950 text-white font-sans"> {/* Navigation Bar */} <nav className="flex justify-between items-center p-4 bg-gray-900 shadow"> <h1 className="text-xl font-bold">TeamX | PunitJakhar</h1> <ul className="flex gap-4 text-sm"> <li>Home</li> <li>Courses</li> <li>Community</li> <li>Mentorship</li> <li>Contact</li> </ul> </nav>

{/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-gray-900 to-gray-800">
    <div className="max-w-xl">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Trade Like a Yogi — Free from Fear, Greed, and Hope</h2>
      <p className="text-lg mb-6">Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.</p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl">Join Telegram</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-xl">Start Learning</button>
      </div>
    </div>
    <img src="/punit.jpg" alt="Punit Jakhar" className="w-64 h-64 rounded-full mt-8 md:mt-0" />
  </section>

  {/* About Section */}
  <section className="px-8 py-16 bg-gray-900 text-center">
    <h3 className="text-2xl font-semibold mb-4">Meet Your Mentor</h3>
    <p className="max-w-3xl mx-auto text-gray-300">
      I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master
      mindset, structure, and clarity — not just strategies.
    </p>
  </section>

  {/* Courses Section */}
  <section className="px-8 py-16 bg-gray-800">
    <h3 className="text-2xl font-semibold text-center mb-8">What You’ll Learn</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
      <div>
        <h4 className="text-xl font-bold mb-2">Beginner</h4>
        <ul className="list-disc list-inside text-sm">
          <li>Candlestick Basics</li>
          <li>Chart Types</li>
          <li>Trade Types</li>
          <li>Risk Management</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">Intermediate</h4>
        <ul className="list-disc list-inside text-sm">
          <li>Technical Indicators</li>
          <li>Entry/Exit Rules</li>
          <li>Chart Patterns</li>
          <li>Risk-Reward Concepts</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">Advanced</h4>
        <ul className="list-disc list-inside text-sm">
          <li>Live Strategy Execution</li>
          <li>Psychology of Trading</li>
          <li>Multi-Timeframe Analysis</li>
          <li>Backtesting</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Markets Covered */}
  <section className="px-8 py-16 bg-gray-900 text-center">
    <h3 className="text-2xl font-semibold mb-6">Markets You’ll Master</h3>
    <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-200">
      <span className="bg-gray-700 px-4 py-2 rounded-full">Equity</span>
      <span className="bg-gray-700 px-4 py-2 rounded-full">Commodities</span>
      <span className="bg-gray-700 px-4 py-2 rounded-full">Forex</span>
      <span className="bg-gray-700 px-4 py-2 rounded-full">Futures & Options</span>
      <span className="bg-gray-700 px-4 py-2 rounded-full">Intraday</span>
      <span className="bg-gray-700 px-4 py-2 rounded-full">Delivery</span>
    </div>
  </section>

  {/* Footer CTA */}
  <footer className="px-8 py-12 bg-gray-800 text-center text-sm text-gray-400">
    <p>Want to build mindset + mastery in trading?</p>
    <p className="text-white font-semibold">Join TeamX | PunitJakhar today.</p>
    <div className="mt-4">
      <a href="mailto:punitjakhar578@gmail.com" className="underline">punitjakhar578@gmail.com</a>
    </div>
  </footer>
</main>

); }

