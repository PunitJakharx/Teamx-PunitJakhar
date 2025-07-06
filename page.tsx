import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <Image 
        src="/punit.jpg" 
        alt="Punit Jakhar" 
        width={200} 
        height={200} 
        style={{ borderRadius: '50%' }}
      />
      <h1>Punit Jakhar</h1>
      <p>
        Hello, I'm <strong>Punit Jakhar</strong> — a trading mentor and Excel professional from Churu, Rajasthan.
        I have over 5 years of experience in trading, focusing especially on gold and silver options with a swing trading approach.
        I also bring 3+ years of experience as an MIS Executive and Scheduling Manager with expertise in Excel, Google Sheets, and Power BI.
      </p>
      <p>
        This website is a platform to deliver:<br />
        📘 Trading Strategy PDFs<br />
        💹 Market Signals<br />
        🧠 Mindset Mentorship for Traders<br />
        💬 Access to my private Telegram Community: <strong>TeamX PunitJakhar</strong>
      </p>
    </div>
  );
}
