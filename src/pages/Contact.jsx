// src/pages/Contact.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#381124] mb-6 mt-6">
          Contact Us
        </h1>

        <p className="text-gray-600 max-w-xl mb-6">
          Have questions, suggestions, or partnership inquiries?  
          We'd love to hear from you.
        </p>

        <p className="text-gray-600 max-w-xl mb-10">
          Reach out to us via email and we will get back to you as soon as possible.
        </p>

        <div className="bg-[#f7f7f7] px-8 py-6 rounded-xl shadow-md">
          <p className="text-gray-700 mb-2">Email us at</p>

          <a
            href="mailto:abhishek.connects246@gmail.com"
            className="text-[#381124] font-semibold text-lg hover:underline"
          >
            abhishek.connects246@gmail.com
          </a>
        </div>

      </section>

      <Footer />
    </>
  );
}