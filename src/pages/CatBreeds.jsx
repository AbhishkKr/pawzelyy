// src/pages/CatBreeds.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const breeds = [
  {
    name: "Persian Cat",
    image: "/image/persian.avif",
    description:
      "Calm, affectionate, and elegant. Persian cats are known for their long fur and gentle nature."
  },
  {
    name: "Siamese Cat",
    image: "/image/siamese.avif",
    description:
      "Highly social and vocal. Siamese cats form strong bonds with their owners."
  },
  {
    name: "Maine Coon",
    image: "/image/maine-coon.avif",
    description:
      "One of the largest domestic cat breeds, known for their friendly and playful personality."
  },
  {
    name: "British Shorthair",
    image: "/image/british.avif",
    description:
      "Easygoing and affectionate. Famous for their round face and plush coat."
  },
  {
    name: "Bengal Cat",
    image: "/image/bengal.avif",
    description:
      "Energetic and intelligent. Bengals are known for their beautiful leopard-like spots."
  },
  {
    name: "Ragdoll",
    image: "/image/ragdoll.avif",
    description:
      "Gentle and affectionate cats that love to be held and cuddled."
  } 
];

export default function CatBreeds() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Cat Breeds
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Discover popular cat breeds and learn about their personalities,
          behavior, and care requirements.
        </p>

        {/* Breed Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {breeds.map((breed, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={breed.image}
                alt={breed.name}
                className="h-95 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {breed.name}
                </h3>

                <p className="text-gray-600 text-sm">
                  {breed.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}