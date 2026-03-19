import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful 🎉");

      navigate("/"); // redirect to home
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">

      <div className="bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden max-w-6xl w-full">

        {/* LEFT SIDE FORM */}
        <div className="p-12">

          <div className="flex items-center gap-2 mb-6">
            <img
              src="/image/paw.jpg"
              alt="paw"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-[#381124] font-semibold text-lg">
              Pawzely
            </p>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Create Account
          </h1>

          <p className="text-gray-500 mb-8">
            Join Pawzely and find your perfect pet 🐾
          </p>

          <form onSubmit={handleSignup} className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="bg-[#381124] text-white px-6 py-3 rounded-lg w-full hover:bg-[#5a1a38] transition"
            >
              Sign Up
            </button>

          </form>

          <p className="text-sm text-gray-500 mt-6">
            Already have an account?
            <Link to="/login" className="text-[#381124] ml-2">
              Log In
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="bg-linear-to-r from-[#381124] to-[#89254d] flex items-center justify-center p-10">

          <img
            src="/image/doglog.png"
            className="max-h-112.5 object-contain"
          />

        </div>

      </div>

    </div>
  );
}