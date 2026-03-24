import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-20 md:mt-24 mx-4 sm:mx-6 md:mx-10 rounded-3xl shadow-xl bg-linear-to-r from-[#381124] to-[#89254d] px-4 sm:px-6 md:px-10 py-10 md:py-16 text-white">

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">

        {/* Dog Image */}
        <motion.img
          src="/image/dogh.png"
          alt="dog"
          className="w-40 sm:w-52 md:w-auto h-auto max-h-64 md:max-h-80 object-contain order-1 md:order-2"

          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

        {/* Text Content */}
        <div className="max-w-xl order-2 md:order-1 text-center md:text-left">

          {/* Line 1 */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find the Right
          </motion.h2>

          {/* Line 2 (delayed for effect) */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Dog for You
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-white/80 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Take our interactive quiz to find the perfect dog to adopt!
          </motion.p>

        </div>

      </div>

    </section>
  );
}