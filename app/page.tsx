import Image from 'next/image'; import Link from 'next/link';

export default function HomePage() { return ( <div className="min-h-screen bg-gray-50 text-gray-900 font-sans"> <header className="bg-blue-900 text-white py-6 px-4 shadow-md"> <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center"> <h1 className="text-3xl font-extrabold mb-2 sm:mb-0">TeamX | PunitJakhar</h1> <nav className="space-x-4 text-lg"> <Link href="#home" className="hover:text-blue-300">Home</Link> <Link href="#courses" className="hover:text-blue-300">Courses</Link> <Link href="#community" className="hover:text-blue-300">Community</Link> <Link href="#mentorship" className="hover:text-blue-300">Mentorship</Link> <Link href="#contact" className="hover:text-blue-300">Contact</Link> </nav> </div> </header>

<main className="max-w-4xl mx-auto px-4 py-10">
    <section className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
        Trade Like a Yogi — Free from Fear, Greed, and Hope
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">Join Telegram</a>
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">Start Learning</a>
      </div>
    </section>

    <section className="flex flex-col items-center text-center mb-12">
      <Image
        src="/punit.jpg.jpeg"
        alt="Punit Jakhar"
        width={300}
        height={400}
        className="rounded-lg shadow-md"
      />
    </section>

    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-2">Meet Your Mentor</h3>
      <p className="text-gray-700">
        I&apos;m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master
        mindset, structure, and clarity — not just strategies.
      </p>
    </section>

    <section className="mb-10">
      <h3 className="text-2xl font-bold mb-4">What You’ll Learn</h3>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Beginner</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>📘 Candlestick Basics</li>
          <li>📊 Chart Types</li>
          <li>💹 Trade Types</li>
          <li>🛡 Risk Management</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Intermediate</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>📈 Technical Indicators</li>
          <li>🚪 Entry/Exit Rules</li>
          <li>🧩 Chart Patterns</li>
          <li>⚖️ Risk-Reward Concepts</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Advanced</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>🧠 Trading Psychology</li>
          <li>⏱ Time Management</li>
          <li>💰 Money Management</li>
          <li>🎯 Live Trading Strategies</li>
        </ul>
      </div>
    </section>
  </main>

  <footer className="bg-gray-100 text-center text-sm py-6 mt-10 text-gray-600">
    © {new Date().getFullYear()} TeamX | Built by Punit Jakhar
  </footer>
</div>

); }

