// pages/index.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8', color: '#333' }}>
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(to right, #001f3f, #003366)',
          padding: '25px 15px',
          color: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          TeamX | PunitJakhar
        </h1>
        <nav style={{ textAlign: 'center', marginTop: '10px' }}>
          {['Home', 'Courses', 'Community', 'Mentorship', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: '#00cfff',
                margin: '0 15px',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#003366', fontWeight: '700' }}>
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p
          style={{
            maxWidth: '650px',
            margin: '15px auto 30px',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#555',
          }}
        >
          Learn to trade Equity, Commodities, Forex, Futures, Options (Intraday & Delivery) with structure, confidence and control.
        </p>

        <div style={{ marginBottom: '30px' }}>
          <a href="#" style={buttonStyle('#007bff', '#0056b3')}>Join Telegram</a>
          <a href="#" style={buttonStyle('#28a745', '#1c7430')}>Start Learning</a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/punit.jpg.jpeg"
            alt="Punit Jakhar"
            width={220}
            height={300}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              objectFit: 'cover',
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Meet Your Mentor</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience.
          I specialize in guiding aspiring traders across all major markets — Equity, Commodity, Forex — from basics to advanced psychology and live strategies.
        </p>
      </section>

      {/* Learn Section */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>What You’ll Learn</h2>

        {[
          {
            level: 'Beginner',
            items: ['Candlestick Basics', 'Chart Types', 'Trade Types', 'Risk Management'],
          },
          {
            level: 'Intermediate',
            items: ['Technical Indicators', 'Entry/Exit Rules', 'Chart Patterns', 'Risk-Reward Concepts'],
          },
          {
            level: 'Advanced',
            items: ['Trading Psychology', 'Time Management', 'Money Management', 'Live Trading Strategies'],
          },
        ].map((section) => (
          <div key={section.level} style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#0056b3' }}>{section.level}</h3>
            <ul style={{ paddingLeft: '20px', color: '#555', marginTop: '8px' }}>
              {section.items.map((item) => (
                <li key={item} style={{ marginBottom: '5px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '25px',
          fontSize: '14px',
          color: '#666',
          backgroundColor: '#f0f0f0',
          marginTop: '50px',
        }}
      >
        © {new Date().getFullYear()} TeamX by Punit Jakhar — All rights reserved.
      </footer>
    </div>
  );
}

// 🔧 Button Styling Helper
function buttonStyle(bgColor: string, hoverColor: string): React.CSSProperties {
  return {
    padding: '12px 24px',
    margin: '0 10px',
    backgroundColor: bgColor,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background 0.3s ease',
  };
}

// 🔧 Section Box Style
const sectionStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
};
