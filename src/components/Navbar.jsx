// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//  Menu wrapper animation
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

//  Stagger container
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

//  Zig-Zag animation
const item = (i) => ({
  hidden: {
    y: i % 2 === 0 ? "-120%" : "120%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.08,
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
    ...(user ? [{ name: "MY ORDERS", link: "/orders" }] : []),
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      {/* FLOATING NAVBAR (SLIM + WIDE) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] sm:w-[95%] md:w-[92%] lg:w-[88%]">

        <div className="flex items-center justify-between px-3 sm:px-5 md:px-6 py-2 sm:py-2.5
          bg-white/70 backdrop-blur-xl
          border border-white/30
          rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/image/paw.jpg" alt="paw" className="w-8 h-8 rounded-full" />
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-[#381124]">
              Pawzely
            </h1>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Cart */}
            <Link
              to="/cart"
              className="relative bg-[#381124] text-white px-3 py-2 rounded-full"
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
              <div className="hidden sm:flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full">
                <FaUserCircle />
                <span className="text-sm">
                  {user.email?.split("@")[0]}
                </span>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link to="/login" className="text-sm">Log In</Link>
                <Link
                  to="/signup"
                  className="bg-[#381124] text-white px-4 py-2 rounded-full text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/*  MORPHING HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative w-10 h-10 flex items-center justify-center transition-transform duration-500 ${
                menuOpen ? "rotate-180" : ""
              }`}
            >
              <span className={`absolute h-0.5 w-6 transition-all duration-500 ${
                menuOpen ? "rotate-45 bg-black" : "-translate-y-2 bg-black"
              }`} />

              <span className={`absolute h-0.5 w-6 transition-all duration-300 ${
                menuOpen ? "opacity-0" : "bg-black"
              }`} />

              <span className={`absolute h-0.5 w-6 transition-all duration-500 ${
                menuOpen ? "-rotate-45 bg-black" : "translate-y-2 bg-black"
              }`} />
            </button>

          </div>

        </div>

      </nav>

      {/* FULLSCREEN MENU (UNCHANGED) */}
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
              className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-2"
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
                className="space-y-4"
              >

                {/* MENU ITEMS */}
                <div className="border-t border-white/20">
                  {menuItems.map((itemData, i) => (
                    <div key={i} className="overflow-hidden border-b border-white/20">
                      <motion.div variants={item(i)}>
                        <Link
                          to={itemData.link}
                          onClick={() => setMenuOpen(false)}
                          className="block w-full px-4 py-6 text-5xl sm:text-6xl md:text-7xl font-black text-white transition-all duration-300"
                          whileHover={{ x: 20 }}
                        >
                          {itemData.name}
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* AUTH */}
                <div className="mt-10 space-y-3 px-4">
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
    </>
  );
}