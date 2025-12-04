export default function Areas() {
  const areas = ["DHA Lahore", "Bahria Town", "Johar Town", "Gulberg"];

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Top Areas</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {areas.map((a, i) => (
          <li key={i} className="p-6 shadow bg-white rounded-lg text-xl">
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
