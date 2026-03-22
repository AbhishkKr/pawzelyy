import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

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

      alert("Login successful 🎉");

      // ✅ ALWAYS GO TO HERO PAGE
      navigate("/", { replace: true });

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

      // ✅ ALWAYS GO TO HERO PAGE
      navigate("/", { replace: true });

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

          <p className="text-gray-500 mb-8">
            Log in to continue your journey with Pawzely 🐾
          </p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#381124]"
            />

            {/* PASSWORD */}
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

            {/* OPTIONS */}
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

            {/* BUTTON */}
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
            <Link
              to="/signup"
              className="text-[#381124] font-medium ml-2"
            >
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