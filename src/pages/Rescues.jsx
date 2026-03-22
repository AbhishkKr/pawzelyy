// src/pages/Rescues.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const shelters = [
  {
    name: "Happy Tails Animal Shelter",
    location: "Pune, India",
    image: "/image/shelter1.avif",
    description:
      "Dedicated to rescuing abandoned pets and helping them find loving homes."
  },
  {
    name: "Safe Paws Rescue",
    location: "Mumbai, India",
    image: "/image/shelter2.avif",
    description:
      "A non-profit organization focused on rescuing and rehabilitating injured animals."
  },
  {
    name: "Forever Homes Rescue",
    location: "Bangalore, India",
    image: "/image/shelter3.avif",
    description:
      "Connecting rescued pets with families through adoption events and outreach."
  },
  {
    name: "Second Chance Animal Care",
    location: "Delhi, India",
    image: "/image/shelter4.avif",
    description:
      "Providing medical care and shelter to animals before placing them in safe homes."
  }
];

export default function Rescues() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Shelters & Rescues
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Discover trusted shelters and rescue organizations working to give
          pets a second chance at life.
        </p>

        {/* Shelter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

          {shelters.map((shelter, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={shelter.image}
                alt={shelter.name}
                className="h-44 sm:h-48 md:h-52 w-full object-cover"
              />

              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {shelter.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  📍 {shelter.location}
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {shelter.description}
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