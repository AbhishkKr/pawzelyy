// src/pages/CatAdoption.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";

const cats = [
  { name: "Tessie", image: "/image/cat1.avif" },
  { name: "Tabbies Female", image: "/image/cat2.avif" },
  { name: "Luna", image: "/image/cat1.avif" },
  { name: "Milo", image: "/image/cat2.avif" },
];

export default function CatAdoption() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Cat Adoption
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Explore adorable cats waiting for a loving home.
          Start your adoption journey and find your perfect feline companion.
        </p>

        {/* Cat Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cats.map((cat) => (
            <PetCard key={cat.name} {...cat} />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}