// src/pages/Stories.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stories = [
  {
    name: "Bella & Riya",
    image: "/image/dog1.avif",
    story:
      "Bella was rescued from the streets and found her forever home with Riya. Today they enjoy long walks and endless cuddles."
  },
  {
    name: "Milo & Arjun",
    image: "/image/cat1.avif",
    story:
      "Milo was a shy kitten when Arjun adopted him. With patience and love, Milo grew into a playful and affectionate companion."
  },
  {
    name: "Snowy & Kavya",
    image: "/image/rabbit.avif",
    story:
      "Snowy the rabbit was adopted by Kavya and quickly became part of the family. He now hops freely around the garden."
  },
  {
    name: "Onyx & Rahul",
    image: "/image/dog2.avif",
    story:
      "Onyx waited months in a shelter before Rahul found him. Today they are inseparable and love hiking together."
  }
];

export default function Stories() {
  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Pet Adoption Stories
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Every adoption tells a story of hope, love, and second chances.
          Here are some heartwarming journeys of pets finding their forever homes.
        </p>

        {/* Story Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={story.image}
                alt={story.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {story.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {story.story}
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