"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              QuakePath
            </h3>
            <p className="text-gray-400 text-sm">
              Advanced Emergency Response System for Seismic Zones
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/kaancakr/QuakePath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://kaancakr.github.io/quake-path/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <GlobeAltIcon className="w-4 h-4" />
                  Project Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} QuakePath. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                onClick={() => {
                  // Privacy Policy - can be linked to a page when created
                  alert("Privacy Policy page coming soon");
                }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                onClick={() => {
                  // Terms of Service - can be linked to a page when created
                  alert("Terms of Service page coming soon");
                }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
