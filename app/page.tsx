import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f6f8', color: '#333' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#001f3f',
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

      {/* Hero Section with trading-themed background */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundImage: 'url("/chart-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#001f3f',
        color: 'white',
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
        }}>
          Trade Like a Yogi — Free from Fear, Greed, and Hope
        </h2>
        <p style={{
          maxWidth: '650px',
          margin: '15px auto 30px',
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#e0e0e0',
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        }}>
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>

        <div style={{ marginBottom: '30px' }}>
          <button style={{
            padding: '12px 24px',
            margin: '0 10px',
            backgroundColor: '#00b7ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Join Telegram
          </button>
          <button style={{
            padding: '12px 24px',
            margin: '0 10px',
            backgroundColor: '#00c853',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Start Learning
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/punit.jpg.jpeg"
            alt="Punit Jakhar"
            width={220}
            height={300}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              border: '2px solid white'
            }}
          />
        </div>
      </section>

      {/* Rest of sections remain same (About, Learn, Footer) */}
      {/* ... keep your previous code below as-is ... */}
    </div>
  );
}
