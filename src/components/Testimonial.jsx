export default function Testimonial() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-12 md:py-24">

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left">

          {/* Stars */}
          <div className="flex justify-center md:justify-start text-yellow-400 text-lg sm:text-xl md:text-2xl mb-4 md:mb-6">
            ★ ★ ★ ★ ★
          </div>

          {/* Quote */}
          <p className="text-purple-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
            “You can hide your words from people,
            but you cannot hide your heart from a pet.
            They always sense your true intentions.
            That's why their love is so loyal.”
          </p>

          {/* Author */}
          <div>
            <p className="text-purple-900 font-semibold text-base sm:text-lg">
              Abhishek Ranjan
            </p>

            <p className="text-gray-500 text-sm sm:text-base">
              Founder and CEO @Pawzely
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/image/testimonial.avif"
            alt="testimonial"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-3xl shadow-lg"
          />
        </div>

      </div>

    </section>
  );
}