"use client";
import dynamic from 'next/dynamic';
import { DocumentTextIcon, ArrowRightIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { documents } from "../constants/documents";
import { useRef } from 'react';
import Link from 'next/link';

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const documentsRef = useRef(null);
  const ctaRef = useRef(null);
  const documentsInView = useInView(documentsRef, { once: true, margin: "100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "100px" });

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      
      {/* Documents Section */}
      <section ref={documentsRef} className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={documentsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl p-2 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Project Documentation
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive reports covering project analysis, technical specifications, and design documentation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={documentsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group h-full ${
                  !doc.available ? "opacity-60" : ""
                }`}
              >
                <div className="h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 rounded-2xl"></div>
                    
                    {!doc.available && (
                      <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                        <span className="text-lg font-semibold text-blue-300/60 flex items-center gap-2">
                          <AcademicCapIcon className="w-5 h-5" />
                          Coming Soon
                        </span>
                      </div>
                    )}
                    
                    <div className="relative z-0 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl transition-all duration-300 ${
                          doc.available 
                            ? "bg-blue-900/30 group-hover:bg-blue-900/50" 
                            : "bg-gray-800/50"
                        }`}>
                          {doc.icon()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${
                            doc.available 
                              ? "text-gray-100 group-hover:text-blue-300" 
                              : "text-gray-400"
                          }`}>
                            {doc.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className={`text-sm md:text-base mb-6 flex-grow leading-relaxed ${
                        doc.available ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {doc.description}
                      </p>
                      
                      {doc.available ? (
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group/btn"
                        >
                          <DocumentTextIcon className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                          <span>View Report</span>
                          <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 bg-gray-800/50 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                          <DocumentTextIcon className="w-5 h-5" />
                          <span>View Report</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="relative py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Explore More?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover detailed features, technical architecture, and comprehensive project documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/features"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Features</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/docs"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-blue-400/30 text-blue-300 px-8 py-4 rounded-full font-semibold hover:bg-blue-600/20 hover:border-blue-400/50 transition-all"
              >
                <DocumentTextIcon className="w-5 h-5" />
                <span>View All Documents</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoSection />
    </>
  );
}
