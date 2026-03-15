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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Dog Breeds
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Explore popular dog breeds and learn about their personalities,
          characteristics, and suitability for different families.
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
                className="h-90 w-full object-cover "
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