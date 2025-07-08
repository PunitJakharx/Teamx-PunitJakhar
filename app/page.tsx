import React from "react"; import Image from "next/image"; import Link from "next/link";

export default function Home() { return ( <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900"> <header className="bg-blue-900 text-white py-6 px-4 shadow-md"> <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center"> <h1 className="text-3xl font-extrabold">TeamX | <span className="text-blue-300">PunitJakhar</span></h1> <nav className="mt-4 sm:mt-0 space-x-4 text-lg font-medium"> <Link href="#home" className="hover:text-blue-300">Home</Link> <Link href="#courses" className="hover:text-blue-300">Courses</Link> <Link href="#community" className="hover:text-blue-300">Community</Link> <Link href="#mentorship" className="hover:text-blue-300">Mentorship</Link> <Link href="#contact" className="hover:text-blue-300">Contact</Link> </nav> </div> </header>

<section id="home" className="text-center py-14 px-6">
    <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
      Trade Like a Yogi — Free from Fear, Greed, and Hope
    </h2>
    <p className="max-w-xl mx-auto text-lg text-gray-700 mb-6">
      Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
    </p>
    <div className="space-x-4 mb-8">
      <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition">Join Telegram</a>
      <a href="#" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow transition">Start Learning</a>
    </div>
    <div className="flex justify-center">
      <Image src="/mentor.jpg" alt="Punit Jakhar" width={250} height={300} className="rounded-lg shadow-lg" />
    </div>
  </section>

  <section id="about" className="py-10 px-6 bg-white">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">👨‍🏫 Meet Your Mentor</h3>
      <p className="text-gray-800 text-lg">
        I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset,
        structure, and clarity — not just strategies.
      </p>
    </div>
  </section>

  <section id="courses" className="py-12 px-6 bg-blue-50">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">📘 What You’ll Learn</h3>

      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <h4 className="font-semibold text-blue-800">Beginner</h4>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Candlestick Basics</li>
            <li>Chart Types</li>
            <li>Trade Types</li>
            <li>Risk Management</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-800">Intermediate</h4>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Technical Indicators</li>
            <li>Entry/Exit Rules</li>
            <li>Chart Patterns</li>
            <li>Risk-Reward Concepts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-800">Advanced</h4>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Trading Psychology</li>
            <li>Time Management</li>
            <li>Money Management</li>
            <li>Live Trading Strategy</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <footer className="bg-blue-900 text-white text-center py-4">
    © 2025 TeamX | PunitJakhar. All rights reserved.
  </footer>
</main>

); }

