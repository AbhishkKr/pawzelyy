// src/pages/Apps.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apps() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#381124] mb-6">
          Mobile Site & Apps
        </h1>

        <p className="text-gray-600 max-w-xl mb-6">
          Pawzely will soon be available on mobile devices to make
          pet adoption even easier and more accessible.
        </p>

        <p className="text-gray-600 max-w-xl mb-8">
          Our upcoming mobile apps will allow users to browse pets,
          connect with shelters, and manage adoption inquiries
          directly from their phones.
        </p>

        <div className="text-xl font-semibold text-[#381124]">
          🚧 Coming Soon 🚧
        </div>

      </section>

      <Footer />
    </>
  );
}