import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClbVIwCNgoin4pJvp-n_1OeIGOs6m3hgQ",
  authDomain: "pawzely-68051.firebaseapp.com",
  projectId: "pawzely-68051",
  storageBucket: "pawzely-68051.appspot.com",
  messagingSenderId: "1050655432918",
  appId: "1:1050655432918:web:8f5004af8998ee9472e977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth (for signup/login)
export const auth = getAuth(app);

// ✅ Firestore (for database)
export const db = getFirestore(app);