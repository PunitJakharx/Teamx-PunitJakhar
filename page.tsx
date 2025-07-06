
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700">TeamX PunitJakhar</h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
          Strategic Trading. Strong Mindset. Long-Term Success.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#mentorship" className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition">
            Mentorship
          </a>
          <a href="#premium" className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-700 transition">
            Buy PDF
          </a>
        </div>
      </section>

      <section id="strategy" className="py-12">
        <h2 className="text-3xl font-semibold mb-4">Free Strategy</h2>
        <p className="max-w-2xl text-lg">
          Explore proven trading strategies for Gold and Silver Options. Learn how MACD near-zero strategies are used to generate reliable entries. Sample strategies will be published here soon.
        </p>
      </section>

      <section id="mentorship" className="py-12 bg-gray-100 rounded-2xl px-4">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">1-on-1 Mentorship</h2>
        <p className="max-w-2xl text-lg mb-4">
          Learn how to trade with clarity, discipline, and confidence. This mentorship focuses on building the right trading mindset, emotional control, and decision-making habits.
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>Mental discipline framework</li>
          <li>Strategy building support (Gold/Silver Options)</li>
          <li>Psychology & mindset training</li>
          <li>Daily accountability via WhatsApp</li>
          <li>Doubt-clearing sessions</li>
        </ul>
        <a href="https://wa.me/918740036405" className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition">
          Apply Now on WhatsApp
        </a>
      </section>

      <section id="premium" className="py-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-700">Premium PDFs</h2>
        <div className="bg-white border p-4 rounded-2xl shadow max-w-md">
          <h3 className="text-2xl font-bold">MACD + Gold Options Strategy</h3>
          <p className="mt-2 text-lg">Proven strategy for swing trading in Gold options using MACD near-zero setup.</p>
          <p className="mt-2 font-semibold">Price: ₹199</p>
          <a href="https://rzp.io/l/your-payment-link" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-700 transition">
            Buy Now
          </a>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-100 rounded-2xl px-4">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg mb-2">📱 WhatsApp: <a href="https://wa.me/918740036405" className="text-blue-600 underline">8740036405</a></p>
        <p className="text-lg">📧 Email: <a href="mailto:punitjakhar578@gmail.com" className="text-blue-600 underline">punitjakhar578@gmail.com</a></p>
      </section>
    </main>
  );
}
