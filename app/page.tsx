// app/page.tsx (Next.js 13+ with app directory)

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 max-w-4xl mx-auto font-sans text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">TeamX | PunitJakhar</h1>
        <nav className="flex flex-wrap gap-4 text-blue-600 text-lg mt-2">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Community</a>
          <a href="#">Mentorship</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p className="text-lg mb-4">
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>
        <div className="flex gap-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Join Telegram</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Start Learning</button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/punit.jpg" // Make sure file name matches exactly
              width={400}
              height={400}
              alt="Punit Jakhar"
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Meet Your Mentor</h3>
            <p>
              I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience.
              I help aspiring traders master mindset, structure, and clarity — not just strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">What You’ll Learn</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base">
          <div>
            <h4 className="font-semibold text-lg mb-2">Beginner</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Candlestick Basics</li>
              <li>Chart Types</li>
              <li>Trade Types</li>
              <li>Risk Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Intermediate</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Technical Indicators</li>
              <li>Entry/Exit Rules</li>
              <li>Chart Patterns</li>
              <li>Risk-Reward Concepts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Advanced</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Trading Psychology</li>
              <li>Time Management</li>
              <li>Money Management</li>
              <li>Live Trading Strategies</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t pt-4 text-center text-sm text-gray-500">
        © 2025 TeamX | Punit Jakhar. All rights reserved.
      </footer>
    </main>
  );
}
