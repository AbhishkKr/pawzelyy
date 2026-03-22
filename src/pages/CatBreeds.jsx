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

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Cat Breeds
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Discover popular cat breeds and learn about their personalities,
          behavior, and care requirements.
        </p>

        {/* Breed Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {breeds.map((breed, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={breed.image}
                alt={breed.name}
                className="h-fit sm:h-80 md:h-95 w-full object-cover"
              />

              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {breed.name}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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