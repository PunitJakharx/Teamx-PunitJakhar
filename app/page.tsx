import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-6 text-gray-800 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">TeamX | PunitJakhar</h1>
        <nav className="mt-2 space-x-4 text-sm">
          <a href="#" className="text-blue-600 hover:underline">Home</a>
          <a href="#" className="text-blue-600 hover:underline">Courses</a>
          <a href="#" className="text-blue-600 hover:underline">Community</a>
          <a href="#" className="text-blue-600 hover:underline">Mentorship</a>
          <a href="#" className="text-blue-600 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Slogan */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p className="mt-2 text-lg">
          Master equity, commodities, forex, and options — with clarity,
          confidence, and real strategies.
        </p>
        <div className="mt-4 space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Join Telegram</button>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Start Learning</button>
        </div>
      </section>

      {/* Mentor Image */}
      <div className="flex justify-center my-6">
        <img
          src="/punit.jpg.jpeg"
          alt="Punit Jakhar"
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-4 border-indigo-500 shadow-lg"
        />
      </div>

      {/* About Mentor */}
      <section className="mb-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Meet Your Mentor</h3>
        <p>
          I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience.
          I help aspiring traders master mindset, structure, and clarity — not just strategies.
        </p>
      </section>

      {/* Course Structure */}
      <section>
        <h3 className="text-xl font-semibold mb-4">What You’ll Learn</h3>

        <h4 className="font-semibold text-lg mt-2">Beginner</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Candlestick Basics</li>
          <li>Chart Types</li>
          <li>Trade Types</li>
          <li>Risk Management</li>
        </ul>

        <h4 className="font-semibold text-lg mt-2">Intermediate</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Technical Indicators</li>
          <li>Entry/Exit Rules</li>
          <li>Chart Patterns</li>
          <li>Risk-Reward Concepts</li>
        </ul>

        <h4 className="font-semibold text-lg mt-2">Advanced</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Time Management</li>
          <li>Money Management</li>
          <li>Trade Psychology</li>
          <li>Live Trading Strategies</li>
        </ul>
      </section>
    </main>
  );
}
