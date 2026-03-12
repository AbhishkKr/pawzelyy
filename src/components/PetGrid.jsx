// src/components/PetGrid.jsx
import PetCard from "./PetCard";

const pets = [
  { name: "Tessie", image: "/image/cat1.avif" },
  { name: "Onyx", image: "/image/dog1.avif" },
  { name: "Tabbies female", image: "/image/cat2.avif" },
  { name: "Chanel", image: "/image/dog2.avif" },
];

export default function PetGrid() {
  return (
    <section id="pets" className="px-10 py-20 bg-secondary">
      <h3 className="mb-10 text-3xl font-bold">
        2k+ Pets Available for Adoption Near You
      </h3>

      <div className="grid gap-8 md:grid-cols-4">
        {pets.map((pet) => (
          <PetCard key={pet.name} {...pet} />
        ))}
      </div>
    </section>
  );
}