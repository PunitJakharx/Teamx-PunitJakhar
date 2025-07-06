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
    </main>
  );
}
