// src/components/Footer.jsx

import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-6 md:px-16 py-12 md:py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-10 md:gap-12 max-w-7xl mx-auto">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
            ABOUT PAWZELY
          </h3>

          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link to="/about" className="hover:text-white">About Pawzely</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/partnerships" className="hover:text-white">Partnerships</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/apps" className="hover:text-white">Mobile Site & Apps</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 2 — FIX 1: Added hover:text-white to all links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
            PET ADOPTION
          </h3>

          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link to="/dog-adoption" className="hover:text-white">Dog Adoption</Link></li>
            <li><Link to="/cat-adoption" className="hover:text-white">Cat Adoption</Link></li>
            <li><Link to="/other-adoption" className="hover:text-white">Other Pet Adoption</Link></li>
            <li><Link to="/organizations" className="hover:text-white">Search Adoption Organizations</Link></li>
            <li><Link to="/stories" className="hover:text-white">Pet-Adoption Stories</Link></li>
            <li><Link to="/events" className="hover:text-white">Local Adoption Events</Link></li>
            <li><Link to="/rescues" className="hover:text-white">Shelters & Rescues</Link></li>
          </ul>
        </div>

        {/* Column 3 — FIX 1: Added hover:text-white to all links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
            PET CARE TOPICS
          </h3>

          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link to="/dog-care" className="hover:text-white">Dog Care</Link></li>
            <li><Link to="/dog-breeds" className="hover:text-white">Dog Breeds</Link></li>
            <li><Link to="/cat-care" className="hover:text-white">Cat Care</Link></li>
            <li><Link to="/cat-breeds" className="hover:text-white">Cat Breeds</Link></li>
            <li><Link to="/all-pet-care" className="hover:text-white">All Pet Care</Link></li>
            <li><Link to="/pet-care-videos" className="hover:text-white">Pet Care Videos</Link></li>
            <li><Link to="/helping-pets" className="hover:text-white">Helping Pets</Link></li>
          </ul>
        </div>

        {/* Column 4 — FIX 3: Consistent left-align on all breakpoints */}
        <div className="flex flex-col items-start">

          <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
            Newsletter
          </h3>

          <p className="mb-6 text-sm sm:text-base max-w-xs">
            To get the latest on pet adoption and pet care,
            sign up for our newsletter.
          </p>

          {/* FIX 5: Use Link styled as button instead of Link wrapping button */}
          <Link
            to="/newsletter"
            className="border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            Get the Newsletter
          </Link>

          {/* Instagram — FIX 4: Added rel="noopener noreferrer" to second link */}
          <div className="flex flex-col items-start mt-6 gap-2">

            <a
              href="https://www.instagram.com/pawzely"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.instagram.com/pawzely"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm hover:underline"
            >
              @pawzely →
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 md:mt-16 pt-6 text-center text-xs sm:text-sm">
        © 2026. All rights reserved by Pawzely by Abhishek Ranjan.
      </div>

    </footer>
  );
}
