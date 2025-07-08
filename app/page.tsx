// pages/index.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <header style={{ backgroundColor: '#001f3f', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>TeamX | PunitJakhar</h1>
        <nav style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: '#00cfff', margin: '0 10px' }}>Home</a>
          <a href="#" style={{ color: '#00cfff', margin: '0 10px' }}>Courses</a>
          <a href="#" style={{ color: '#00cfff', margin: '0 10px' }}>Community</a>
          <a href="#" style={{ color: '#00cfff', margin: '0 10px' }}>Mentorship</a>
          <a href="#" style={{ color: '#00cfff', margin: '0 10px' }}>Contact</a>
        </nav>
      </header>

      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#003366' }}>
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>

        <div style={{ margin: '20px' }}>
          <button style={{ padding: '10px 20px', margin: '0 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Join Telegram
          </button>
          <button style={{ padding: '10px 20px', margin: '0 10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
            Start Learning
          </button>
        </div>

        <Image
          src="/punit.jpg.jpeg"
          alt="Punit Jakhar"
          width={180}
          height={240}
          style={{ borderRadius: '10px', marginTop: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        />
      </section>

      <section style={{ maxWidth: '800px', margin: '40px auto' }}>
        <h2>Meet Your Mentor</h2>
        <p>
          I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience.
          I help aspiring traders master mindset, structure, and clarity — not just strategies.
        </p>

        <h2>What You’ll Learn</h2>
        <h3>Beginner</h3>
        <ul>
          <li>Candlestick Basics</li>
          <li>Chart Types</li>
          <li>Trade Types</li>
          <li>Risk Management</li>
        </ul>

        <h3>Intermediate</h3>
        <ul>
          <li>Technical Indicators</li>
          <li>Entry/Exit Rules</li>
          <li>Chart Patterns</li>
          <li>Risk-Reward Concepts</li>
        </ul>

        <h3>Advanced</h3>
        <ul>
          <li>Trading Psychology</li>
          <li>Time Management</li>
          <li>Money Management</li>
          <li>Live Trading Strategies</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '14px', color: '#555' }}>
        © 2025 TeamX by Punit Jakhar — All rights reserved.
      </footer>
    </div>
  );
}
