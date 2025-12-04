export default function Developers() {
  const devs = ["New Metro City", "Umer Estate & Builders"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Top Developers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {devs.map((a, i) => (
            <li key={i} className="p-6 shadow-xl bg-white rounded-2xl text-xl font-semibold text-center hover:scale-105 transition-transform duration-300 list-none">
              {a}
            </li>
          ))}
        </div>

        {/* PDF Map Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Project Map
          </h2>
          <div className="w-full h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="/map.pdf" // Replace with the actual path to your PDF
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Project Map PDF"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}