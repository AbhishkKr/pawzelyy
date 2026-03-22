// src/pages/Apps.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apps() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#381124] mb-4 sm:mb-6">
          Mobile Site & Apps
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg mb-4 sm:mb-6 leading-relaxed">
          Pawzely will soon be available on mobile devices to make
          pet adoption even easier and more accessible.
        </p>

        <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg mb-6 sm:mb-8 leading-relaxed">
          Our upcoming mobile apps will allow users to browse pets,
          connect with shelters, and manage adoption inquiries
          directly from their phones.
        </p>

        <div className="text-base sm:text-lg md:text-xl font-semibold text-[#381124] bg-[#f8e8ef] px-6 py-3 rounded-full shadow-sm">
          🚧 Coming Soon 🚧
        </div>

      </section>

      <Footer />
    </>
  );
}