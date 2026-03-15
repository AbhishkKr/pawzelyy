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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Helping Pets
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          There are many ways you can help animals in need. From adoption
          to volunteering, every small effort makes a big difference.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={way.image}
                alt={way.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {way.title}
                </h3>

                <p className="text-gray-600 text-sm">
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