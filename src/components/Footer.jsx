import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 rounded-t-[60px] px-8 md:px-16 py-20">

      <div className="grid md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">ABOUT PAWZELY</h3>

          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Pawzely</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/partnerships" className="hover:text-white">Partnerships</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/apps" className="hover:text-white">Mobile Site & Apps</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">PET ADOPTION</h3>

          <ul className="space-y-2">
            <li><Link to="/dog-adoption" className="hover:text-white">Dog Adoption</Link></li>
            <li><Link to="/cat-adoption" className="hover:text-white">Cat Adoption</Link></li>
            <li><Link to="/other-adoption" className="hover:text-white">Other Pet Adoption</Link></li>
            <li><Link to="/organizations" className="hover:text-white">Search Adoption Organizations</Link></li>
            <li><Link to="/stories" className="hover:text-white">Pet-Adoption Stories</Link></li>
            <li><Link to="/events" className="hover:text-white">Local Adoption Events</Link></li>
            <li><Link to="/rescues" className="hover:text-white">Shelters & Rescues</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">PET CARE TOPICS</h3>

          <ul className="space-y-2">
            <li><Link to="/dog-care" className="hover:text-white">Dog Care</Link></li>
            <li><Link to="/dog-breeds" className="hover:text-white">Dog Breeds</Link></li>
            <li><Link to="/cat-care" className="hover:text-white">Cat Care</Link></li>
            <li><Link to="/cat-breeds" className="hover:text-white">Cat Breeds</Link></li>
            <li><Link to="/all-pet-care" className="hover:text-white">All Pet Care</Link></li>
            <li><Link to="/pet-care-videos" className="hover:text-white">Pet Care Videos</Link></li>
            <li><Link to="/helping-pets" className="hover:text-white">Helping Pets</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center text-center">

          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="mb-6 text-sm">
            To get the latest on pet adoption and pet care,
            sign up for our newsletter.
          </p>

          <Link to="/newsletter">
            <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
              Get the Newsletter
            </button>
          </Link>

          {/* Instagram */}
          <div className="flex flex-col items-center mt-6 gap-2">

            <a
              href="https://www.instagram.com/pawzely?igsh=NHBscG42NmdhOTFt&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.instagram.com/pawzely"
              target="_blank"
              className="text-white text-sm hover:underline"
            >
              @pawzely →
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm">
        © 2026. All rights reserved by Pawzely by Abhishek Ranjan.
      </div>

    </footer>
  );
}