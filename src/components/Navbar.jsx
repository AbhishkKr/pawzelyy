import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50
    backdrop-blur-lg bg-white/70 border-b border-white/20
    flex items-center justify-between px-6 md:px-10 py-4">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 hover:scale-105 transition">
        <img
          src="/image/paw.jpg"
          alt="paw"
          className="w-8 h-8 rounded-full object-cover"
        />
        <h1 className="text-xl font-bold">Pawzely</h1>
      </Link>

      {/* Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <a href="#pets" className="text-gray-700 hover:text-black transition">
            Find a Pet
          </a>
        </li>

        <li>
          <Link to="/shop" className="text-gray-700 hover:text-black transition">
            Shop
          </Link>
        </li>

        <li>
          <a href="#about" className="text-gray-700 hover:text-black transition">
            About Adoption
          </a>
        </li>
      </ul>

      {/* Auth + Cart */}
      <div className="flex items-center gap-4">

        {/* Cart */}
        <Link
          to="/cart"
          className="relative bg-[#381124] text-white px-4 py-2 rounded-lg hover:bg-[#5a1a38] transition"
        >
          <FaShoppingCart />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

        <Link to="/signup" className="text-gray-700 hover:text-black">
          Sign Up
        </Link>

        <Link
          to="/login"
          className="bg-[#381124] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Log In
        </Link>

      </div>

    </nav>
  );
}