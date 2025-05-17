"use client";
import dynamic from 'next/dynamic';
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { documents } from "../constants/documents";
import { useRef } from 'react';

const HeroSection = dynamic(() => import("@/components/features/HeroSection"), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" />,
  ssr: true 
});

const FeaturesSection = dynamic(() => import("@/components/features/FeaturesSection"), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800" />,
  ssr: false
});

const DemoSection = dynamic(() => import("@/components/features/DemoSection"), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800" />,
  ssr: false
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const documentsRef = useRef(null);
  const isInView = useInView(documentsRef, { once: true, margin: "100px" });

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <div ref={documentsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6 md:p-0">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.title}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.2, delay: index * 0.05 }}
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
                    <a
                      href={doc.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <DocumentTextIcon className="w-5 h-5" />
                      <span>View Report</span>
                    </a>
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
