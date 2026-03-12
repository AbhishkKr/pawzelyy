// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PetGrid from "../components/PetGrid";
import AdoptSection from "../components/AdoptSection";
import PetFood from "../components/PetFood";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <SearchBar />
      <PetGrid />
      <AdoptSection />
      <PetFood />
      <Testimonial />
      <Footer />
    </div>
  );
}