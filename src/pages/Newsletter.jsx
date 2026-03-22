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

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Pawzely Newsletter
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Stay updated with pet adoption stories, care tips, and more.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-65 sm:h-60 md:h-65 w-full object-cover"
              />

              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-xs sm:text-sm text-gray-400 mb-2">
                  {post.date}
                </p>

                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
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