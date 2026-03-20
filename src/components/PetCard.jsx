// src/components/PetCard.jsx

import { Link } from "react-router-dom";

export default function PetCard({ image, name, href }) {
  return (
    <Link
      to={href}
      className="group block rounded-2xl bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-80 sm:h-48 md:h-56 lg:h-64 object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-3 sm:p-4 text-center font-semibold text-gray-800 group-hover:text-[#381124] transition-colors duration-200 text-sm sm:text-base">
        {name}
      </div>
    </Link>
  );
}