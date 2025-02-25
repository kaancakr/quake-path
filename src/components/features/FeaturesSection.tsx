"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/common/FeatureCard";
import { FEATURES } from "@/lib/constants";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/assets/turkey-map.png')] opacity-15 mix-blend-soft-light animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl h-14 font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Key Features
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="h-full"
            >
              <FeatureCard
                {...feature}
                className="h-full backdrop-blur-xl bg-gray-800/20 hover:bg-gray-800/40 transition-all border border-gray-700/20 hover:border-blue-500/40 
                shadow-2xl hover:shadow-3xl p-8 transform hover:-translate-y-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
