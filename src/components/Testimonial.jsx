// src/components/Testimonial.jsx

import { motion } from "framer-motion";

// 🔥 Container (controls stagger)
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.015,   // 👈 letter speed (small = smooth)
      delayChildren: 0.3
    },
  },
};

// 🔥 Letter animation
const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonial() {
  const quote = `You can hide your words from people, but you cannot hide your heart from a pet. They always sense your true intentions. That's why their love is so loyal.`;

  return (
    <section className="px-4 sm:px-6 md:px-10 py-12 md:py-24">

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left">

          {/* ⭐ Stars */}
          <motion.div
            className="flex justify-center md:justify-start text-yellow-400 text-lg sm:text-xl md:text-2xl mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ★ ★ ★ ★ ★
          </motion.div>

          {/* 🔥 Quote (LETTER BY LETTER) */}
          <motion.p
            className="text-purple-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 flex flex-wrap"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {quote.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          {/* 👤 Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-purple-900 font-semibold text-base sm:text-lg">
              Abhishek Ranjan
            </p>

            <p className="text-gray-500 text-sm sm:text-base">
              Founder and CEO @Pawzely
            </p>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/image/testimonial.avif"
            alt="testimonial"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>

    </section>
  );
}