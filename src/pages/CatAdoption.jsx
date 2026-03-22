// src/pages/CatAdoption.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";

const cats = [
  { name: "Tessie", image: "/image/cat1.avif" },
  { name: "Jojo", image: "/image/jojo.avif" },
  { name: "Pusha", image: "/image/pushaa.avif" },
  { name: "Milo", image: "/image/cat2.avif" },
];

export default function CatAdoption() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Cat Adoption
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 md:mb-12 max-w-xl md:max-w-2xl leading-relaxed">
          Explore adorable cats waiting for a loving home.
          Start your adoption journey and find your perfect feline companion.
        </p>

        {/* Cat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {cats.map((cat) => (
            <PetCard key={cat.name} {...cat} />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}