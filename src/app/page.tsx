"use client";
import HeroSection from "@/components/features/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import DemoSection from "@/components/features/DemoSection";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { documents } from "../constants/documents";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6 md:p-0">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-1 rounded-2xl shadow-xl transition-shadow ${
              !doc.available ? "opacity-75" : "hover:shadow-2xl"
            }`}
          >
            <div className="h-full bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 relative">
              {!doc.available && (
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                  <span className="text-xl font-semibold text-blue-300/80">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-xl ${
                    doc.available ? "bg-blue-900/30" : "bg-gray-800/50"
                  }`}
                >
                  {doc.icon()}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      doc.available ? "text-gray-100" : "text-gray-400"
                    }`}
                  >
                    {doc.title}
                  </h3>
                  <p
                    className={`mb-6 ${
                      doc.available ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {doc.description}
                  </p>
                  {doc.available ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={doc.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <DocumentTextIcon className="w-5 h-5" />
                      <span>View Report</span>
                    </motion.a>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-gray-700/50 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                      <DocumentTextIcon className="w-5 h-5" />
                      <span>View Report</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <DemoSection />
    </>
  );
}
