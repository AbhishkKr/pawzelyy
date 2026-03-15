// src/pages/Terms.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Terms of Service
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <p>
            Welcome to Pawzely. By accessing or using our platform, you agree
            to comply with and be bound by the following terms and conditions.
            Please read them carefully before using our services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              1. Use of the Platform
            </h2>
            <p>
              Pawzely provides a platform to help connect people with pets
              available for adoption. Users agree to use the platform only
              for lawful purposes and in a responsible manner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              2. Pet Adoption Responsibility
            </h2>
            <p>
              Pawzely does not directly sell or adopt pets. We connect
              potential adopters with shelters, rescue organizations, and
              pet owners. Users are responsible for verifying information
              and completing the adoption process with the respective
              organization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              3. User Accounts
            </h2>
            <p>
              Users may create accounts to access certain features of the
              platform. You are responsible for maintaining the confidentiality
              of your login credentials and for all activities under your
              account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              4. Content and Information
            </h2>
            <p>
              While we strive to ensure accurate information, Pawzely does
              not guarantee that all pet listings or adoption details are
              complete or accurate. Shelters and organizations provide
              the information listed on the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              5. Prohibited Activities
            </h2>
            <p>
              Users must not misuse the platform, including attempting to
              harm the system, impersonating others, posting false
              information, or engaging in illegal activities related to
              pet adoption or animal welfare.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              Pawzely is not responsible for agreements, disputes, or
              outcomes between adopters and adoption organizations.
              Users agree that Pawzely acts only as a facilitator.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              7. Changes to Terms
            </h2>
            <p>
              Pawzely may update these Terms of Service from time to time.
              Continued use of the platform after updates indicates
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have questions regarding these terms, please contact
              us at support@pawzely.com.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}