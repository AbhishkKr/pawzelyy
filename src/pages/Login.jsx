// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">

      <div className="bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden max-w-6xl w-full">

        {/* LEFT SIDE FORM */}
        <div className="p-12">

          {/* Logo */}
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
            Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Log in to continue your journey with Pawzely
          </p>

          {/* Form */}
          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3"
            />

            <div className="flex justify-between text-sm text-gray-500">
              <label className="flex gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="cursor-pointer">
                Forgot Password?
              </span>
            </div>

            <button className="bg-[#381124] text-white px-6 py-3 rounded-lg w-full">
              Log In
            </button>

          </form>

          <p className="text-sm text-gray-500 mt-6">
            Don't have an account?
            <Link
              to="/signup"
              className="text-[#381124] font-medium ml-2"
            >
              Sign Up
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