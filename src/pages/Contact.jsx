// src/pages/Contact.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#381124] mb-4 pt-6 sm:mb-6">
          Contact Us
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg mb-4 sm:mb-6 leading-relaxed">
          Have questions, suggestions, or partnership inquiries?  
          We'd love to hear from you.
        </p>

        <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-lg mb-6 sm:mb-10 leading-relaxed">
          Reach out to us via email and we will get back to you as soon as possible.
        </p>

        <div className="bg-[#f7f7f7] px-5 sm:px-8 py-5 sm:py-6 rounded-2xl shadow-sm hover:shadow-md transition w-full max-w-md">
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            Email us at
          </p>

          <a
            href="mailto:abhishek.connects246@gmail.com"
            className="text-[#381124] font-semibold text-base sm:text-lg hover:underline wrap-break-word"
          >
            abhishek.connects246@gmail.com
          </a>
        </div>

      </section>

      <Footer />
    </>
  );
}