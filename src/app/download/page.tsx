"use client";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const DownloadPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-56 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Start Saving Lives Today
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Download QuakeRescue now and join our network of prepared
              individuals and professional responders.
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.a
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-blue-500 transition-all shadow-xl hover:shadow-2xl"
                  href="#"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-900/30 rounded-xl">
                      <ArrowDownTrayIcon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        iOS Version
                      </h3>
                      <p className="text-gray-400">
                        Optimized for Apple Devices
                      </p>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-purple-500 transition-all shadow-xl hover:shadow-2xl"
                  href="#"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-900/30 rounded-xl">
                      <ArrowDownTrayIcon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Android Version
                      </h3>
                      <p className="text-gray-400">Available on Google Play</p>
                    </div>
                  </div>
                </motion.a>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="h-px bg-gray-700 flex-1" />
                <span>Available in 15 languages</span>
                <div className="h-px bg-gray-700 flex-1" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative h-96 bg-gradient-to-tr from-blue-900 to-purple-900 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/quake-path/assets/turkey-map.webp')] opacity-20" />
            {/* <img 
              src="/assets/phone-mockup.png"
              alt="App Preview"
              className="absolute inset-0 w-full h-full object-contain p-8"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadPage;
