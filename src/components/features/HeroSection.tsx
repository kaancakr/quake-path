"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import AnimatedText from "@/components/common/AnimatedText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/quake-path/assets/turkey-map.webp')] bg-contain bg-no-repeat bg-center mix-blend-soft-light"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            <AnimatedText text="Earthquake Rescue " />
            <br className="hidden md:block" />
            <AnimatedText text="Made Smarter" delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time route optimization and damage assessment for faster
            emergency response across{" "}
            <span className="font-semibold text-blue-300">Turkey&apos;s</span>{" "}
            unique geographical landscape.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold shadow-xl hover:shadow-2xl transition-all"
              href="/download"
            >
              <DevicePhoneMobileIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Download App</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent border-2 border-blue-400/30 text-blue-300 px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold hover:bg-blue-600/20 hover:border-blue-400/50 transition-all"
              href="#features"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
