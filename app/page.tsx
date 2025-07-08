export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-6 font-sans">
      <header className="flex flex-col items-center md:flex-row md:justify-between mb-10">
        <h1 className="text-3xl font-bold">TeamX | <span className="text-indigo-600">PunitJakhar</span></h1>
        <nav className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Mentorship</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Trade Like a Yogi — <span className="text-green-600">Free from Fear, Greed, and Hope</span></h2>
        <p className="max-w-xl mx-auto text-lg text-gray-700">
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Join Telegram</button>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Start Learning</button>
        </div>
      </section>

      <section className="text-center">
        <img src="/punit.jpg.jpeg" alt="Punit Jakhar" className="rounded-full w-40 h-40 mx-auto mb-4 border-4 border-indigo-500 object-cover" />
        <h3 className="text-xl font-bold mb-2">Meet Your Mentor</h3>
        <p className="max-w-xl mx-auto text-gray-700">
          I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset, structure, and clarity — not just strategies.
        </p>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">What You’ll Learn</h3>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="text-lg font-bold mb-2 text-indigo-600">Beginner</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Candlestick Basics</li>
              <li>Chart Types</li>
              <li>Trade Types</li>
              <li>Risk Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2 text-indigo-600">Intermediate</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Technical Indicators</li>
              <li>Entry/Exit Rules</li>
              <li>Chart Patterns</li>
              <li>Risk-Reward Concepts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2 text-indigo-600">Advanced</h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Trading Psychology</li>
              <li>Time Management</li>
              <li>Trade & Money Management</li>
              <li>Live Trading Strategies</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
