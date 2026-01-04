"use client";

import { motion } from "framer-motion";
import {
  ServerIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const apiEndpoints = [
  {
    role: "Civilian",
    icon: UserGroupIcon,
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/assistance",
        description: "Send SOS request with GPS coordinates and device health status",
        requestBody: {
          location: "GPS coordinates",
          deviceStatus: "Device health information",
          emergencyType: "Type of emergency",
        },
        response: "Emergency request ID and confirmation",
      },
      {
        method: "GET",
        path: "/api/v1/routes/mesh",
        description: "Get offline routing information for mesh network navigation",
        queryParams: ["start", "end", "avoidZones"],
        response: "Optimized route with waypoints",
      },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Responder",
    icon: ShieldCheckIcon,
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/victims/{id}/location",
        description: "Retrieve real-time location of a specific victim",
        pathParams: ["id: victim identifier"],
        response: "Victim location coordinates and status",
      },
      {
        method: "POST",
        path: "/api/v1/rescue/dispatch",
        description: "Dispatch rescue team to a specific location",
        requestBody: {
          vehicleId: "Emergency vehicle identifier",
          destination: "Target location coordinates",
          route: "Optimized route information",
        },
        response: "Dispatch confirmation and route details",
      },
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    role: "Coordinator",
    icon: ServerIcon,
    endpoints: [
      {
        method: "PUT",
        path: "/api/v1/safezones/{id}",
        description: "Update safe zone status and boundaries",
        pathParams: ["id: zone identifier"],
        requestBody: {
          status: "Zone status (Safe/Unsafe/Unknown)",
          boundaries: "Geographic boundaries",
          severityLevel: "Disaster severity level",
        },
        response: "Updated zone information",
      },
      {
        method: "GET",
        path: "/api/v1/rescue/status",
        description: "Get overall rescue operation status and statistics",
        queryParams: ["status", "region", "timeRange"],
        response: "Rescue operation statistics and status",
      },
    ],
    color: "from-purple-500 to-pink-500",
  },
];

export default function APIDocsPage() {
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
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              RESTful API Endpoints for Emergency Response System
            </p>
            <p className="text-lg text-gray-400">
              Comprehensive API surface for different user roles with secure authentication
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints by Role */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {apiEndpoints.map((roleGroup, groupIndex) => (
              <motion.div
                key={roleGroup.role}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: groupIndex * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${roleGroup.color} p-3 flex items-center justify-center`}>
                    <roleGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{roleGroup.role} Endpoints</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {roleGroup.endpoints.map((endpoint, index) => (
                    <motion.div
                      key={`${roleGroup.role}-${index}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      transition={{ delay: (groupIndex * 0.2) + (index * 0.1) }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`px-3 py-1 rounded text-sm font-semibold ${
                            endpoint.method === "GET"
                              ? "bg-green-900/30 text-green-400"
                              : endpoint.method === "POST"
                              ? "bg-blue-900/30 text-blue-400"
                              : "bg-yellow-900/30 text-yellow-400"
                          }`}
                        >
                          {endpoint.method}
                        </span>
                        <code className="text-sm text-gray-300 font-mono">{endpoint.path}</code>
                      </div>

                      <p className="text-gray-400 mb-4">{endpoint.description}</p>

                      {'pathParams' in endpoint && endpoint.pathParams && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Path Parameters:</h4>
                          <ul className="space-y-1">
                            {endpoint.pathParams.map((param: string, idx: number) => (
                              <li key={idx} className="text-xs text-gray-400 font-mono pl-4">
                                • {param}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {'queryParams' in endpoint && endpoint.queryParams && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Query Parameters:</h4>
                          <ul className="space-y-1">
                            {endpoint.queryParams.map((param: string, idx: number) => (
                              <li key={idx} className="text-xs text-gray-400 font-mono pl-4">
                                • {param}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {endpoint.requestBody && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Request Body:</h4>
                          <div className="bg-gray-900/50 rounded p-3">
                            <pre className="text-xs text-gray-400">
                              {JSON.stringify(endpoint.requestBody, null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Response:</h4>
                        <p className="text-xs text-gray-400">{endpoint.response}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
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
              Authentication & Security
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
                    Authentication Methods
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• JWT tokens for API authentication</li>
                    <li>• Multi-factor authentication for coordinators</li>
                    <li>• Role-Based Access Control (RBAC)</li>
                    <li>• Device registration for mobile apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <SignalIcon className="w-6 h-6 text-green-400" />
                    Security Features
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• TLS 1.3 encryption for all API communications</li>
                    <li>• Rate limiting to prevent abuse</li>
                    <li>• Input validation and sanitization</li>
                    <li>• CORS policies for web applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

