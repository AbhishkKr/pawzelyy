// src/pages/Partnerships.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Partnerships() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#381124] mb-4 sm:mb-6">
          Partnerships
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg leading-relaxed mb-6 sm:mb-8">
          We are currently working on building meaningful partnerships
          with shelters, rescue groups, and pet care organizations.
        </p>

        <div className="text-base sm:text-lg md:text-xl font-semibold text-[#381124] bg-[#f8e8ef] px-6 py-3 rounded-full shadow-sm">
          🐾 Partnerships Page Coming Soon
        </div>

      </section>

      <Footer />
    </>
  );
}