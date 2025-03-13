"use client"
import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const DocumentsPage = () => {
  const documents = [
    {
      title: "Project Proposal",
      description: "Initial project concept, objectives, methodology, and expected outcomes.",
      icon: <DocumentTextIcon className="w-8 h-8 text-blue-400" />,
      link: "https://drive.google.com/file/d/1a6zYaiHwjIFYx1MvGks6-4QeNu3kXnKc/view?usp=sharing",
      available: true
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical specifications, requirements, and implementation guidelines.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-purple-400" />,
      link: "/docs/specs.pdf",
      available: false
    },
    {
      title: "Analysis Report",
      description: "Comprehensive analysis of problem domain, user needs, and technical constraints.",
      icon: <ChartBarIcon className="w-8 h-8 text-indigo-400" />,
      link: "/docs/analysis.pdf",
      available: false
    },
    {
      title: "High-Level Design",
      description: "Architectural design, system components, interfaces, and implementation strategy.",
      icon: <BeakerIcon className="w-8 h-8 text-pink-400" />,
      link: "/docs/design.pdf",
      available: false
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Project Documents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive documentation covering all aspects of the project lifecycle.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-1 rounded-2xl shadow-xl transition-shadow ${!doc.available ? 'opacity-75' : 'hover:shadow-2xl'
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
                  <div className={`p-4 rounded-xl ${doc.available ? 'bg-blue-900/30' : 'bg-gray-800/50'
                    }`}>
                    {doc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 ${doc.available ? 'text-gray-100' : 'text-gray-400'
                      }`}>
                      {doc.title}
                    </h3>
                    <p className={`mb-6 ${doc.available ? 'text-gray-400' : 'text-gray-500'
                      }`}>
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
      </div>
    </div>
  );
};

export default DocumentsPage;