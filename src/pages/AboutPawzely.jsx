// src/pages/AboutPawzely.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPawzely() {
  return (
    <>
      <Navbar />

      <div className="px-4 sm:px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-10 sm:pb-12 md:pb-14 max-w-5xl mx-auto">

        {/* About */}
        <section className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            About Pawzely
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Pawzely helps pets find loving homes. Our mission is to connect
            animals in need with caring families while providing reliable
            resources for pet adoption and care.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
            FAQs
          </h2>

          <div className="space-y-2 sm:space-y-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                How do I adopt a pet?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Browse pets on Pawzely and contact the adoption organization
                directly through the platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Is adoption free?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Adoption fees may vary depending on the organization.
              </p>
            </div>
          </div>
        </section>

        {/* Reusable Sections */}
        {[
          {
            title: "Partnerships",
            text: "Pawzely partners with shelters, rescue groups, and pet care organizations to help pets find homes faster.",
          },
          {
            title: "Terms of Service",
            text: "By using Pawzely, you agree to our policies and responsible adoption guidelines.",
          },
          {
            title: "Mobile Site & Apps",
            text: "Pawzely works across devices and will soon be available on mobile applications.",
          },
          {
            title: "Put Pawzely On Your Site",
            text: "Organizations can embed Pawzely widgets to showcase adoptable pets directly on their website.",
          },
          {
            title: "Press",
            text: "Pawzely has been featured in multiple adoption awareness campaigns and pet care communities.",
          },
        ].map((section, index) => (
          <section key={index} className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {section.text}
            </p>
          </section>
        ))}

        {/* Contact */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base break-words">
            For inquiries, partnerships, or support please reach out to
            support@pawzely.com
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
}