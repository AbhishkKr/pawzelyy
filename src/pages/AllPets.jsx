// src/pages/AllPets.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pets } from "../data/pets";

export default function AllPets() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          All Pets Available for Adoption
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Explore all pets currently looking for loving homes.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              {/* Image */}
              <img
                src={pet.image}
                alt={pet.name}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold mb-2">
                  {pet.name}
                </h3>

                <p className="text-sm text-gray-600">
                  <strong>Breed:</strong> {pet.breed}
                </p>

                <p className="text-sm text-gray-600">
                  <strong>Age:</strong> {pet.age}
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  <strong>Location:</strong> {pet.location}
                </p>

                {/* Adopt button */}
                <button className="w-full bg-[#381124] text-white py-2 rounded-lg hover:bg-[#5a1a38] transition">
                  Adopt {pet.name}
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}