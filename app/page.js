import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  const featured = [
    {
      id: 1,
      title: "5 Marla Commercial Plot – New Metro City",
      price: "",
      image: "/sample.jpg",
    },
    {
      id: 2,
      title: "Ravi Ratan plots on ground with plots no. limited time special offer – New Metro City",
      price: "",
      image: "/sample.jpg",
    },
    {
      id: 3,
      title: "Residential Plot – New Metro City",
      price: "",
      image: "/sample.jpg",
    },
  ];

  return (
    <div>
      <Hero />

      <div className="p-6 max-w-6xl mx-auto">
        <SearchBar />

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <PropertyCard key={p.id} data={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
