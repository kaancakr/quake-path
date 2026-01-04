"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DemoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('/quake-path/assets/turkey-map.webp')] bg-contain bg-no-repeat bg-center mix-blend-hard-light opacity-30"
        style={{ willChange: "transform" }}
      />

      <div
        className="absolute inset-0 bg-[url('/quake-path/assets/turkey-map.webp')] opacity-10 mix-blend-overlay"
        style={{
          animation: "pulse 4s ease-in-out infinite",
          willChange: "opacity",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5 }}
          className="relative rounded-[2.5rem] shadow-2xl overflow-hidden bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-lg border border-gray-600/30"
        >
          <div className="h-[600px] flex items-center justify-center relative">
            <div className="absolute inset-0">
              {/* Kahramanmaraş Marker */}
              <div className="absolute left-[60%] top-[80%] w-8 h-8 bg-red-500 rounded-full shadow-xl cursor-pointer border-2 border-white animate-pulse-marker">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 px-3 py-1 rounded-lg text-sm text-white shadow-lg">
                  Kahramanmaraş
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mb-1" />
                </div>
              </div>

              {/* Bursa Marker */}
              <div className="absolute left-[8%] top-[22%] w-8 h-8 bg-yellow-400 rounded-full shadow-xl cursor-pointer border-2 border-white animate-pulse-marker-delayed">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 px-3 py-1 rounded-lg text-sm text-white shadow-lg">
                  Bursa
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mb-1" />
                </div>
              </div>
            </div>

            <div className="relative z-20 text-center space-y-8 p-8">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Live Emergency Simulation
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Experience real-time earthquake response scenarios tailored for
                Turkey&apos;s unique geographical challenges.
              </motion.p>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href="/download"
                  className="group relative inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                    Launch Interactive Demo
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
