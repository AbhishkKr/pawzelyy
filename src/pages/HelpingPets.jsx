// src/pages/HelpingPets.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ways = [
  {
    title: "Adopt a Pet",
    image: "/image/help-adopt.jpg",
    text: "Adopting a pet gives them a second chance at a happy life."
  },
  {
    title: "Volunteer",
    image: "/image/help-volunteer.jpg",
    text: "Many shelters need volunteers to help care for animals."
  },
  {
    title: "Donate",
    image: "/image/help-donate.jpg",
    text: "Donations help shelters provide food, medical care, and safe homes."
  },
  {
    title: "Spread Awareness",
    image: "/image/help-awareness.avif",
    text: "Share adoption stories and encourage others to adopt instead of shop."
  },
  {
    title: "Foster Pets",
    image: "/image/help-foster.avif",
    text: "Fostering temporarily helps animals transition into permanent homes."
  },
  {
    title: "Support Animal Welfare",
    image: "/image/help-support.avif",
    text: "Support organizations working to improve animal welfare worldwide."
  }
];

export default function HelpingPets() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Helping Pets
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          There are many ways you can help animals in need. From adoption
          to volunteering, every small effort makes a big difference.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={way.image}
                alt={way.title}
                className="h-90 sm:h-56 md:h-80 w-full object-cover"
              />

              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {way.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {way.text}
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