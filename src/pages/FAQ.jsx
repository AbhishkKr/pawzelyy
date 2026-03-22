// src/pages/FAQ.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I adopt a pet through Pawzely?",
      a: "Browse available pets, select one you love, and contact the adoption organization listed on the pet profile.",
    },
    {
      q: "Are adoption fees required?",
      a: "Yes, some shelters charge adoption fees to cover vaccinations, medical care, and shelter costs.",
    },
    {
      q: "Can I adopt pets from other cities?",
      a: "It depends on the organization. Some allow travel adoption, while others require local pickup.",
    },
    {
      q: "How can shelters partner with Pawzely?",
      a: "Shelters and rescues can contact us through the partnerships page to list their adoptable pets on Pawzely.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-6"
            >
              <h2 className="font-semibold text-base sm:text-lg">
                {faq.q}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}