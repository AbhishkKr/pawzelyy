// src/pages/DogAdoption.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";

const dogs = [
  { name: "Onyx", image: "/image/dog1.avif" },
  { name: "Chanel", image: "/image/dog2.avif" },
  { name: "Jojo", image: "/image/jojo.avif" },
  { name: "Choji", image: "/image/choji.avif" },
  { name: "Pusha", image: "/image/pusha.avif" },
  { name: "Minna", image: "/image/minna.avif" }
];

export default function DogAdoption() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Dog Adoption
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Discover loving dogs waiting for their forever homes.
          Browse through available dogs and start your adoption journey today.
        </p>

        {/* Dogs Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {dogs.map((dog) => (
            <PetCard key={dog.name} {...dog} />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}