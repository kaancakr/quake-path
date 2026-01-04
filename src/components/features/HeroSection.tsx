"use client";

import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import AnimatedText from "@/components/common/AnimatedText";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/assets/turkey-map.webp')] bg-contain bg-no-repeat bg-center mix-blend-soft-light opacity-15"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight"
          >
            <AnimatedText text="Earthquake Rescue " />
            <br className="hidden md:block" />
            <AnimatedText text="Made Smarter" delay={0.1} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time route optimization and damage assessment for faster
            emergency response across{" "}
            <span className="font-semibold text-blue-300 relative">
              Turkey&apos;s
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </span>{" "}
            unique geographical landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <a
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 overflow-hidden"
              href="/download"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <DevicePhoneMobileIcon className="w-6 h-6 transition-transform group-hover:scale-110 relative z-10" />
              <span className="relative z-10">Download App</span>
            </a>

            <a
              className="group bg-transparent border-2 border-blue-400/30 text-blue-300 px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold hover:bg-blue-600/20 hover:border-blue-400/50 transition-all hover:scale-105 active:scale-95"
              href="/features"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Stats or additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>Mesh Network Ready</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
