"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  UserGroupIcon,
  ServerIcon,
  EyeSlashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const securityFeatures = [
  {
    title: "Data Encryption",
    icon: LockClosedIcon,
    description: "End-to-end encryption protecting sensitive information",
    details: [
      "TLS 1.3 for data in transit - Latest encryption protocol ensuring secure communication",
      "AES-256 for data at rest - Military-grade encryption for stored data",
      "Encrypted database connections - All database communications are encrypted",
      "Secure key management - Cryptographic keys stored in secure vaults",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Authentication & Authorization",
    icon: KeyIcon,
    description: "Multi-layered access control system",
    details: [
      "Multi-factor authentication for coordinators - Enhanced security for admin roles",
      "Role-Based Access Control (RBAC) - Granular permissions based on user roles",
      "JWT token-based authentication - Secure, stateless authentication mechanism",
      "Session management - Secure session handling with automatic expiration",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Access Control",
    icon: UserGroupIcon,
    description: "Role-based permissions ensuring data privacy",
    details: [
      "Civilians cannot access responder data - Strict data isolation",
      "Coordinator-only sensitive operations - Restricted administrative functions",
      "Device registration and validation - Authorized device tracking",
      "Audit logging - Complete access history tracking",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Data Privacy",
    icon: EyeSlashIcon,
    description: "Protection of sensitive victim information",
    details: [
      "Data anonymization for analysis - Victim records anonymized for research",
      "Privacy-preserving analytics - Aggregate data without exposing individuals",
      "GDPR compliance - Adherence to data protection regulations",
      "Consent management - User consent tracking and management",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const securityMeasures = [
  {
    title: "Network Security",
    icon: ServerIcon,
    items: [
      "Firewall protection",
      "DDoS mitigation",
      "Intrusion detection systems",
      "Network segmentation",
    ],
  },
  {
    title: "Application Security",
    icon: ShieldCheckIcon,
    items: [
      "Input validation",
      "SQL injection prevention",
      "XSS protection",
      "CSRF tokens",
    ],
  },
  {
    title: "Compliance",
    icon: CheckCircleIcon,
    items: [
      "Security audits",
      "Penetration testing",
      "Vulnerability assessments",
      "Regular security updates",
    ],
  },
];

export default function SecurityPage() {
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
              Security & Privacy
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Multi-Layered Security Design
            </p>
            <p className="text-lg text-gray-400">
              Protecting sensitive emergency data with industry-leading security
              practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 flex items-center justify-center`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl p-2 font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Security Measures
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/30"
              >
                <measure.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {measure.title}
                </h3>
                <ul className="space-y-2">
                  {measure.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
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
              Security Best Practices
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Regular Security Audits
                  </h3>
                  <p className="text-gray-400">
                    Periodic security assessments and penetration testing to
                    identify and address vulnerabilities before they can be
                    exploited.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Incident Response Plan
                  </h3>
                  <p className="text-gray-400">
                    Comprehensive incident response procedures to quickly
                    detect, respond to, and recover from security incidents.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Security Training
                  </h3>
                  <p className="text-gray-400">
                    Regular security awareness training for all team members to
                    ensure best practices are followed throughout development
                    and operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
