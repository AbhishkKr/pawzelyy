// src/components/AdoptSection.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdoptSection() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-10 py-12 md:py-20 bg-white"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

        {/* LEFT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <img
            src="/image/adopt1.avif"
            alt="adopt1"
            className="rounded-2xl h-40 sm:h-52 md:h-64 w-full object-cover"
          />

          <img
            src="/image/adopt2.avif"
            alt="adopt2"
            className="rounded-2xl h-32 sm:h-40 md:h-48 w-full object-cover"
          />

          <img
            src="/image/adopt3.avif"
            alt="adopt3"
            className="rounded-2xl h-48 sm:h-64 md:h-72 w-full object-cover col-span-2"
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="text-center md:text-left">

          <div className="w-10 sm:w-12 h-1 bg-purple-700 mb-4 md:mb-6 mx-auto md:mx-0"></div>

          {/* STAGGER CONTAINER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
          >

            {/* HEADING LINE 1 */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 leading-snug"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Planning to Adopt
            </motion.h2>

            {/* HEADING LINE 2 */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 leading-snug"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 ,ease: "easeOut"}}
            >
              a Pet?
            </motion.h2>

            {/* PARAGRAPH */}
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Dogs make for the best friends, and it's only right that we
              celebrate them for all the joy and love they’ve given us.
              Whether labeled on a dog bandana.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                to="/how-it-works"
                className="mt-6 inline-flex text-purple-700 font-semibold items-center gap-2 hover:gap-4 transition-all"
              >
                HOW IT WORKS →
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}