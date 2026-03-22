// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-white/20">

      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/image/paw.jpg"
            alt="paw"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="text-lg sm:text-xl font-bold text-[#381124]">
            Pawzely
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/pets" className="hover:text-black transition">
              Find a Pet
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-black transition">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-black transition">
              About Adoption
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-[#381124] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#5a1a38] transition"
          >
            <FaShoppingCart />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">

            {user ? (
              <>
                {/* User Info */}
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <FaUserCircle />
                  <span className="text-sm">
                    {user.email?.split("@")[0]}
                  </span>
                </div>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup" className="hover:text-black">
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  className="bg-[#381124] text-white px-4 py-2 rounded-lg hover:bg-[#5a1a38] transition"
                >
                  Log In
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white/95 backdrop-blur">

          <Link to="/pets" className="block" onClick={() => setMenuOpen(false)}>
            Find a Pet
          </Link>

          <Link to="/shop" className="block" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>

          <Link to="/about" className="block" onClick={() => setMenuOpen(false)}>
            About Adoption
          </Link>

          <hr />

          {user ? (
            <>
              <p className="text-sm">
                Hi, {user.email?.split("@")[0]} 👋
              </p>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="block bg-[#381124] text-white py-2 rounded-lg text-center"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
            </>
          )}
        </div>
      )}

    </nav>
  );
}