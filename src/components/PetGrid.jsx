// src/components/PetGrid.jsx

import { useEffect, useRef } from "react";
import PetCard from "./PetCard";
import { pets } from "../data/pets";
import { Link } from "react-router-dom";

export default function PetGrid() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const scroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollLeft += 1.5; // scroll speed

    const halfWidth = container.scrollWidth / 2;

    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // start from middle for seamless loop
    container.scrollLeft = container.scrollWidth / 2;

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const loopPets = [...pets, ...pets];

  return (
    <section id="pets" className="px-10 py-20 bg-secondary">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-3xl font-bold">
          2k+ Pets Available for Adoption Near You
        </h3>

        <Link
          to="/pets"
          className="text-[#381124] font-semibold hover:underline"
        >
          See More →
        </Link>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
        onMouseEnter={() => cancelAnimationFrame(animationRef.current)}
        onMouseLeave={() =>
          (animationRef.current = requestAnimationFrame(scroll))
        }
      >
        {loopPets.map((pet, index) => (
          <div key={index} className="min-w-65">
            <PetCard
              name={pet.name}
              image={pet.image}
              href={`/pet/${pet.id}`}
            />
          </div>
        ))}
      </div>

    </section>
  );
}