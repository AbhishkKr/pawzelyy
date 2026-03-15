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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Dog Care Guide
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Caring for a dog means providing proper nutrition, exercise,
          medical care, and lots of love. Here are essential tips to keep
          your dog happy and healthy.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={tip.image}
                alt={tip.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {tip.title}
                </h3>

                <p className="text-gray-600 text-sm">
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