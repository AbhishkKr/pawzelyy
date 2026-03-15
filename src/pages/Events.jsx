// src/pages/Events.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    title: "Pawzely Adoption Drive",
    date: "12 April 2026",
    location: "Pune Central Park",
    image: "/image/event1.avif",
    description:
      "Meet adorable dogs and cats looking for loving homes. Adoption counselors will guide you through the process."
  },
  {
    title: "Weekend Pet Adoption Fair",
    date: "20 April 2026",
    location: "Mumbai Pet Square",
    image: "/image/event2.avif",
    description:
      "Join us for a community adoption event where shelters bring rescued pets waiting for families."
  },
  {
    title: "Rescue & Adoption Camp",
    date: "5 May 2026",
    location: "Delhi Animal Welfare Center",
    image: "/image/event3.avif",
    description:
      "A special event to promote pet adoption and animal welfare awareness."
  }
];

export default function Events() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Local Adoption Events
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Join adoption events near you and meet wonderful pets looking for
          loving families.
        </p>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  📅 {event.date}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  📍 {event.location}
                </p>

                <p className="text-gray-600 text-sm">
                  {event.description}
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