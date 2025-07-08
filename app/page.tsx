export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">TeamX | PunitJakhar</h1>
        <nav className="mt-2 space-x-4 text-blue-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Community</a>
          <a href="#">Mentorship</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p className="text-gray-700">
          Master equity, commodities, forex, and options — with clarity,
          confidence, and real strategies.
        </p>
        <div className="mt-4 space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Join Telegram
          </button>
          <button className="border px-4 py-2 rounded hover:bg-gray-100">
            Start Learning
          </button>
        </div>
      </section>

      {/* ✅ Fixed image section */}
      <div className="flex justify-center my-6">
        <img
          src="/punit.jpg.jpeg"
          alt="Punit Jakhar"
          className="rounded-full w-40 h-40 object-cover border-4 border-indigo-500 shadow-lg"
          style={{ maxWidth: '160px', height: 'auto' }}
        />
      </div>

      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Meet Your Mentor</h3>
        <p className="text-gray-700">
          I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years
          of experience. I help aspiring traders master mindset, structure, and
          clarity — not just strategies.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">What You’ll Learn</h3>

        <div className="mb-6">
          <h4 className="font-semibold mb-1">Beginner</h4>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Candlestick Basics</li>
            <li>Chart Types</li>
            <li>Trade Types</li>
            <li>Risk Management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-1">Intermediate</h4>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Technical Indicators</li>
            <li>Entry/Exit Rules</li>
            <li>Chart Patterns</li>
            <li>Risk-Reward Concepts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Advanced</h4>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Trading Psychology</li>
            <li>Money Management</li>
            <li>Time & Trade Management</li>
            <li>Live Trading Strategies</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
