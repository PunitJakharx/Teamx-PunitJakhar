// pages/index.tsx
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleHover = (e: any) => {
      e.currentTarget.style.transform = 'scale(1.05)';
    };
    const handleOut = (e: any) => {
      e.currentTarget.style.transform = 'scale(1)';
    };
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('mouseover', handleHover);
      btn.addEventListener('mouseout', handleOut);
    });
    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('mouseover', handleHover);
        btn.removeEventListener('mouseout', handleOut);
      });
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#f4f6f8', color: '#333' }}>
      <Head>
        <title>TeamX | Punit Jakhar</title>
      </Head>

      {/* Header */}
      <header style={{
        backgroundColor: '#001f3f',
        padding: '25px 15px',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
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

      {/* Hero Section with background */}
      <section style={{
        textAlign: 'center',
        padding: '80px 20px',
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/bg-trading.jpg') center/cover no-repeat`,
        color: '#fff'
      }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: '700', fontFamily: 'Montserrat' }}>
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p style={{
          maxWidth: '650px',
          margin: '15px auto 30px',
          fontSize: '17px',
          lineHeight: '1.6'
        }}>
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>

        <div style={{ marginBottom: '30px' }}>
          <a href="https://youtube.com/@5_star_trader?si=qbxWCday2vY_WHqO" target="_blank" rel="noopener noreferrer">
            <button style={{
              padding: '12px 24px',
              margin: '0 10px',
              background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 0 10px #00cfff'
            }}>YouTube</button>
          </a>
          <a href="https://www.instagram.com/__punit_jakhar?igsh=YXJnNGw3MnY5cHp1" target="_blank" rel="noopener noreferrer">
            <button style={{
              padding: '12px 24px',
              margin: '0 10px',
              background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>Instagram</button>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/punit.jpg.jpeg"
            alt="Punit Jakhar"
            width={220}
            height={300}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(255,255,255,0.3)',
              border: '2px solid #fff'
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fefefe' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>📊 Trusted by Many</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div><h4 style={{ fontSize: '1.5rem', color: '#0072ff' }}>500+</h4><p>Trades Done</p></div>
          <div><h4 style={{ fontSize: '1.5rem', color: '#0072ff' }}>200+</h4><p>Students Mentored</p></div>
          <div><h4 style={{ fontSize: '1.5rem', color: '#0072ff' }}>5+ Yrs</h4><p>Experience</p></div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        maxWidth: '900px',
        margin: '40px auto',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Meet Your Mentor</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          I'm <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience.
          I help aspiring traders master mindset, structure, and clarity — not just strategies.
        </p>
      </section>

      {/* What You’ll Learn */}
      <section style={{
        maxWidth: '900px',
        margin: '30px auto',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>📘 What You’ll Learn</h2>

        {[
          {
            level: 'Beginner',
            items: ['Candlestick Basics', 'Chart Types', 'Trade Types', 'Risk Management']
          },
          {
            level: 'Intermediate',
            items: ['Technical Indicators', 'Entry/Exit Rules', 'Chart Patterns', 'Risk-Reward Concepts']
          },
          {
            level: 'Advanced',
            items: ['Trading Psychology', 'Time Management', 'Money Management', 'Live Trading Strategies']
          }
        ].map((section) => (
          <div key={section.level} style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#0056b3' }}>🎯 {section.level}</h3>
            <ul style={{ paddingLeft: '20px', color: '#555', marginTop: '8px' }}>
              {section.items.map(item => <li key={item} style={{ marginBottom: '5px' }}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA Footer */}
      <section style={{
        background: 'linear-gradient(to right, #141e30, #243b55)',
        color: 'white',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.6rem' }}>Ready to Master the Markets?</h2>
        <p style={{ marginTop: '10px', marginBottom: '20px' }}>
          Join TeamX today and level up your trading mindset and strategy.
        </p>
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '25px',
        fontSize: '14px',
        color: '#666',
        backgroundColor: '#f0f0f0'
      }}>
        © {new Date().getFullYear()} TeamX by Punit Jakhar — All rights reserved.
      </footer>
    </div>
  );
}
