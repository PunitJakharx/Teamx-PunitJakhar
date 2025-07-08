
import Image from 'next/image';

export default function Home() { return ( <div className="min-h-screen bg-white text-gray-800 font-sans"> {/* Header */} <header className="border-b shadow-sm"> <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between"> <h1 className="text-3xl font-bold text-indigo-700">TeamX | PunitJakhar</h1> <nav className="mt-4 md:mt-0 space-x-4 text-sm text-indigo-600 font-medium"> <a href="#home">Home</a> <a href="#courses">Courses</a> <a href="#community">Community</a> <a href="#mentorship">Mentorship</a> <a href="#contact">Contact</a> </nav> </div> </header>

{/* Hero Section */}
  <section className="text-center py-12 bg-gray-50 px-4" id="home">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Trade Like a Yogi — Free from Fear, Greed, and Hope</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
    </p>
    <div className="flex justify-center gap-4 mb-6">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Join Telegram</button>
      <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition">Start Learning</button>
    </div>
    <div className="flex justify-center">
      <Image
        src="/punit.jpg.jpeg"
        alt="Punit Jakhar"
        width={200}
        height={200}
        className="rounded-full shadow-lg border-4 border-indigo-500 object-cover"
      />
    </div>
  </section>

  {/* About Mentor */}
  <section className="px-4 py-12 max-w-3xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-4">Meet Your Mentor</h3>
    <p className="text-gray-700">
      I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset,
      structure, and clarity — not just strategies.
    </p>
  </section>

  {/* Curriculum */}
  <section className="bg-gray-100 py-12 px-4" id="courses">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">What You’ll Learn</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-lg mb-2">Beginner</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Candlestick Basics</li>
            <li>Chart Types</li>
            <li>Trade Types</li>
            <li>Risk Management</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Intermediate</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Technical Indicators</li>
            <li>Entry/Exit Rules</li>
            <li>Chart Patterns</li>
            <li>Risk-Reward Concepts</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Advanced</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Time & Trade Management</li>
            <li>Money Management</li>
            <li>Trading Psychology</li>
            <li>Live Trading Strategies</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="text-center text-sm text-gray-500 py-8 border-t mt-12">
    © 2025 TeamX | PunitJakhar. All rights reserved.
  </footer>
</div>

); }

