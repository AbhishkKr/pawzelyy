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

      <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Search Adoption Organizations
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Explore trusted shelters and rescue organizations working to
          help pets find their forever homes.
        </p>

        {/* Organizations List */}
        <div className="grid md:grid-cols-2 gap-8">

          {organizations.map((org, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {org.name}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                📍 {org.location}
              </p>

              <p className="text-gray-600">
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