// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 Parent menu animation
const menuWrapper = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 🔥 Stagger container
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

// 🔥 Alternating animation
const item = (i) => ({
  hidden: {
    y: i % 2 === 0 ? "-100%" : "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.9,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "FIND A PET", link: "/pets" },
    { name: "SHOP", link: "/shop" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/image/paw.jpg" alt="paw" className="w-8 h-8 rounded-full" />
          <h1 className="text-lg sm:text-xl font-bold text-[#381124]">
            Pawzely
          </h1>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-[#381124] text-white px-3 py-2 rounded-lg"
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Auth */}
          {user ? (
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <FaUserCircle />
              <span className="text-sm">
                {user.email?.split("@")[0]}
              </span>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link to="/login">Log In</Link>
              <Link
                to="/signup"
                className="bg-[#381124] text-white px-4 py-2 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* 🔥 HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-black" : "bg-black"}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : "bg-black"}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-black" : "bg-black"}`} />
          </button>

        </div>
      </div>

      {/* 🔥 FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuWrapper}
            initial="hidden"
            animate="visible"
            exit={{ y: "100%", transition: { duration: 0.6 } }}
            className="fixed inset-0 bg-[#381124] z-50 px-6 sm:px-10 md:px-16 overflow-y-auto scrollbar-hide py-16 sm:py-20 md:py-24 lg:py-28"
          >

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-6 flex items-center gap-2"
            >
              <img src="/image/paw.jpg" alt="paw" className="w-8 h-8 rounded-full" />
              <h1 className="text-lg sm:text-xl font-bold text-white">
                Pawzely
              </h1>
            </Link>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto">

              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
              >

                {/* MENU ITEMS */}
                <div className="border-t border-white/20">
                  {menuItems.map((itemData, i) => (
                    <div key={i} className="overflow-hidden border-b border-white/20">
                      <motion.div variants={item(i)}>
                        <Link
                          to={itemData.link}
                          onClick={() => setMenuOpen(false)}
                          className="block w-full px-2 sm:px-4 py-3 sm:py-4 md:py-6 lg:py-8 text-5xl sm:text-6xl md:text-7xl font-black text-white hover:translate-x-6 transition-all duration-300"
                        >
                          {itemData.name}
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* AUTH */}
                <div className="mt-8 sm:mt-10 md:mt-12 space-y-3 px-2 sm:px-4">
                  {user ? (
                    <>
                      <p className="text-white text-lg">
                        Hi, {user.email?.split("@")[0]} 👋
                      </p>
                      <button
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                        className="text-white underline text-lg"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setMenuOpen(false)}
                        className="block text-white text-lg"
                      >
                        Log In
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() => setMenuOpen(false)}
                        className="block text-white text-lg font-semibold"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>

              </motion.div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}