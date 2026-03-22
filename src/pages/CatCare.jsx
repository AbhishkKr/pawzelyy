// src/pages/CatCare.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tips = [
  {
    title: "Healthy Diet",
    image: "/image/cat-fooddd.avif",
    text: "Provide balanced meals and fresh water daily to keep your cat healthy and active."
  },
  {
    title: "Clean Litter Box",
    image: "/image/cat-litter.avif",
    text: "Cats need a clean litter box. Clean it regularly to maintain hygiene and comfort."
  },
  {
    title: "Regular Vet Visits",
    image: "/image/cat-vet.jpg",
    text: "Routine veterinary checkups ensure your cat stays healthy and vaccinated."
  },
  {
    title: "Play & Exercise",
    image: "/image/cat-play.avif",
    text: "Cats need stimulation and exercise. Toys and playtime keep them mentally active."
  },
  {
    title: "Grooming",
    image: "/image/cat-groom.avif",
    text: "Regular brushing helps prevent hairballs and keeps your cat's coat healthy."
  },
  {
    title: "Love & Comfort",
    image: "/image/cat-love.avif",
    text: "Cats thrive in calm and loving environments where they feel safe and cared for."
  }
];

export default function CatCare() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Cat Care Guide
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Caring for a cat means providing proper nutrition, hygiene,
          veterinary care, and a safe environment.
        </p>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={tip.image}
                alt={tip.title}
                className="h-44 sm:h-48 md:h-52 w-full object-cover"
              />

              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {tip.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {tip.text}
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