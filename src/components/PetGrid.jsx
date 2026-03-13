// src/components/PetGrid.jsx
import { useEffect, useRef } from "react";
import PetCard from "./PetCard";

const pets = [
  { name: "Tessie", image: "/image/cat1.avif" },
  { name: "Onyx", image: "/image/dog1.avif" },
  { name: "Tabbies female", image: "/image/cat2.avif" },
  { name: "Chanel", image: "/image/dog2.avif" },
  { name: "Jojo", image: "/image/jojo.avif" },
  { name: "Choji", image: "/image/chojii.avif" },
  { name: "Pusha", image: "/image/pushaa.avif" },
  { name: "Minna", image: "/image/minnaaa.avif" },
];

export default function PetGrid() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = setInterval(() => {
      if (scrollContainer) {

        scrollContainer.scrollLeft += 1;

        // reset scroll when end reached
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scroll);
  }, []);

  return (
    <section id="pets" className="px-10 py-20 bg-secondary">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-3xl font-bold">
          2k+ Pets Available for Adoption Near You
        </h3>

        <button className="text-[#381124] font-semibold hover:underline">
          See More →
        </button>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-4"
      >
        {pets.map((pet) => (
          <div key={pet.name} className="min-w-65">
            <PetCard {...pet} />
          </div>
        ))}
      </div>

    </section>
  );
}