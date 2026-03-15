// src/pages/AboutPawzely.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPawzely() {
  return (
    <>
      <Navbar />

      <div className="px-6 md:px-16 py-20 max-w-5xl mx-auto">

        {/* About */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-6">About Pawzely</h1>
          <p className="text-gray-600 leading-relaxed">
            Pawzely helps pets find loving homes. Our mission is to connect
            animals in need with caring families while providing reliable
            resources for pet adoption and care.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">How do I adopt a pet?</h3>
              <p className="text-gray-600">
                Browse pets on Pawzely and contact the adoption organization
                directly through the platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Is adoption free?</h3>
              <p className="text-gray-600">
                Adoption fees may vary depending on the organization.
              </p>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Partnerships</h2>
          <p className="text-gray-600">
            Pawzely partners with shelters, rescue groups, and pet care
            organizations to help pets find homes faster.
          </p>
        </section>

        {/* Terms */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Terms of Service</h2>
          <p className="text-gray-600">
            By using Pawzely, you agree to our policies and responsible
            adoption guidelines.
          </p>
        </section>

        {/* Apps */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Mobile Site & Apps</h2>
          <p className="text-gray-600">
            Pawzely works across devices and will soon be available on mobile
            applications.
          </p>
        </section>

        {/* Widget */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Put Pawzely On Your Site</h2>
          <p className="text-gray-600">
            Organizations can embed Pawzely widgets to showcase adoptable pets
            directly on their website.
          </p>
        </section>

        {/* Press */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Press</h2>
          <p className="text-gray-600">
            Pawzely has been featured in multiple adoption awareness campaigns
            and pet care communities.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-gray-600">
            For inquiries, partnerships, or support please reach out to
            support@pawzely.com
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
}