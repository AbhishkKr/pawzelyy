import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  // 🔐 EMAIL SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password || !confirmPassword) {
      return alert("Please fill all fields");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match ❌");
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        trimmedEmail,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: serverTimestamp(),
      });

      alert("Signup successful 🎉");
      navigate("/");

    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        alert("Email already exists");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email");
      } else if (error.code === "auth/weak-password") {
        alert("Weak password");
      } else {
        alert("Signup failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // 🔥 GOOGLE SIGNUP
  const handleGoogleSignup = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: serverTimestamp(),
      });

      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Google signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 md:p-10">
      <div className="bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden max-w-6xl w-full">

        {/* LEFT SIDE */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Create Account
          </h1>

          <form onSubmit={handleSignup} className="space-y-5">

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

            {/* CONFIRM PASSWORD */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#381124]"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#381124] text-white px-6 py-3 rounded-lg w-full hover:bg-[#5a1a38] transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>

          {/* GOOGLE */}
          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="mt-4 w-full border py-3 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
          >
            Continue with Google
          </button>

          <p className="text-sm text-gray-500 mt-6">
            Already have an account?
            <Link to="/login" className="text-[#381124] ml-2 font-medium">
              Log In
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gradient-to-r from-[#381124] to-[#89254d] flex items-center justify-center">
          <img
            src="/image/doglog.png"
            alt="dog"
            className="max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}