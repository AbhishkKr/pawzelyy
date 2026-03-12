// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/image/paw.jpg"
          alt="paw"
          className="w-8 h-8 rounded-full object-cover"
        />
        <h1 className="text-xl font-bold">Pawzely</h1>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex items-center gap-8">

        <li>
          <a
            href="#pets"
            className="text-gray-600 hover:text-black transition font-medium"
          >
            Find a Pet
          </a>
        </li>

        <li>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-black transition font-medium"
          >
            Shop
          </Link>
        </li>

        <li>
          <a
            href="#about"
            className="text-gray-600 hover:text-black transition font-medium"
          >
            About Adoption
          </a>
        </li>

      </ul>

      {/* Actions */}
      <div className="flex gap-4 text-gray-600">

        {/* Navigate to signup page */}
        <Link
          to="/signup"
          className="text-sm hover:text-black transition"
        >
          Sign Up
        </Link>

        <Link to="/login" className="text-sm hover:text-black transition">
          Log In
        </Link>

      </div>

    </nav>
  );
}