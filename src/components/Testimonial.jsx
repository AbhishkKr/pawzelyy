export default function Testimonial() {
  return (
    <section className="px-10 py-24">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE TEXT */}
        <div>

          {/* Stars */}
          <div className="flex text-yellow-400 text-2xl mb-6">
            ★ ★ ★ ★ ★
          </div>

          {/* Quote */}
          <p className="text-purple-800 text-xl leading-relaxed mb-8">
            “You can hide your words from people,
            but you cannot hide your heart from a pet.
            They always sense your true intentions.
            That's why their love is so loyal.”
          </p>

          {/* Author */}
          <div>
            <p className="text-purple-900 font-semibold text-lg">
              Abhishek Ranjan
            </p>

            <p className="text-gray-500">
              Founder and CEO @Pawzely
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/image/testimonial.avif"
            alt="testimonial"
            className="rounded-3xl shadow-lg"
          />
        </div>

      </div>

    </section>
  );
}