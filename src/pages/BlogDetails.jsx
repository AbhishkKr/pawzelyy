// src/pages/BlogDetails.jsx

import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = [
  {
    id: "dog-tips",
    title: "5 Tips Before Adopting a Dog 🐶",
    image: "/image/dog1.avif",
    date: "March 2026",
    content: `
1. Understand responsibility – pets need time & care.
2. Choose the right breed for your lifestyle.
3. Prepare your home.
4. Budget for food & vet.
5. Be patient and loving.
    `
  },
  {
    id: "tessie-story",
    title: "How Tessie Found Her Home ❤️",
    image: "/image/cat1.avif",
    date: "Feb 2026",
    content: `
Tessie was rescued from the streets.
After care and love, she found a forever home.
Now she enjoys cuddles and sunshine every day.
    `
  },
  {
    id: "puppy-food",
    title: "Best Food for Puppies 🦴",
    image: "/image/food1.avif",
    date: "Jan 2026",
    content: `
Feed balanced diet with protein.
Avoid chocolate & junk food.
Always keep fresh water available.
    `
  },
  {
    id: "grooming",
    title: "Grooming Guide for Pets ✂️",
    image: "/image/grooming.jpg",
    date: "Jan 2026",
    content: `
Regular brushing prevents hair fall.
Trim nails and clean ears.
Bath your pet with safe shampoo.
    `
  }
];

export default function BlogDetails() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-3xl mx-auto">

        {!post ? (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            Post not found
          </p>
        ) : (
          <>
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl mb-6"
            />

            {/* Date */}
            <p className="text-gray-500 text-xs sm:text-sm mb-2">
              {post.date}
            </p>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </>
        )}

      </section>

      <Footer />
    </>
  );
}