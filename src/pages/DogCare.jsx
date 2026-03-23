// src/pages/DogCare.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tips = [
  {
    title: "Proper Nutrition",
    image: "/image/dog-food.avif",
    text: "Feed your dog balanced meals with proper nutrients. Always ensure clean drinking water is available."
  },
  {
    title: "Daily Exercise",
    image: "/image/dog-walk.avif",
    text: "Dogs need regular exercise to stay healthy and mentally active. Walks and playtime are essential."
  },
  {
    title: "Regular Vet Visits",
    image: "/image/dog-vet.avif",
    text: "Routine veterinary checkups help detect health issues early and keep vaccinations updated."
  },
  {
    title: "Training & Socialization",
    image: "/image/dog-training.avif",
    text: "Training improves behavior and strengthens the bond between you and your dog."
  },
  {
    title: "Grooming",
    image: "/image/dog-grooming.avif",
    text: "Regular grooming keeps your dog clean, healthy, and comfortable."
  },
  {
    title: "Love & Attention",
    image: "/image/dog-love.avif",
    text: "Dogs thrive on affection and companionship. Spend quality time with them daily."
  }
];

export default function DogCare() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Dog Care Guide
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Caring for a dog means providing proper nutrition, exercise,
          medical care, and lots of love. Here are essential tips to keep
          your dog happy and healthy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={tip.image}
                alt={tip.title}
                className="h-70 sm:h-48 md:h-70 w-full object-cover"
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