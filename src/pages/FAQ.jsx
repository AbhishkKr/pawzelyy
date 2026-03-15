// src/pages/FAQ.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">

          <div>
            <h2 className="font-semibold text-lg">
              How do I adopt a pet through Pawzely?
            </h2>
            <p className="text-gray-600 mt-2">
              Browse available pets, select one you love, and contact the
              adoption organization listed on the pet profile.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Are adoption fees required?
            </h2>
            <p className="text-gray-600 mt-2">
              Yes, some shelters charge adoption fees to cover vaccinations,
              medical care, and shelter costs.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Can I adopt pets from other cities?
            </h2>
            <p className="text-gray-600 mt-2">
              It depends on the organization. Some allow travel adoption,
              while others require local pickup.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              How can shelters partner with Pawzely?
            </h2>
            <p className="text-gray-600 mt-2">
              Shelters and rescues can contact us through the partnerships
              page to list their adoptable pets on Pawzely.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}