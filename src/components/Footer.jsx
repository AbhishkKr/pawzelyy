import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 rounded-t-[60px] px-8 md:px-16 py-20">

      <div className="grid md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">ABOUT PAWZELY</h3>

          <ul className="space-y-2">

            <li>
              <Link to="/about" className="hover:text-white transition">
                About Pawzely
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-white transition">
                FAQs
              </Link>
            </li>

            <li>
              <Link to="/partnerships" className="hover:text-white transition">
                Partnerships
              </Link>
            </li>

            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>

            <li>
              <Link to="/apps" className="hover:text-white transition">
                Mobile Site & Apps
              </Link>
            </li>


            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">PET ADOPTION</h3>

          <ul className="space-y-2">

            <li>
              <Link to="/dog-adoption" className="hover:text-white transition">
                Dog Adoption
              </Link>
            </li>

            <li>
              <Link to="/cat-adoption" className="hover:text-white transition">
                Cat Adoption
              </Link>
            </li>

            <li>
              <Link to="/other-adoption" className="hover:text-white transition">
                Other Pet Adoption
              </Link>
            </li>

            <li>
              <Link to="/organizations" className="hover:text-white transition">
                Search Adoption Organizations
              </Link>
            </li>

            <li>
              <Link to="/stories" className="hover:text-white transition">
                Pet-Adoption Stories
              </Link>
            </li>

            <li>
              <Link to="/events" className="hover:text-white transition">
                Local Adoption Events
              </Link>
            </li>

            <li>
              <Link to="/rescues" className="hover:text-white transition">
                Shelters & Rescues
              </Link>
            </li>

          </ul>
        </div>

        {/* Column 3 */}
        <div>
  <h3 className="text-white font-semibold mb-4">PET CARE TOPICS</h3>

  <ul className="space-y-2">

    <li>
      <Link to="/dog-care" className="hover:text-white transition">
        Dog Care
      </Link>
    </li>

    <li>
      <Link to="/dog-breeds" className="hover:text-white transition">
        Dog Breeds
      </Link>
    </li>

    <li>
      <Link to="/cat-care" className="hover:text-white transition">
        Cat Care
      </Link>
    </li>

    <li>
      <Link to="/cat-breeds" className="hover:text-white transition">
        Cat Breeds
      </Link>
    </li>

    <li>
      <Link to="/all-pet-care" className="hover:text-white transition">
        All Pet Care
      </Link>
    </li>

    <li>
      <Link to="/pet-care-videos" className="hover:text-white transition">
        Pet Care Videos
      </Link>
    </li>

    <li>
      <Link to="/helping-pets" className="hover:text-white transition">
        Helping Pets
      </Link>
    </li>

  </ul>
</div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="mb-6 text-sm">
            To get the latest on pet adoption and pet care,
            sign up for our newsletter.
          </p>

          <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
            SIGN UP
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
              <FaTwitter />
            </a>

            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
              <FaDribbble />
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