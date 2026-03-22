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

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Local Adoption Events
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Join adoption events near you and meet wonderful pets looking for
          loving families.
        </p>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={event.image}
                alt={event.title}
                className="h-44 sm:h-48 md:h-52 w-full object-cover"
              />

              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  📅 {event.date}
                </p>

                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  📍 {event.location}
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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