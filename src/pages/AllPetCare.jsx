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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          All Pet Care
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Every pet deserves proper care, attention, and a healthy environment.
          Here are essential care tips for keeping all kinds of pets happy.
        </p>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={tip.image}
                alt={tip.title}
                className="h-56 w-full object-cover"
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