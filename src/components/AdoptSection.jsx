import { Link } from "react-router-dom";

export default function AdoptSection() {
  return (
    <section id="about" className="px-10 py-20 bg-white">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-6">

          <img
            src="/image/adopt1.avif"
            className="rounded-3xl h-64 w-full object-cover"
          />

          <img
            src="/image/adopt2.avif"
            className="rounded-3xl h-40 w-full object-cover"
          />

          <img
            src="/image/adopt3.avif"
            className="rounded-3xl h-72 w-full object-cover col-span-2"
          />

        </div>

        {/* RIGHT SIDE TEXT */}
        <div>

          <div className="w-12 h-1 bg-purple-700 mb-6"></div>

          <h2 className="text-4xl font-bold text-purple-900 leading-snug">
            Planning to Adopt <br /> a Pet?
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Dogs make for the best friends, and it's only right that we
            celebrate them for all the joy and love they’ve given us.
            Whether labeled on a dog bandana.
          </p>

          <Link
            to="/how-it-works"
            className="mt-6 text-purple-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            HOW IT WORKS →
          </Link>

        </div>

      </div>

    </section>
  );
}