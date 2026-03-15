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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Shelters & Rescues
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Discover trusted shelters and rescue organizations working to give
          pets a second chance at life.
        </p>

        {/* Shelter Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {shelters.map((shelter, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={shelter.image}
                alt={shelter.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-lg font-semibold mb-2">
                  {shelter.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  📍 {shelter.location}
                </p>

                <p className="text-gray-600 text-sm">
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