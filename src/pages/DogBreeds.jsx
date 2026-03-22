// src/pages/DogBreeds.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const breeds = [
  {
    name: "Golden Retriever",
    image: "/image/golden.avif",
    description:
      "Friendly, intelligent, and devoted. Golden Retrievers are excellent family dogs."
  },
  {
    name: "Labrador Retriever",
    image: "/image/labrador.avif",
    description:
      "Energetic and loving. Labradors are one of the most popular dog breeds."
  },
  {
    name: "German Shepherd",
    image: "/image/german.avif",
    description:
      "Highly intelligent and loyal. Often used as police and service dogs."
  },
  {
    name: "Beagle",
    image: "/image/beagle.avif",
    description:
      "Curious and friendly. Beagles are great companions and love exploring."
  },
  {
    name: "Pomeranian",
    image: "/image/pomeranian.avif",
    description:
      "Small but confident. Pomeranians are playful and full of personality."
  },
  {
    name: "Shih Tzu",
    image: "/image/shih-tzu.avif",
    description:
      "Affectionate and charming. Perfect companion dogs for families."
  }
];

export default function DogBreeds() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Dog Breeds
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Explore popular dog breeds and learn about their personalities,
          characteristics, and suitability for different families.
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
                className="h-95 sm:h-72 md:h-90 w-full object-cover"
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