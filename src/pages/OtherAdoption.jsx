// src/pages/OtherAdoption.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";

const pets = [
  { name: "Coco (Parrot)", image: "/image/parrot.avif" },
  { name: "Snowy (Rabbit)", image: "/image/rabbit.avif" },
  { name: "Nibbles (Hamster)", image: "/image/hamster.avif" },
  { name: "Sky (Bird)", image: "/image/bird.avif" }
];

export default function OtherAdoption() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Other Pet Adoption
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 md:mb-12 max-w-xl md:max-w-2xl leading-relaxed">
          Looking for a different kind of companion? Discover birds, rabbits,
          hamsters, and other pets waiting for a caring home.
        </p>

        {/* Pet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}