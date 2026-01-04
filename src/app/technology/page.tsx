"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techStack = [
  {
    category: "Frontend",
    icon: CodeBracketIcon,
    technologies: [
      { name: "Next.js", description: "React framework for server-side rendering and static generation" },
      { name: "React", description: "UI library for building interactive user interfaces" },
      { name: "TypeScript", description: "Typed superset of JavaScript for better code quality" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
      { name: "Framer Motion", description: "Animation library for smooth user interactions" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: ServerIcon,
    technologies: [
      { name: "Node.js", description: "JavaScript runtime for server-side development" },
      { name: "Express.js", description: "Web application framework for RESTful APIs" },
      { name: "Firebase", description: "Real-time database and backend-as-a-service platform" },
      { name: "Firebase Firestore", description: "NoSQL document database for scalable applications" },
      { name: "RESTful APIs", description: "Standard API architecture for service communication" },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Mobile",
    icon: DevicePhoneMobileIcon,
    technologies: [
      { name: "React Native", description: "Cross-platform mobile app development framework" },
      { name: "Expo", description: "Development platform and tooling for React Native" },
      { name: "Native Modules", description: "Platform-specific modules for mesh networking" },
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Data & GIS",
    icon: CircleStackIcon,
    technologies: [
      { name: "Firebase Realtime Database", description: "Real-time synchronized database for geographic data" },
      { name: "GeoJSON", description: "Format for encoding geographic data structures" },
      { name: "Firebase Storage", description: "Cloud storage for raster layers and images" },
      { name: "GPS Integration", description: "Real-time location tracking and mapping" },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Security",
    icon: ShieldCheckIcon,
    technologies: [
      { name: "TLS 1.3", description: "Latest encryption protocol for data in transit" },
      { name: "AES-256", description: "Advanced encryption standard for data at rest" },
      { name: "RBAC", description: "Role-Based Access Control for user permissions" },
      { name: "Multi-factor Auth", description: "Enhanced authentication for coordinators" },
    ],
    color: "from-yellow-500 to-amber-500",
  },
  {
    category: "Infrastructure",
    icon: CloudIcon,
    technologies: [
      { name: "Cloud Deployment", description: "Multi-region cloud infrastructure" },
      { name: "Auto-scaling", description: "Automatic resource scaling based on demand" },
      { name: "Load Balancing", description: "Distributed traffic across servers" },
      { name: "CI/CD Pipeline", description: "Automated testing and deployment" },
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

const developmentTools = [
  { name: "Git", description: "Version control system" },
  { name: "ESLint", description: "Code quality and linting" },
  { name: "Jest", description: "Testing framework" },
  { name: "TypeScript", description: "Type checking and compilation" },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl p-2 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Technology Stack
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Modern Technologies Powering Emergency Response
            </p>
            <p className="text-lg text-gray-400">
              Built with cutting-edge tools and frameworks for scalability, reliability, and performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-4 mb-6 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="border-l-2 border-blue-500/30 pl-4">
                      <h3 className="text-lg font-semibold text-gray-200 mb-1">{tech.name}</h3>
                      <p className="text-sm text-gray-400">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Tools */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl p-2 font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Development Tools & Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/30"
                >
                  <div className="flex items-center gap-4">
                    <CpuChipIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                      <p className="text-sm text-gray-400">{tool.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl p-2 font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Why This Stack?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: GlobeAltIcon,
                  title: "Cross-Platform",
                  description: "Works seamlessly on web, iOS, and Android",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Secure by Default",
                  description: "Built-in security features and best practices",
                },
                {
                  icon: ServerIcon,
                  title: "Scalable",
                  description: "Handles high traffic and concurrent users",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/30 text-center"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

