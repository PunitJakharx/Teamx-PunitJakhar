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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&display=swap" rel="stylesheet" />
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
            <a key={item} href="#" style={{
              color: '#00cfff',
              margin: '0 15px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>{item}</a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
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
              boxShadow: '0 0 10px #00cfff',
              transition: 'transform 0.3s ease-in-out'
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
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out'
            }}>Instagram</button>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/punit.jpg" // ✅ Ensure this file exists
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

      {/* Remaining sections... (same as before) */}
      {/* Stats, About, Learn, CTA, Footer */}
    </div>
  );
}
