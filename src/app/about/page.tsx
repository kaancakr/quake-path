"use client";

import { motion } from "framer-motion";
import { ChartBarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-36 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              >
                Revolutionizing Earthquake Response
              </motion.h1>

              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  QuakeRescue combines cutting-edge technology with emergency
                  expertise to deliver real-time solutions for both victims and
                  rescue teams.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-lg">
                    <ChartBarIcon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      95% Accuracy
                    </h3>
                    <p className="text-gray-400">Real-time damage assessment</p>
                  </div>

                  <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-lg">
                    <UserGroupIcon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">500K+</h3>
                    <p className="text-gray-400">Lives protected worldwide</p>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/download"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all"
                >
                  Get the App
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-96 bg-gradient-to-tr from-blue-900 to-purple-900 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/assets/turkey-map.webp')] opacity-20" />
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                {/* <img 
                  src="/assets/team-illustration.png" 
                  alt="Emergency Team"
                  className="w-full h-full object-contain"
                /> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
