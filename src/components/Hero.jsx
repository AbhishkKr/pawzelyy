// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="mx-4 md:mx-10 rounded-3xl bg-linear-to-r from-[#381124] to-[#89254d] px-6 py-12 md:p-16 text-white">

      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <img
          src="/image/dogh.png"
          alt="dog"
          className="h-56 md:h-80 object-contain order-1 md:order-2"
        />

        {/* Text */}
        <div className="max-w-xl order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Find the Right <br /> Dog for You
          </h2>

          <p className="mt-4 text-white/80 text-sm md:text-base">
            Take our interactive quiz to find the perfect dog to adopt!
          </p>
        </div>

      </div>

    </section>
  );
}