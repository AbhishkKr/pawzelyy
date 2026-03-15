// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PetGrid from "../components/PetGrid";
import AdoptSection from "../components/AdoptSection";
import PetFood from "../components/PetFood";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import PawTrail from "../components/PawTrail";


export default function Home() {
  return (
    <div className="font-sans">

      <PawTrail />

      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Search */}
      <SearchBar />

      {/* Pets */}
      <section id="pets">
        <PetGrid />
      </section>

      {/* About / Adoption */}
      <section id="about">
        <AdoptSection />
      </section>

      {/* Pet Food */}
      <section id="pet-care">
        <PetFood />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonial />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}