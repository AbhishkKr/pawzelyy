import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const { cart } = useCart();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out 👋");
  };

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
          <h1 className="text-lg sm:text-xl font-bold">Pawzely</h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#pets" className="hover:text-black">Find a Pet</a></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#about">About Adoption</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-[#381124] text-white px-3 sm:px-4 py-2 rounded-lg"
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
                <span className="text-sm text-gray-700">
                  Hi, {user.email.split("@")[0]} 👋
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-gray-200 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup">Sign Up</Link>
                <Link
                  to="/login"
                  className="bg-[#381124] text-white px-4 py-2 rounded-lg"
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

          <a href="#pets" className="block">Find a Pet</a>
          <Link to="/shop" className="block">Shop</Link>
          <a href="#about" className="block">About Adoption</a>

          <hr />

          {user ? (
            <>
              <p className="text-sm">
                Hi, {user.email.split("@")[0]} 👋
              </p>

              <button
                onClick={handleLogout}
                className="w-full bg-gray-200 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="block">Sign Up</Link>
              <Link
                to="/login"
                className="block bg-[#381124] text-white py-2 rounded-lg text-center"
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