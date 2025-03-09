"use client";

import { motion } from "framer-motion";
import {
  UserCircleIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Eren Kaan Çakır",
      role: "Lead Developer",
      icon: CpuChipIcon,
      color: "from-blue-400 to-cyan-400",
      delay: 0.1,
      profileURL:
        "https://www.linkedin.com/in/eren-kaan-%C3%A7ak%C4%B1r-0b4312229/",
    },
    {
      name: "Berke Beyazbenli",
      role: "System Architect",
      icon: GlobeAltIcon,
      color: "from-purple-400 to-pink-400",
      delay: 0.2,
      profileURL: "https://www.linkedin.com/in/berke-beyazbenli-266bab241/",
    },
    {
      name: "Selin Siviş",
      role: "Operations Lead",
      icon: UserCircleIcon,
      color: "from-green-400 to-teal-400",
      delay: 0.3,
      profileURL: "https://www.linkedin.com/in/selin-sivi%C5%9F-656550304/",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-6">
                The Minds Behind QuakePath
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We&apos;re a dedicated team of innovators committed to
                transforming disaster response through technology.
              </p>
            </motion.div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: member.delay }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 bg-gray-800/20 rounded-3xl backdrop-blur-lg border border-gray-700/20 hover:border-transparent transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${member.color}`}
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`p-5 rounded-2xl bg-gradient-to-br ${member.color} mb-6`}
                  >
                    <member.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    <motion.a
                      href={member.profileURL}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm bg-gray-700/30 rounded-lg text-gray-300 hover:text-white transition-all"
                    >
                      View Profile
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm border border-gray-600 rounded-lg text-gray-300 hover:border-white hover:text-white transition-all"
                    >
                      Contact
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-3xl p-8 backdrop-blur-lg border border-gray-700/30"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                United by Innovation, Driven by Purpose
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Combining technical excellence with humanitarian passion, we
                bridge the gap between cutting-edge technology and real-world
                impact. Our solutions are built with precision and empathy to
                ensure they reach those who need them most.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <GlobeAltIcon className="w-12 h-12 text-purple-400 opacity-80" />
                <CpuChipIcon className="w-12 h-12 text-blue-400 opacity-80" />
                <UserCircleIcon className="w-12 h-12 text-green-400 opacity-80" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
