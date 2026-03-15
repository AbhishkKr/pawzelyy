// src/pages/Partnerships.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Partnerships() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#381124] mb-6">
          Partnerships
        </h1>

        <p className="text-gray-600 max-w-xl mb-8">
          We are currently working on building meaningful partnerships
          with shelters, rescue groups, and pet care organizations.
        </p>

        <p className="text-xl font-semibold text-[#381124]">
          🐾 Partnerships Page Coming Soon
        </p>

      </section>

      <Footer />
    </>
  );
}