// src/pages/Profile.jsx

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={
              user?.photoURL ||
              "https://ui-avatars.com/api/?name=" + user?.email
            }
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold">
          {user?.email?.split("@")[0]}
        </h2>

        {/* Email */}
        <p className="text-gray-500 mb-4">{user?.email}</p>

        {/* Extra Data */}
        {userData && (
          <div className="text-sm text-gray-600 mb-6">
            <p>Joined: {new Date(userData.createdAt?.seconds * 1000).toDateString()}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3">

          <button className="bg-[#381124] text-white py-2 rounded-lg">
            Edit Profile
          </button>

          <button
            onClick={logout}
            className="bg-gray-200 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}