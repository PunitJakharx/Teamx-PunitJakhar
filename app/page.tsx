import React from "react"; import Image from "next/image";

export default function HomePage() { return ( <div className="min-h-screen bg-gray-50"> {/* Header */} <header className="bg-blue-900 text-white py-4 px-6 shadow"> <div className="container mx-auto flex justify-between items-center"> <h1 className="text-2xl font-bold">TeamX | PunitJakhar</h1> <nav className="space-x-4 text-blue-200"> <a href="#home" className="hover:text-white">Home</a> <a href="#courses" className="hover:text-white">Courses</a> <a href="#community" className="hover:text-white">Community</a> <a href="#mentorship" className="hover:text-white">Mentorship</a> <a href="#contact" className="hover:text-white">Contact</a> </nav> </div> </header>

{/* Hero Section */}
  <section className="bg-white py-10 px-6 md:px-16">
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
      {/* Photo Section */}
      <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
        <Image 
          src="/punit.jpg.jpeg" 
          alt="Punit Jakhar" 
          width={288}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trade Like a Yogi — <span className="text-blue-700">Free from Fear, Greed, and Hope</span>
        </h2>
        <p className="text-gray-600 mb-4 text-lg">
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Join Telegram</a>
          <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Start Learning</a>
        </div>
      </div>
    </div>
  </section>

  {/* About Mentor */}
  <section className="bg-gray-100 py-10 px-6 md:px-16">
    <h3 className="text-2xl font-bold mb-4">Meet Your Mentor</h3>
    <p className="text-gray-700 max-w-3xl">
      I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset, structure, and clarity — not just strategies.
    </p>
  </section>

  {/* What You'll Learn */}
  <section className="bg-white py-10 px-6 md:px-16">
    <h3 className="text-2xl font-bold mb-6">What You’ll Learn</h3>

    <div className="mb-6">
      <h4 className="text-xl font-semibold">Beginner</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>Candlestick Basics</li>
        <li>Chart Types</li>
        <li>Trade Types</li>
        <li>Risk Management</li>
      </ul>
    </div>

    <div className="mb-6">
      <h4 className="text-xl font-semibold">Intermediate</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>Technical Indicators</li>
        <li>Entry/Exit Rules</li>
        <li>Chart Patterns</li>
        <li>Risk-Reward Concepts</li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold">Advanced</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>Trading Psychology</li>
        <li>Time Management</li>
        <li>Money Management</li>
      </ul>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-blue-900 text-white py-6 text-center mt-10">
    <p>&copy; 2025 TeamX | Punit Jakhar. All rights reserved.</p>
  </footer>
</div>

); }

