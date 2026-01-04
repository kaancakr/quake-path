"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/common/FeatureCard";
import { FEATURES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl p-2 lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            Key Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Powerful tools designed to save lives during earthquake emergencies
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <FeatureCard
                {...feature}
                className="h-full backdrop-blur-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-blue-500/50 
                shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 p-6 md:p-8 transform hover:-translate-y-1"
              />
            </motion.div>
          ))}
        </div>

        {/* View All Features Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 font-semibold transition-colors"
          >
            <span>View All Features & Technical Details</span>
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
