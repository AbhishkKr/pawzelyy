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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Other Pet Adoption
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Looking for a different kind of companion? Discover birds, rabbits,
          hamsters, and other pets waiting for a caring home.
        </p>

        {/* Pet Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}