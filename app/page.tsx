import Image from 'next/image'; import Link from 'next/link';

export default function HomePage() { return ( <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth"> <header className="bg-blue-900 text-white py-6 px-4 shadow-md sticky top-0 z-50"> <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center"> <h1 className="text-3xl font-extrabold mb-2 sm:mb-0">TeamX | PunitJakhar</h1> <nav className="space-x-4 text-lg"> <Link href="#home" className="hover:text-blue-300 transition">Home</Link> <Link href="#courses" className="hover:text-blue-300 transition">Courses</Link> <Link href="#community" className="hover:text-blue-300 transition">Community</Link> <Link href="#mentorship" className="hover:text-blue-300 transition">Mentorship</Link> <Link href="#contact" className="hover:text-blue-300 transition">Contact</Link> </nav> </div> </header>

<main className="max-w-4xl mx-auto px-4 py-10">
    <section id="home" className="text-center mb-12 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
        Trade Like a Yogi — Free from Fear, Greed, and Hope
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition">Join Telegram</a>
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition">Start Learning</a>
      </div>
    </section>

    <section className="flex flex-col items-center text-center mb-12 animate-slide-up">
      <Image
        src="/punit.jpg.jpeg"
        alt="Punit Jakhar"
        width={300}
        height={400}
        className="rounded-xl shadow-lg border border-gray-300"
        priority
      />
    </section>

    <section className="mb-12 animate-fade-in">
      <h3 className="text-2xl font-bold mb-2">Meet Your Mentor</h3>
      <p className="text-gray-700">
        I&apos;m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master
        mindset, structure, and clarity — not just strategies.
      </p>
    </section>

    <section id="courses" className="mb-10 animate-fade-in">
      <h3 className="text-2xl font-bold mb-4">What You’ll Learn</h3>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Beginner</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>📘 Candlestick Basics</li>
          <li>📊 Chart Types</li>
          <li>💹 Trade Types</li>
          <li>🛡 Risk Management</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Intermediate</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>📈 Technical Indicators</li>
          <li>🚪 Entry/Exit Rules</li>
          <li>🧩 Chart Patterns</li>
          <li>⚖️ Risk-Reward Concepts</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Advanced</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
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

  <style jsx global>{`
    html {
      scroll-behavior: smooth;
    }
    .animate-fade-in {
      animation: fadeIn 1s ease-in;
    }
    .animate-slide-up {
      animation: slideUp 1s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
</div>

); }

