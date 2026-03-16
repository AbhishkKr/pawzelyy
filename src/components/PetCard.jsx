// src/components/PetCard.jsx
import { Link } from "react-router-dom";

export default function PetCard({ image, name, href }) {
  return (
    <Link
      to={href}
      className="group block rounded-2xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="h-85 w-full rounded-t-2xl object-cover"
      />
      <div className="p-4 text-center font-semibold text-gray-800 group-hover:text-[#381124] transition-colors duration-200">
        {name}
      </div>
    </Link>
  );
}