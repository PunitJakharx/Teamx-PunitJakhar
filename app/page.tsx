// app/page.tsx (Enhanced Version with Color Effects and Styling)

import Image from 'next/image';

export default function Home() { return ( <main className="min-h-screen px-4 py-6 max-w-5xl mx-auto font-sans text-gray-800 bg-gradient-to-br from-white via-gray-100 to-gray-200"> <header className="mb-10 border-b pb-4"> <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2">TeamX | PunitJakhar</h1> <nav className="flex flex-wrap gap-6 text-lg text-indigo-500 font-semibold"> <a href="#" className="hover:text-indigo-800 transition">Home</a> <a href="#" className="hover:text-indigo-800 transition">Courses</a> <a href="#" className="hover:text-indigo-800 transition">Community</a> <a href="#" className="hover:text-indigo-800 transition">Mentorship</a> <a href="#" className="hover:text-indigo-800 transition">Contact</a> </nav> </header>

<section className="mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Trade Like a Yogi — <span className="text-indigo-600">Free from Fear, Greed, and Hope</span>
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
    </p>
    <div className="flex gap-4 mb-8">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded shadow">
        Join Telegram
      </button>
      <button className="bg-white hover:bg-gray-100 border border-indigo-600 text-indigo-600 px-5 py-2 rounded shadow">
        Start Learning
      </button>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2">
        <Image
          src="/punit.jpg"
          width={400}
          height={400}
          alt="Punit Jakhar"
          className="rounded-xl shadow-lg border border-gray-300 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-3 text-indigo-700">Meet Your Mentor</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders
          master mindset, structure, and clarity — not just strategies.
        </p>
      </div>
    </div>
  </section>

  <section className="mb-16">
    <h3 className="text-3xl font-bold text-gray-900 mb-6">What You’ll Learn</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-400">
        <h4 className="text-xl font-semibold text-indigo-700 mb-3">Beginner</h4>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Candlestick Basics</li>
          <li>Chart Types</li>
          <li>Trade Types</li>
          <li>Risk Management</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-400">
        <h4 className="text-xl font-semibold text-indigo-700 mb-3">Intermediate</h4>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Technical Indicators</li>
          <li>Entry/Exit Rules</li>
          <li>Chart Patterns</li>
          <li>Risk-Reward Concepts</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-400">
        <h4 className="text-xl font-semibold text-indigo-700 mb-3">Advanced</h4>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Trading Psychology</li>
          <li>Time Management</li>
          <li>Money Management</li>
          <li>Live Trading Strategies</li>
        </ul>
      </div>
    </div>
  </section>

  <footer className="border-t pt-6 text-center text-sm text-gray-500">
    © 2025 TeamX | Punit Jakhar. All rights reserved.
  </footer>
</main>

); }

