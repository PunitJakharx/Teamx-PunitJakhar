import Image from 'next/image';
import React from 'react';

export default function Home() {
  const buttonStyle = (baseColor: string): React.CSSProperties => ({
    padding: '12px 24px',
    margin: '0 10px',
    backgroundColor: baseColor,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s',
    fontWeight: 600,
    fontSize: '16px'
  });

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8', color: '#333' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(to right, #001f3f, #004080)',
        padding: '25px 15px',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
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
                fontWeight: '500'
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(180deg, #ffffff, #e3f2fd)'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#003366', fontWeight: '700' }}>
          🧘 Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p style={{
          maxWidth: '600px',
          margin: '20px auto',
          fontSize: '17px',
          lineHeight: '1.6',
          color: '#555'
        }}>
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>

        <div style={{ marginBottom: '30px' }}>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">
            <button style={buttonStyle('#007bff')}>🚀 Join Telegram</button>
          </a>
          <a href="https://youtube.com/@5_star_trader?si=qbxWCday2vY_WHqO" target="_blank" rel="noreferrer">
            <button style={buttonStyle('#28a745')}>🎓 Start Learning</button>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Image
            src="/punit.jpg.jpeg"
            alt="Punit Jakhar"
            width={240}
            height={320}
            style={{
              borderRadius: '14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              maxWidth: '90%'
            }}
          />
        </div>
      </section>

      {/* Section Divider */}
      <hr style={{ borderTop: '2px dashed #cce', margin: '50px 10%' }} />

      {/* Mentor Section */}
      <section style={cardStyle}>
        <h2>💼 Meet Your Mentor</h2>
        <p>
          I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience.
          I help aspiring traders master mindset, structure, and clarity — not just strategies.
        </p>
      </section>

      {/* What You'll Learn */}
      <section style={{ ...cardStyle, background: '#fffaf0' }}>
        <h2>📚 What You’ll Learn</h2>
        {[
          { level: '🟢 Beginner', items: ['✅ Candlestick Basics', '📊 Chart Types', '📈 Trade Types', '🛡 Risk Management'] },
          { level: '🔵 Intermediate', items: ['📉 Technical Indicators', '🚀 Entry/Exit Rules', '📐 Chart Patterns', '⚖️ Risk-Reward Concepts'] },
          { level: '🔴 Advanced', items: ['🧠 Trading Psychology', '⏱ Time Management', '💰 Money Management', '🎯 Live Trading Strategies'] }
        ].map(section => (
          <div
            key={section.level}
            style={{
              marginBottom: '20px',
              padding: '20px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
            }}
          >
            <h3 style={{ color: '#0056b3' }}>{section.level}</h3>
            <ul>
              {section.items.map(item => (
                <li key={item} style={{ paddingLeft: '10px', marginBottom: '5px' }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '25px',
        fontSize: '14px',
        color: '#666',
        backgroundColor: '#f0f0f0',
        marginTop: '50px'
      }}>
        © {new Date().getFullYear()} TeamX by Punit Jakhar — All rights reserved. <br />
        📺 <a href="https://youtube.com/@5_star_trader" target="_blank">YouTube</a> |
        📸 <a href="https://www.instagram.com/__punit_jakhar" target="_blank">Instagram</a>
      </footer>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 0 15px rgba(0,0,0,0.07)',
  textAlign: 'left',
  lineHeight: '1.6',
};
