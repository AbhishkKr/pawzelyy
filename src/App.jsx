import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Search from "./pages/Search";
import HowItWorks from "./pages/HowItWorks";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/how-it-works" element={<HowItWorks />} />

    </Routes>
  );
}