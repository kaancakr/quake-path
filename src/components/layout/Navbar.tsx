"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

// Group navigation links into categories
const navGroups = [
  {
    title: "Main",
    links: NAV_LINKS.filter((link) => ["Home", "Features"].includes(link.label)),
  },
  {
    title: "Technical",
    links: NAV_LINKS.filter((link) =>
      ["Architecture", "Technology", "API Docs", "Security", "Testing"].includes(link.label)
    ),
  },
  {
    title: "Project",
    links: NAV_LINKS.filter((link) =>
      ["About", "Documents", "Backlog"].includes(link.label)
    ),
  },
  {
    title: "Contact",
    links: NAV_LINKS.filter((link) => link.label === "Contact"),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 backdrop-blur-xl bg-white/5 border-b border-gray-800 z-50 shadow-2xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              QuakePath
            </Link>
          </motion.div>

          {/* Hamburger Menu Button - Always visible */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Hamburger Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-2xl"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="space-y-4">
                  {navGroups.map((group, groupIndex) => (
                    <motion.div
                      key={group.title}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ delay: groupIndex * 0.05 }}
                    >
                      {/* Group Header */}
                      <button
                        onClick={() => toggleGroup(group.title)}
                        className="w-full flex items-center justify-between py-3 px-4 text-left text-lg font-semibold text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                      >
                        <span>{group.title}</span>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            openGroups.has(group.title) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Group Links */}
                      <AnimatePresence>
                        {openGroups.has(group.title) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2 pb-2">
                              {group.links.map((link, linkIndex) => (
                                <motion.div
                                  key={link.href}
                                  initial={{ x: 10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: linkIndex * 0.03 }}
                                >
                                  <Link
                                    href={link.href}
                                    className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Divider */}
                      {groupIndex < navGroups.length - 1 && (
                        <div className="h-px bg-gray-700/50 my-4" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
