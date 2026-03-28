// src/pages/Login.jsx

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, db } from "../firebase";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const provider = new GoogleAuthProvider();

  // ✅ FIXED: Get previous page safely
  const from = location.state?.from
    ? location.state.from.pathname + location.state.from.search
    : "/";

  // 🔐 EMAIL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill all fields");
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCredential.user;

      // ✅ Ensure user exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          createdAt: serverTimestamp(),
        });
      }

      // ✅ Success message + redirect
      setMessage("✅ You have successfully logged in");

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);

    } catch (error) {
      console.error(error);

      if (error.code === "auth/user-not-found") {
        alert("User not found");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email");
      } else {
        alert("Login failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // 🔥 GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          createdAt: serverTimestamp(),
        });
      }

      // ✅ Success message + redirect
      setMessage("✅ Logged in with Google");

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);

    } catch (error) {
      console.error(error);
      alert("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔑 FORGOT PASSWORD
  const handleForgotPassword = async () => {
    if (!email) {
      return alert("Enter your email first");
    }

    try {
      await sendPasswordResetEmail(auth, email.trim());
      alert("Password reset email sent 📩");
    } catch (error) {
      console.error(error);
      alert("Error sending reset email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 md:p-10">
      <div className="bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden max-w-6xl w-full">

        {/* LEFT SIDE */}
        <div className="p-8 md:p-12">

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

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome Back
          </h1>

          {/* 🔥 Redirect message */}
          {location.state?.from && (
            <p className="text-sm text-gray-500 mb-4">
              Please log in to continue
            </p>
          )}

          {/* ✅ Success message */}
          {message && (
            <div className="mb-4 text-green-600 text-sm font-medium bg-green-50 p-3 rounded-lg">
              {message}
            </div>
          )}

          <p className="text-gray-500 mb-8">
            Log in to continue your journey with Pawzely 🐾
          </p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#381124]"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#381124]"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <label className="flex gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <span
                onClick={handleForgotPassword}
                className="cursor-pointer hover:text-black"
              >
                Forgot Password?
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#381124] text-white px-6 py-3 rounded-lg w-full hover:bg-[#5a1a38] transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

          </form>

          {/* GOOGLE */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="mt-4 w-full border py-3 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
          >
            Continue with Google
          </button>

          <p className="text-sm text-gray-500 mt-6">
            Don't have an account?
            <Link to="/signup" className="text-[#381124] ml-2 font-medium">
              Sign Up
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-linear-to-r from-[#381124] to-[#89254d] flex items-center justify-center p-6 md:p-10">
          <img
            src="/image/doglog.png"
            alt="dog"
            className="max-h-100 md:max-h-112.5 object-contain"
          />
        </div>

      </div>
    </div>
  );
}