// src/components/PetCard.jsx
export default function PetCard({ image, name }) {
  return (
    <div className="rounded-2xl bg-white shadow-md">
      <img
        src={image}
        alt={name}
        className="h-48 w-full rounded-t-2xl object-cover"
      />
      <div className="p-4 text-center font-semibold">{name}</div>
    </div>
  );
}
