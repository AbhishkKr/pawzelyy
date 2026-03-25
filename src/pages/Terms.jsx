// src/pages/Terms.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  const sections = [
    {
      title: "Use of the Platform",
      text: "Pawzely provides a platform to help connect people with pets available for adoption. Users agree to use the platform only for lawful purposes and in a responsible manner.",
    },
    {
      title: "Pet Adoption Responsibility",
      text: "Pawzely does not directly sell or adopt pets. We connect potential adopters with shelters, rescue organizations, and pet owners. Users are responsible for verifying information and completing the adoption process with the respective organization.",
    },
    {
      title: "User Accounts",
      text: "Users may create accounts to access certain features of the platform. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
    },
    {
      title: "Content and Information",
      text: "While we strive to ensure accurate information, Pawzely does not guarantee that all pet listings or adoption details are complete or accurate. Shelters and organizations provide the information listed on the platform.",
    },
    {
      title: "Prohibited Activities",
      text: "Users must not misuse the platform, including attempting to harm the system, impersonating others, posting false information, or engaging in illegal activities related to pet adoption or animal welfare.",
    },
    {
      title: "Limitation of Liability",
      text: "Pawzely is not responsible for agreements, disputes, or outcomes between adopters and adoption organizations. Users agree that Pawzely acts only as a facilitator.",
    },
    {
      title: "Changes to Terms",
      text: "Pawzely may update these Terms of Service from time to time. Continued use of the platform after updates indicates acceptance of the revised terms.",
    },
    {
      title: "Contact Us",
      text: "If you have questions regarding these terms, please contact us at support@pawzely.com.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 pt-6 sm:mb-10 text-center">
          Terms of Service
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 text-center">
          Welcome to Pawzely. By accessing or using our platform, you agree
          to comply with and be bound by the following terms and conditions.
          Please read them carefully before using our services.
        </p>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">

          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-6"
            >
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black mb-2">
                {index + 1}. {section.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}