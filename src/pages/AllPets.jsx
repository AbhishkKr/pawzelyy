// src/pages/AllPets.jsx

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pets } from "../data/pets";

export default function AllPets() {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-30  max-w-7xl mx-auto">

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
                <button
                  onClick={() => setSelectedPet(pet)}
                  className="w-full bg-[#381124] text-white py-2 rounded-lg hover:bg-[#5a1a38] transition"
                >
                  Adopt {pet.name}
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Modal */}
        {selectedPet && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative">

              {/* Close */}
              <button
                onClick={() => setSelectedPet(null)}
                className="absolute top-3 right-3 text-gray-500 text-xl"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selectedPet.image}
                alt={selectedPet.name}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />

              {/* Info */}
              <h2 className="text-2xl font-bold mb-2">
                {selectedPet.name}
              </h2>

              <p><strong>Breed:</strong> {selectedPet.breed}</p>
              <p><strong>Age:</strong> {selectedPet.age}</p>
              <p><strong>Location:</strong> {selectedPet.location}</p>

              <hr className="my-4" />

              <p><strong>Organization:</strong> {selectedPet.organization}</p>
              <p><strong>Contact:</strong> {selectedPet.contact}</p>

              <p className="mt-2 text-gray-600">
                {selectedPet.description}
              </p>

              {/* Actions */}
              <a
                href={`tel:${selectedPet.contact}`}
                className="block mt-4 text-center bg-green-600 text-white py-2 rounded-lg"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${selectedPet.contact}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center bg-green-500 text-white py-2 rounded-lg"
              >
                Chat on WhatsApp
              </a>

            </div>
          </div>
        )}

      </section>

      <Footer />
    </>
  );
}