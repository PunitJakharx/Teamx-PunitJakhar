// app/page.tsx or pages/index.tsx (depending on your setup)
export default function Home() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.brand}>TeamX | <span style={styles.highlight}>PunitJakhar</span></h1>
        <nav style={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Community</a>
          <a href="#">Mentorship</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.title}>Trade Like a Yogi — Free from Fear, Greed, and Hope</h2>
        <p style={styles.subtitle}>
          Master equity, commodities, forex, and options — with clarity, confidence, and real strategies.
        </p>
        <div style={styles.buttons}>
          <button style={styles.button}>Join Telegram</button>
          <button style={styles.buttonSecondary}>Start Learning</button>
        </div>
        <img src="/punit.jpg" alt="Punit Jakhar" style={styles.image} />
      </section>

      <section>
        <h3 style={styles.sectionTitle}>Meet Your Mentor</h3>
        <p style={styles.description}>
          I’m <strong>Punit Jakhar</strong>, a full-time trader with 5+ years of experience. I help aspiring traders master mindset,
          structure, and clarity — not just strategies.
        </p>
      </section>

      <section>
        <h3 style={styles.sectionTitle}>What You’ll Learn</h3>
        <div>
          <h4 style={styles.level}>Beginner</h4>
          <ul>
            <li>Candlestick Basics</li>
            <li>Chart Types</li>
            <li>Trade Types</li>
            <li>Risk Management</li>
          </ul>

          <h4 style={styles.level}>Intermediate</h4>
          <ul>
            <li>Technical Indicators</li>
            <li>Entry/Exit Rules</li>
            <li>Chart Patterns</li>
            <li>Risk-Reward Concepts</li>
          </ul>

          <h4 style={styles.level}>Advanced</h4>
          <ul>
            <li>Trading Psychology</li>
            <li>Money Management</li>
            <li>Live Trading Strategies</li>
            <li>Multi-Asset Expertise</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

// Inline CSS
const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    color: '#222',
    background: 'linear-gradient(to bottom right, #f0f4ff, #ffffff)',
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  brand: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#4f46e5',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  hero: {
    textAlign: 'center',
    padding: '2rem 0',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  buttons: {
    margin: '1rem 0',
  },
  button: {
    marginRight: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  buttonSecondary: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e0e7ff',
    color: '#111',
    border: '1px solid #4f46e5',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '300px',
    width: '90%',
    borderRadius: '12px',
    marginTop: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginTop: '2rem',
  },
  description: {
    maxWidth: '700px',
    margin: '0 auto',
    fontSize: '1rem',
    lineHeight: '1.5',
    padding: '1rem',
  },
  level: {
    marginTop: '1rem',
    fontWeight: '600',
  },
};
