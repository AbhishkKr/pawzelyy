// src/pages/Organizations.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const organizations = [
  {
    name: "Happy Tails Shelter",
    location: "Pune, India",
    description: "A rescue shelter dedicated to finding loving homes for abandoned dogs and cats."
  },
  {
    name: "Safe Paws Rescue",
    location: "Mumbai, India",
    description: "Non-profit organization helping injured and homeless pets."
  },
  {
    name: "Second Chance Pets",
    location: "Delhi, India",
    description: "Helping pets find families and promoting responsible adoption."
  },
  {
    name: "Forever Homes Animal Rescue",
    location: "Bangalore, India",
    description: "Animal welfare organization focused on rescuing and rehabilitating pets."
  }
];

export default function Organizations() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-6xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Search Adoption Organizations
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 md:mb-12 max-w-xl md:max-w-2xl leading-relaxed">
          Explore trusted shelters and rescue organizations working to
          help pets find their forever homes.
        </p>

        {/* Organizations List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

          {organizations.map((org, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 sm:p-6 hover:shadow-md transition bg-white"
            >

              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {org.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mb-3">
                📍 {org.location}
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {org.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}