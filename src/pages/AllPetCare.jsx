// src/pages/AllPetCare.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tips = [
  {
    title: "Balanced Nutrition",
    image: "/image/pet-food.avif",
    text: "Provide species-appropriate food and always ensure access to fresh water."
  },
  {
    title: "Regular Vet Care",
    image: "/image/dog-vet.avif",
    text: "Routine health checkups and vaccinations help prevent diseases."
  },
  {
    title: "Clean Living Space",
    image: "/image/pet-clean.jpg",
    text: "Maintain a clean and comfortable environment for your pets."
  },
  {
    title: "Exercise & Play",
    image: "/image/pet-play.avif",
    text: "Regular physical and mental activity keeps pets healthy and happy."
  },
  {
    title: "Grooming",
    image: "/image/dog-grooming.avif",
    text: "Proper grooming helps maintain hygiene and prevents health issues."
  },
  {
    title: "Love & Attention",
    image: "/image/pet-love.avif",
    text: "Pets thrive in environments where they feel safe, loved, and cared for."
  }
];

export default function AllPetCare() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          All Pet Care
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Every pet deserves proper care, attention, and a healthy environment.
          Here are essential care tips for keeping all kinds of pets happy.
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
                className="h-44 sm:h-48 md:h-56 w-full object-cover"
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