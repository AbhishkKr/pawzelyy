import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 rounded-t-[60px] px-16 py-20">

      <div className="grid md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">ABOUT PETFINDER</h3>
          <ul className="space-y-2">
            <li>About Petfinder</li>
            <li>FAQs</li>
            <li>Partnerships</li>
            <li>Terms of Service</li>
            <li>Mobile Site & Apps</li>
            <li>Put Petfinder On Your Site</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">PET ADOPTION</h3>
          <ul className="space-y-2">
            <li>Dog Adoption</li>
            <li>Cat Adoption</li>
            <li>Other Pet Adoption</li>
            <li>Search Adoption Organizations</li>
            <li>Pet-Adoption Stories</li>
            <li>Local Adoption Events</li>
            <li>Shelters & Rescues</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">PET CARE TOPICS</h3>
          <ul className="space-y-2">
            <li>Dog Care</li>
            <li>Dog Breeds</li>
            <li>Cat Care</li>
            <li>Cat Breeds</li>
            <li>All Pet Care</li>
            <li>Pet Care Videos</li>
            <li>Helping Pets</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="mb-6 text-sm">
            To get the latest on pet adoption and pet care,
            sign up for newsletter.
          </p>

          <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
            SIGN UP
          </button>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            <div className="bg-gray-700 p-3 rounded-full">
              <FaFacebookF />
            </div>

            <div className="bg-gray-700 p-3 rounded-full">
              <FaTwitter />
            </div>

            <div className="bg-gray-700 p-3 rounded-full">
              <FaDribbble />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm">
        © 2026. All rights reserved by Pawzely by Abhishek Ranjan.
      </div>

    </footer>
  );
}