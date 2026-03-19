// src/components/Hero.jsx

export default function Hero() {
  return (
    <section className="mt-20 md:mt-24 mx-4 sm:mx-6 md:mx-10 rounded-3xl shadow-xl bg-linear-to-r from-[#381124] to-[#89254d] px-4 sm:px-6 md:px-10 py-10 md:py-16 text-white">

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">

        {/* Dog Image */}
        <img
          src="/image/dogh.png"
          alt="dog"
          className="w-40 sm:w-52 md:w-auto h-auto max-h-64 md:max-h-80 object-contain animate-float order-1 md:order-2"
        />

        {/* Text Content */}
        <div className="max-w-xl order-2 md:order-1 text-center md:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Find the Right <br /> Dog for You
          </h2>

          <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg">
            Take our interactive quiz to find the perfect dog to adopt!
          </p>

        </div>

      </div>

    </section>
  );
}