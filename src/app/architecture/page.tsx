"use client";

import { motion } from "framer-motion";
import {
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  SignalIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const architectureLayers = [
  {
    name: "Presentation Layer",
    icon: GlobeAltIcon,
    description: "Mobile and web applications providing intuitive interfaces for different user roles",
    components: [
      "React Native mobile applications",
      "Next.js web dashboard",
      "Responsive UI components",
      "Real-time data visualization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Application Layer",
    icon: ServerIcon,
    description: "Central server cluster managing the Orchestrator module for service workflow and event-driven alerts",
    components: [
      "RESTful API endpoints",
      "Orchestrator service module",
      "Event-driven alert system",
      "Business logic processing",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Communication Layer",
    icon: SignalIcon,
    description: "Mesh network operating in parallel to standard internet protocols, ensuring peer-to-peer communication",
    components: [
      "Peer-to-peer mesh protocol",
      "Message routing algorithms",
      "Network discovery",
      "Offline communication fallback",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Data Persistence Layer",
    icon: CircleStackIcon,
    description: "PostgreSQL for structured data and GeoJSON/raster layers for complex geographic mapping",
    components: [
      "PostgreSQL database",
      "GeoJSON spatial data",
      "Raster layer storage",
      "Data replication and backup",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const subsystems = [
  {
    name: "Routing Subsystem",
    description: "Interfaces with GPS data to generate evacuation paths and optimize emergency vehicle routes",
    technologies: ["GPS Integration", "Pathfinding Algorithms", "Real-time Updates"],
  },
  {
    name: "Damage Mapping Subsystem",
    description: "Processes sensor data to create real-time severity heatmaps and disaster zone visualizations",
    technologies: ["GIS Processing", "Satellite Imagery", "Sensor Data Integration"],
  },
  {
    name: "User Management Subsystem",
    description: "Governs authentication, device registration, and Role-Based Access Control (RBAC)",
    technologies: ["Multi-factor Authentication", "RBAC", "Device Registration"],
  },
  {
    name: "Mesh Network Subsystem",
    description: "Manages peer-to-peer communication and message routing when infrastructure fails",
    technologies: ["P2P Protocols", "Message Routing", "Network Discovery"],
  },
];

export default function ArchitecturePage() {
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
              System Architecture
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Multi-Layered Architecture for Scalable Emergency Response
            </p>
            <p className="text-lg text-gray-400">
              A tiered architecture ensuring modularity, scalability, and resilience for disaster management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl p-2 font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Multi-Layered Architecture
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${layer.color} p-4 mb-6 flex items-center justify-center`}>
                  <layer.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{layer.name}</h3>
                <p className="text-gray-400 mb-6">{layer.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Components:</h4>
                  <ul className="space-y-2">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsystem Decomposition */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl p-2 font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Subsystem Decomposition
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsystems.map((subsystem, index) => (
              <motion.div
                key={subsystem.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/30"
              >
                <h3 className="text-xl font-bold text-white mb-3">{subsystem.name}</h3>
                <p className="text-gray-400 mb-4">{subsystem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {subsystem.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware/Software Mapping */}
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
              Hardware/Software Mapping
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CloudIcon className="w-6 h-6 text-blue-400" />
                    Cloud Infrastructure
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Multi-region cloud deployment</li>
                    <li>• Auto-scaling server clusters</li>
                    <li>• Load balancing and failover</li>
                    <li>• 99.9% availability SLA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CpuChipIcon className="w-6 h-6 text-purple-400" />
                    Client Devices
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Mobile devices (iOS/Android)</li>
                    <li>• Web browsers (Desktop/Tablet)</li>
                    <li>• GPS-enabled hardware</li>
                    <li>• Mesh network capable devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reliability Features */}
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
              Reliability & Resilience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: ArrowPathIcon,
                  title: "Graceful Degradation",
                  description: "Automatic fallback to mesh network when cloud servers are unreachable",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Data Replication",
                  description: "Critical data entities backed up across multiple cloud regions",
                },
                {
                  icon: SignalIcon,
                  title: "99.9% Availability",
                  description: "High availability through redundant systems and failover mechanisms",
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

