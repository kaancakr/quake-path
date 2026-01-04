"use client";

import { motion } from "framer-motion";
import {
  MapIcon,
  LifebuoyIcon,
  ClockIcon,
  SignalIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  CpuChipIcon,
  ServerIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

interface FeatureDetail {
  id: string;
  title: string;
  icon: typeof MapIcon;
  description: string;
  technicalDetails: {
    algorithm?: string;
    architecture?: string;
    endpoints?: string[];
    security?: string;
    reliability?: string;
  };
  useCases: string[];
}

const features: FeatureDetail[] = [
  {
    id: "route-optimization",
    title: "Dynamic Route Optimization",
    icon: MapIcon,
    description:
      "Calculates the safest and fastest paths for emergency vehicles by avoiding active disaster zones and blocked roads using real-time GPS data and disaster zone polygons.",
    technicalDetails: {
      algorithm: "optimizeRoute() - Retrieves potential map data from external GPS providers and identifies path segments that intersect with high-severity DisasterZone polygons. Assigns high 'costs' to dangerous or blocked paths, outputting the path with the lowest cumulative cost.",
      architecture: "Routing Subsystem interfaces with GPS data to generate evacuation paths",
      endpoints: ["GET /api/v1/routes/mesh", "POST /api/v1/rescue/dispatch"],
      reliability: "99.9% availability with multi-region cloud backup",
    },
    useCases: [
      "Emergency vehicle navigation during disasters",
      "Evacuation route planning for civilians",
      "Avoiding blocked or damaged road segments",
      "Real-time path recalculation based on disaster zone updates",
    ],
  },
  {
    id: "mesh-network",
    title: "Resilient Mesh Communication",
    icon: SignalIcon,
    description:
      "Implements a peer-to-peer mesh network allowing offline messaging between users and responders when cellular and internet infrastructure fails.",
    technicalDetails: {
      algorithm: "rerouteCommunication() - If message transmission to a direct connectedNode fails, scans the list of alternative active nodes and re-attempts transmission until a successful path is established or all immediate neighbors are exhausted.",
      architecture: "Communication Layer operates in parallel to standard internet protocols, ensuring devices can communicate directly via peer-to-peer protocols",
      endpoints: ["GET /api/v1/routes/mesh", "POST /api/v1/assistance"],
      reliability: "Graceful degradation: automatically switches to Mesh Network when central cloud server is unreachable",
    },
    useCases: [
      "Offline communication during infrastructure failure",
      "Message relay through intermediate nodes",
      "Mesh network status visualization",
      "Emergency alerts distribution without internet",
    ],
  },
  {
    id: "damage-assessment",
    title: "Real-time Damage Assessment",
    icon: ChartBarIcon,
    description:
      "Visualizes disaster zones using a combination of satellite imagery, GIS data, and real-time sensor updates to create severity heatmaps.",
    technicalDetails: {
      architecture: "Damage Mapping Subsystem processes sensor data to create real-time severity heatmaps",
      endpoints: ["GET /api/v1/victims/{id}/location", "PUT /api/v1/safezones/{id}"],
      reliability: "GeoJSON/raster layers for complex geographic mapping with Firebase real-time persistence",
    },
    useCases: [
      "Real-time disaster zone visualization",
      "Severity level mapping",
      "Affected area polygon tracking",
      "Satellite imagery integration",
    ],
  },
  {
    id: "pre-disaster",
    title: "Pre-disaster Readiness",
    icon: ClockIcon,
    description:
      "Includes tools for emergency kit checklists and evacuation simulations for community preparedness before disasters occur.",
    technicalDetails: {
      architecture: "Preparation Mode module with evacuation route planning and emergency supply management",
      endpoints: ["GET /api/v1/routes/mesh"],
    },
    useCases: [
      "Emergency kit checklist management",
      "Evacuation route simulation",
      "Community preparedness planning",
      "Pre-disaster resource allocation",
    ],
  },
  {
    id: "emergency-sos",
    title: "Emergency Request Initiation (SOS)",
    icon: ExclamationTriangleIcon,
    description:
      "A civilian triggers an SOS which automatically attaches their GPS coordinates and device health status for immediate responder dispatch.",
    technicalDetails: {
      architecture: "Emergency Request workflow with automatic GPS coordinate attachment",
      endpoints: ["POST /api/v1/assistance"],
      security: "AES-256 encryption for data at rest, TLS 1.3 for data in transit",
    },
    useCases: [
      "One-tap SOS button for immediate help",
      "Automatic GPS coordinate transmission",
      "Device health status reporting",
      "Pre-defined emergency messages ('I am under debris', 'I need medical help')",
    ],
  },
  {
    id: "rescue-dispatch",
    title: "Rescue Dispatch & Coordination",
    icon: LifebuoyIcon,
    description:
      "Coordinators view real-time maps of victims and assign specific emergency vehicles to optimized routes for efficient rescue operations.",
    technicalDetails: {
      architecture: "Orchestrator module for service workflow and event-driven alerts",
      endpoints: ["POST /api/v1/rescue/dispatch", "GET /api/v1/rescue/status"],
      reliability: "Real-time victim location tracking and rescue team management",
    },
    useCases: [
      "Real-time victim location mapping",
      "Emergency vehicle assignment",
      "Rescue team coordination",
      "Resource allocation optimization",
    ],
  },
  {
    id: "user-management",
    title: "User Management & RBAC",
    icon: UserGroupIcon,
    description:
      "Governs authentication, device registration, and Role-Based Access Control (RBAC) ensuring civilians, responders, and coordinators have appropriate access levels.",
    technicalDetails: {
      architecture: "User Management Subsystem with multi-factor authentication for admin and rescue teams",
      security: "RBAC ensures civilians cannot access responder data, data anonymization for victim records",
      endpoints: ["POST /api/v1/auth", "GET /api/v1/users"],
    },
    useCases: [
      "Multi-factor authentication for coordinators",
      "Role-based data access control",
      "Device registration and management",
      "Victim data anonymization",
    ],
  },
  {
    id: "security",
    title: "Security & Data Protection",
    icon: ShieldCheckIcon,
    description:
      "Multi-layered security with TLS 1.3 for data in transit, AES-256 for data at rest, and comprehensive error handling with graceful degradation.",
    technicalDetails: {
      security: "TLS 1.3 for data in transit, AES-256 for data at rest, RBAC for access control",
      reliability: "Graceful degradation: critical data entities backed up and replicated across multiple cloud regions",
    },
    useCases: [
      "Encrypted data transmission",
      "Secure victim information storage",
      "Unauthorized access prevention",
      "Data privacy compliance",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              QuakePath Features
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Advanced Emergency Response System for Seismic Zones
            </p>
            <p className="text-lg text-gray-400">
              Comprehensive features designed to address real-time data scarcity, infrastructure
              fragility, and coordination gaps during earthquake disasters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-xl bg-blue-900/30 flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">{feature.title}</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="space-y-4">
                  {feature.technicalDetails.algorithm && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <CpuChipIcon className="w-5 h-5 text-purple-400" />
                        <h3 className="text-sm font-semibold text-purple-400">Algorithm</h3>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.technicalDetails.algorithm}
                      </p>
                    </div>
                  )}

                  {feature.technicalDetails.architecture && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <ServerIcon className="w-5 h-5 text-indigo-400" />
                        <h3 className="text-sm font-semibold text-indigo-400">Architecture</h3>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.technicalDetails.architecture}
                      </p>
                    </div>
                  )}

                  {feature.technicalDetails.endpoints && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <SignalIcon className="w-5 h-5 text-green-400" />
                        <h3 className="text-sm font-semibold text-green-400">API Endpoints</h3>
                      </div>
                      <div className="space-y-1">
                        {feature.technicalDetails.endpoints.map((endpoint, idx) => (
                          <code
                            key={idx}
                            className="block text-xs text-gray-300 font-mono bg-gray-900/50 px-2 py-1 rounded"
                          >
                            {endpoint}
                          </code>
                        ))}
                      </div>
                    </div>
                  )}

                  {feature.technicalDetails.security && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <LockClosedIcon className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-sm font-semibold text-yellow-400">Security</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.technicalDetails.security}
                    </p>
                  </div>
                  )}

                  {feature.technicalDetails.reliability && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                        <h3 className="text-sm font-semibold text-emerald-400">Reliability</h3>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.technicalDetails.reliability}
                      </p>
                    </div>
                  )}

                  {/* Use Cases */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                    <h3 className="text-sm font-semibold text-blue-400 mb-3">Use Cases</h3>
                    <ul className="space-y-2">
                      {feature.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Overview */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Multi-Layered Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Presentation Layer",
                  description: "Mobile and web applications providing intuitive interfaces for Civilians, Responders, and Coordinators",
                },
                {
                  title: "Application Layer",
                  description: "Central server cluster managing the Orchestrator module for service workflow and event-driven alerts",
                },
                {
                  title: "Communication Layer",
                  description: "Mesh network operating in parallel to standard internet protocols, ensuring peer-to-peer communication",
                },
                {
                  title: "Data Persistence Layer",
                  description: "Firebase for real-time data synchronization and GeoJSON/raster layers for complex geographic mapping",
                },
              ].map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/30"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                  <p className="text-gray-400">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              System Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Test Coverage", value: "75%", description: "Core logic verification" },
                { label: "Availability", value: "99.9%", description: "Multi-region backup" },
                {
                  label: "Test Suite",
                  value: "122 tests",
                  description: "Comprehensive verification",
                },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

