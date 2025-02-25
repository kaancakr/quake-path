"use client";

import { motion } from "framer-motion";

const DemoSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/assets/turkey-map.webp')] bg-contain bg-no-repeat bg-center mix-blend-hard-light"
      />

      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-10 mix-blend-overlay animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative rounded-[2.5rem] shadow-2xl overflow-hidden bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-lg border border-gray-600/30"
        >
          <div className="h-[600px] flex items-center justify-center relative">
            <div className="absolute inset-0">
              <motion.div
                className="absolute left-[60%] top-[80%] w-8 h-8 bg-red-500 rounded-full shadow-xl cursor-pointer border-2 border-white"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0.8, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  times: [0, 0.2, 0.8, 1],
                }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 px-3 py-1 rounded-lg text-sm text-white shadow-lg">
                  Kahramanmaraş
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mb-1" />
                </div>
              </motion.div>

              <motion.div
                className="absolute left-[5%] top-[15%] w-8 h-8 bg-yellow-400 rounded-full shadow-xl cursor-pointer border-2 border-white"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0.8, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  times: [0, 0.2, 0.8, 1],
                  delay: 0.5,
                }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 px-3 py-1 rounded-lg text-sm text-white shadow-lg">
                  Bursa
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mb-1" />
                </div>
              </motion.div>
            </div>

            <div className="relative z-20 text-center space-y-8 p-8">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Live Emergency Simulation
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Experience real-time earthquake response scenarios tailored for
                Turkey&apos;s unique geographical challenges.
              </motion.p>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/download"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all group"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-colors">
                    Launch Interactive Demo
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default DemoSection;
