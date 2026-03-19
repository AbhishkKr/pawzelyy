// src/pages/Newsletter.jsx

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = [
  {
    id: "dog-tips",
    title: "5 Tips Before Adopting a Dog 🐶",
    desc: "Learn the essentials before bringing your new furry friend home.",
    image: "/image/dog1.avif",
    date: "March 2026"
  },
  {
    id: "tessie-story",
    title: "How Tessie Found Her Home ❤️",
    desc: "A beautiful adoption story that will melt your heart.",
    image: "/image/cat1.avif",
    date: "Feb 2026"
  },
  {
    id: "puppy-food",
    title: "Best Food for Puppies 🦴",
    desc: "Top nutrition tips to keep your pet healthy and active.",
    image: "/image/food1.avif",
    date: "Jan 2026"
  },
  {
    id: "grooming",
    title: "Grooming Guide for Pets ✂️",
    desc: "Keep your pets clean, healthy, and happy.",
    image: "/image/grooming.jpg",
    date: "Jan 2026"
  }
];

export default function Newsletter() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Pawzely Newsletter
        </h1>

        <p className="text-gray-600 text-center mb-16">
          Stay updated with pet adoption stories, care tips, and more.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-65 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>

                <h3 className="font-semibold text-lg mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {post.desc}
                </p>

                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-[#381124] font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}